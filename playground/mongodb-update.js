//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connectd to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5aadd382400b038e3e54077b')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5aadc831151dd1d4711bebd6')
    },{
        // $set: {
        //     name: 'Dorothy'
        // },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    // db.close();
});
