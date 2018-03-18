const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) remove everything
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove().then();
Todo.findOneAndRemove({_id: '5aae90173606ba1e17d32a9a'}).then((todo)=>{

});
// Todo.findByIdAndRemove().then();
Todo.findByIdAndRemove('5aae90173606ba1e17d32a9a').then((todo)=>{
    console.log(todo);
});