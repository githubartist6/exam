const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true  },
    password: { type: String, required: true },
    book: { type: String, required: true }

});

const singup = mongoose.model("Singup_data", chatSchema);

module.exports = singup;