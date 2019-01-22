'use strict'
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, require: [true, 'A name is require'] },
    lastname: { type: String, require: [true, 'A lastname is require'] },
    email: { type: String, unique: true, require: [true, 'A valid email is require'] },
    password: { type: String, require: [true, 'A password is require'] },
    img: { type: String, required: false },
    role: { type: String, default: 'USER_ROLE' }
});

userSchema.plugin(uniqueValidator, { message: 'the {PATH} must be unique' });

module.exports = mongoose.model('User', userSchema);