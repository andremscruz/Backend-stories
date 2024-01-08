const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String
})

storySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Story', storySchema)