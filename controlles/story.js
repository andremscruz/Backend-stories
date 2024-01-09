const storyRouter = require('express').Router()
const Story = require('../models/story')

//FETCH ALL RESOURCES
storyRouter.get('/', (request, response) => {
    Story.find({}).then(blog => response.json(blog))
  })

//CREATES NEW RESOURCE
storyRouter.post('/', (request, response, next) => {
    const body = request.body
  
    const story = new Story({
      author: body.author,
      title: body.title,
      content: body.content,
      readTime: body.readTime
    })
  
    story
    .save()
    .then((savedStory) => {
        response.json(savedStory)
    })
    .catch(error => next(error))
})

module.exports = storyRouter