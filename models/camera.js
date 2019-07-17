const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    brand: String,
    model: String,
    quality: String,
    format: String,
    megaPixels: Number,
    lenses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lens'}]
})

const Camera = mongoose.model('Camera', cameraSchema);
module.exports = Camera;