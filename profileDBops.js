/*'use strict'

module.exports = {
  testDB: testDB
}


const db = require('./sqlWrap');
 

const insertDB = "insert into ProfileTable (userID, displayName) values (?,?)";
//const allDB = "select * from ProfileTable where activity = ?";
const allDB = "select * from ProfileTable";

console.log("2) inside profile_DB_ops");

async function testDB() {
  try{

    console.log("2.1) inside profileDBops - testDB");

    //if you comment these two lines, the rest of the function works ???
    //comment these and try running
    await db.run(insertDB,[6465464,'plsworkibegu']);
    await db.run(insertDB,[123456,'amaantest222']);

    console.log("2.2) inside profileDBops - testDB");


    let result = await db.all("select * from ProfileTable",[]);


    console.log("2.3) inside profileDBops - testDB");


    await console.log("ProfileTable---- result", result);


  }catch(error){
    console.log("___error in testdb___ : "+ error);
  }

}*/
