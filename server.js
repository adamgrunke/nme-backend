const mongoose = require('mongoose');
const Camera = require('./models/camera')
const Lens = require('./models/lens')

// Parent CRUD ROUTES
// GET ALL
app.get('/cameras', (req, res) => {
    Camera.find({}, function(err, camera) {
        if (err) res.json(err)
        res.json(camera)
    })
})