const Widget = require('../models/widget.model');

module.exports.index = (req, res) =>{
    Widget.find()
        .then(allWidgets => res.json({allWidgets}))
        .catch(err => res.status(400).json(err));
}

module.exports.findOneWidget = (req,res)=>{
    Widget.findOne({ _id: req.params.id })
        .then(widget => res.json(widget))
        .catch(err => res.status(400).json(err));
}


module.exports.createWidget =(req, res) =>{
    const { input } = req.body;
    Widget.create({
        input
    })
        .then(newWidget => res.json(newWidget))
        .catch(err => res.status(400).json(err));
}


module.exports.updateWidget = (req,res) =>{
    Widget.findOneAndUpdate({ _id: req.params.id}, req.body, {runValidators: true, new: true})
        .then(updatedWidget => res.json(updatedWidget))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteWidget = (req, res) =>{
    Widget.deleteOne({ _id: req.params.id })
        .then(confirmDelete => res.redirect('/api/authors'))
        .catch(err => res.status(400).json(err));
}
