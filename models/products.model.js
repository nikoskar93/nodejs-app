const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

let productsSchema = new Schema({
    product: {
        type: String,
        required: [true, 'Product is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    cost: {
        type: Number,
        required: [true, 'Cost is required field'],
        max: 100
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    }
})

productsSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Product', productsSchema)