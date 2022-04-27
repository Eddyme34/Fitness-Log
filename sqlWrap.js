'use strict'

const sql = require('sqlite3');
const util = require('util');


// old-fashioned database creation code 

// creates a new database object, not a 
// new database. 
const db = new sql.Database("activities.db");
const pdb = new sql.Database("profiles.db");

// check if database exists
let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='ActivityTable' ";

let profile_cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='ProfileTable' "

db.get(cmd, function (err, val) {
  if (val == undefined) {
        console.log("No database file - creating one");
        createActivityTable();
  } else {
        console.log("Database file found");
  }
});

pdb.get(profile_cmd, function (err, val) {
  
  console.log("1) inside sqlWrap");

  if (val == undefined) {

        console.log("No pRoFiLe database file - creating one");
        createProfileTable();
        console.log("created pRoFiLe db");

  } else {
        //console.log(val);
        console.log("pRoFiLe Database file found ");
  }
});

// called to create table if needed
function createActivityTable() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmd = 'CREATE TABLE ActivityTable (rowIdNum INTEGER PRIMARY KEY, userid TEXT, activity TEXT, date INTEGER, amount FLOAT)';
  db.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
  });
}

function createProfileTable() {
  const cmd = 'CREATE TABLE ProfileTable (rowIdNum INTEGER PRIMARY KEY, userID TEXT, displayName TEXT)';
  pdb.run(cmd, function(err, val) {
    if (err) {
      console.log("Profile Database creation failure",err.message);
    } else {
      console.log("Created pRoFiLe database");
    }
  });
}

// wrap all database commands in promises
db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);

pdb.run = util.promisify(pdb.run);
pdb.get = util.promisify(pdb.get);
pdb.all = util.promisify(pdb.all);

// empty all data from db
db.deleteEverything = async function() {
  await db.run("delete from ActivityTable");
  db.run("vacuum");
}

pdb.deleteEverything = async function() {
  await pdb.run("delete from ProfileTable");
  pdb.run("vacuum");
}
// allow code in index.js to use the db object
module.exports = {db: db, pdb: pdb}