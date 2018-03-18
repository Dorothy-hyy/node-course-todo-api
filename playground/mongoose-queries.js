const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aadfa4dbf105a221abccccb';
if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

var user_id = '5aade5738d77655ffca33794';
if(!ObjectID.isValid(user_id)){
    console.log('ID not valid');
}

User.findById(user_id).then((user)=>{
    if(!user){
        return console.log('ID not found');
    }
    console.log('User By Id', user);
}).catch((e)=> console.log(e));

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=> console.log(e));

