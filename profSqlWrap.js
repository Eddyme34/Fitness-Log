/*'use strict'

const sql = require('sqlite3');
const util = require('util');


// old-fashioned database creation code 

// creates a new database object, not a 
// new database. 
const db = new sql.Database("profiles.db");

let profile_cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='ProfileTable' "

console.log("1) inside prof_Sql_Wrap.js");

//profile database  
db.get(profile_cmd, function (err, val) {
  
  console.log("1.1) inside get progsql");

  if (val == undefined) {

        console.log("No pRoFiLe database file - creating one");
        createProfileTable();
        console.log("created pRoFiLe db");

  } else {
        //console.log(val);
        console.log("pRoFiLe Database file found ");
  }
});




function createProfileTable() {
  const cmd = 'CREATE TABLE ProfileTable (rowIdNum INTEGER PRIMARY KEY, userID FLOAT, displayName TEXT)';
  db.run(cmd, function(err, val) {
    if (err) {
      console.log("Profile Database creation failure",err.message);
    } else {
      console.log("Created pRoFiLe database");
    }
  });
}


// wrap all database commands in promises     //no idea what this means
db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);


// empty all data from db
db.deleteEverything = async function() {
  await db.run("delete from ProfileTable");
  db.run("vacuum");
}



// allow code in index.js to use the db object
module.exports = db;*/