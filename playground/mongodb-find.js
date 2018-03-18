//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Dorothy', age:23};
// var {name} = user;
// console.log(name);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connectd to MongoDB server');
    // db.collection('Todos').find({
    //     _id:new ObjectID('5aadcc58400b038e3e540471')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    // db.collection('Users').find({name:'Dorothy'}).count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    db.collection('Users').find({name:'Dorothy'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });

    // db.close();
});
