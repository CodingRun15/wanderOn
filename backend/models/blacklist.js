const mongoose = require('mongoose');
const blacklist = mongoose.model('blacklist',{
    token:String,
})
module.exports = blacklist;