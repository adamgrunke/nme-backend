const mongoose = require('mongoose');

const lensSchema = new mongoose.Schema({
    brand: String,
    focalLength: Number,
    type: String,
    mount: String
    
})

const Lens = mongoose.model('Lens', lensSchema);
module.exports = Lens;