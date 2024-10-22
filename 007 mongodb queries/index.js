const {MongoClient} = require('mongodb');

// step 1 : creating database
const dbName = 'wsb_109_tmp';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// step 2 : connecting database
const connection = async()=>{
    await client.connect();
    const db = client.db(dbName);

    return db;
}


// inserting data into database
const insertData = async()=>{
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.insertOne({
        name : 'Arpit',
        age : 22,
        contact : 123456
    })

    console.log(response);
};
// insertData();

// reading data from database
const readData = async ()=>{
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.find().toArray();

    console.log(response);
};
// readData();

// deleting data from database
const deleteData = async()=>{
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.deleteOne({name: 'Arpit'});

    console.log(response);
}
// deleteData();

// updating data in database
const updateData = async()=>{
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.updateOne(
        {name: 'Arpit'},
        {
            $set : {name: 'Jhon Doe'}
        }
    );

    console.log(response);
}
updateData();