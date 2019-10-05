const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    budget: Number,
    expenses: [],
    debits: []
})

let User = mongoose.model('User', userSchema);

module.exports = User;