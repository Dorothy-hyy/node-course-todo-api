//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to Mongo DB server');
    }
    console.log('Connectd to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Dorothy'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5aadc67e5849d8d2285a29bd')}).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
});
