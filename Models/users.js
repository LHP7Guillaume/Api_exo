import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const users = new Schema({
    name: String, // String is shorthand for {type: String}
    password: String

});

const Users = mongoose.model('Users', users);

export default Users;