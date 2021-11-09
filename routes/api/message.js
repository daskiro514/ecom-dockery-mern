const express = require('express')
const router = express.Router()

const Message = require('../../models/Message')
const User = require('../../models/User')

router.post('/addNewMessage', async (req, res) => {
  const newMessage = new Message({
    ...req.body
  })

  const client = await User.findById(req.body.client)
  const toClientMessages = client.toClientMessages
  const toAdminMessages = client.toAdminMessages

  if (req.body.writtenBy === 'admin') {
    await User.findByIdAndUpdate(req.body.client, {toClientMessages: toClientMessages + 1}, {new: true})
  } else {
    await User.findByIdAndUpdate(req.body.client, {toAdminMessages: toAdminMessages + 1}, {new: true})
  }

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

router.delete('/deleteMessage', async (req, res) => {
  var messageID = req.query['id']
  var writtenBy = req.query['written']
  var clientID = req.query['clientID']

  await Message.findByIdAndDelete(messageID)

  const client = await User.findById(clientID)
  const toClientMessages = client.toClientMessages
  const toAdminMessages = client.toAdminMessages

  if (writtenBy === 'admin') {
    await User.findByIdAndUpdate(clientID, {toClientMessages: toClientMessages - 1}, {new: true})
  } else {
    await User.findByIdAndUpdate(clientID, {toAdminMessages: toAdminMessages - 1}, {new: true})
  }

  res.json({
    success: true
  })
})

router.get('/getClientsMessageNumbers', async (req, res) => {
  console.log('check on ADMIN')
  const clients = await User.find({type: 'client'})
  let clientsMessageNumbers = []
  clients.forEach(client => {
    clientsMessageNumbers.push({
      clientID: client._id,
      clientFirstName: client.firstName,
      clientLastName: client.lastName,
      messageNumber: client.toAdminMessages
    })
  })

  res.json({
    success: true,
    clientsMessageNumbers
  })
})

router.get('/getAdminMessageNumbers/:id', async (req, res) => {
  console.log('check on CLIENT')
  const client = await User.findById(req.params.id)

  let adminMessageNumbers = {
    messageNumber: client.toClientMessages
  }

  res.json({
    success: true,
    adminMessageNumbers
  })
})

module.exports = router