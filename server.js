const mongoose = require('mongoose');
const Camera = require('./models/camera')
const Lens = require('./models/lens')

// Parent CRUD ROUTES
// GET ALL - parent
app.get('/cameras', (req, res) => {
    Camera.find({}, function(err, camera) {
        if (err) res.json(err)
        res.json(camera)
    })
})

// GET ONE - parent
app.get('/camera/:id', (req, res) => {
    Camera.findById(req.params.id, function(err, camera) {
        if (err) res.json(err)
        res.json(camera)
    })
})

// CREATE - parent
app.post('/camera', (req, res) => {
    Camera.create({
    brand: "Lumix",
    model: "G9",
    quality: "professional",
    format: "micro43",
    megaPixels: 20,
    lenses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lens'}]
    }, function(err, camera) {
        if (err) res.json(err)
        res.json(camera)
    })
})

// Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)
// UPDATE - parent
app.put('/camera/:id', (req, res) => {
    Camera.findByIdAndUpdate(req.params.id, {megaPixels: 80}, function(err, camera) {
        if (err) res.json(err)
        res.json(camera)
    })
})

// DELETE - parent
app.delete('/camera', (req, res) => {
    Camera.findOneAndRemove({model: "G9"}, function(err) {
        if (err) res.json(err);
        res.json({message: "Camera Deleted"})
    })
})

// Child CRUD ROUTES
// GET ONE
app.get('/lens/:id', (req, res) => {
    Lens.findById(req.params.id, function(err, lens) {
        if (err) res.json(err)
        res.json(lens)
    })
})

// CREATE ONE - placeholder
app.post('/lens/:id', (req, res) => {
    Camera.findById(req.params.id, function (err, camera) {
    Lens.findById(req.body.id, function (err, lens) {
        camera.lens.push(lens);
        camera.save(function (err) {
        camera.lens.push(lens)
        lens.save(function (err) {
            if (err) res.json(err)
            res.json(lens)
        })
        })
    })
    })
})

// DELETE - placeholder
app.post('/lens/:id', (req, res) => {
    Lens.findById(req.params.id, function (err, lens) {
    Camera.findById(req.body.id, function (err, camera) {
        camera.lens.push(lens);
        camera.save(function (err) {
        camera.lens.push(lens)
        lens.save(function (err) {
            if (err) res.json(err)
            res.json(lens)
        })
        })
    })
    })
})



