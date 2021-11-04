const express = require('express')
const router = express.Router()

const Message = require('../../models/Message')

router.post('/addNewMessage', async (req, res) => {
  const newMessage = new Message({
    ...req.body
  })
  await newMessage.save()

  res.json({
    success: true
  })
})

router.get('/getMessages/:id', async (req, res) => {
  const messages = await Message.find({client: req.params.id}).populate('writer')

  res.json({
    success: true,
    messages
  })
})

router.delete('/deleteMessage/:id', async (req, res) => {
  await Message.findByIdAndDelete(req.params.id)

  res.json({
    success: true
  })
})

module.exports = router