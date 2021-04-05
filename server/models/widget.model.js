const mongoose = require('mongoose');

const WidgetSchema = new mongoose.Schema({
    input: {
        type: String,
        required: [true, "Input is required"]
    }
}, {timestamps: true});

const Widget = mongoose.model("Widget", WidgetSchema);

module.exports = Widget;
