const express = require('express')
const router = express.Router()

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// MODEL
const User = require('../../models/User')
const Order = require('../../models/Order')
const Notification = require('../../models/Notification')

// FILE UPLOAD
const fileUpload = require('../../utils/fileUpload')

router.get('/getAdminClients', async (req, res) => {
  const clients = await User.find({ type: 'client' })

  res.json({
    success: true,
    clients
  })
})

router.post('/addNewClient',
  fileUpload.fields([
    { name: 'w9', maxCount: 1 },
    { name: 'einVerificationLetter', maxCount: 1 },
    { name: 'articlesOfOrganization', maxCount: 1 },
    { name: 'bankCard', maxCount: 1 },
    { name: 'usDriversLicense', maxCount: 1 },
    { name: 'creditDebitCardFront', maxCount: 1 },
    { name: 'creditDebitCardBack', maxCount: 1 },
  ]),
  async (req, res) => {
    let w9 = req.files['w9'][0].filename
    let einVerificationLetter = req.files['einVerificationLetter'][0].filename
    let articlesOfOrganization = req.files['articlesOfOrganization'][0].filename
    let bankCard = req.files['bankCard'][0].filename
    let usDriversLicense = req.files['usDriversLicense'][0].filename
    let creditDebitCardFront = req.files['creditDebitCardFront'][0].filename
    let creditDebitCardBack = req.files['creditDebitCardBack'][0].filename

    let newClient = new User({
      ...req.body
    })

    newClient.w9 = w9
    newClient.einVerificationLetter = einVerificationLetter
    newClient.articlesOfOrganization = articlesOfOrganization
    newClient.bankCard = bankCard
    newClient.usDriversLicense = usDriversLicense
    newClient.creditDebitCardFront = creditDebitCardFront
    newClient.creditDebitCardBack = creditDebitCardBack

    newClient.passwordForUpdate = req.body.password
    newClient.password = bcrypt.hashSync(req.body.password, 10)
    const avatar = normalize(
      gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' }),
      { forceHttps: true }
    )
    newClient.avatar = avatar
    newClient.type = 'client'

    await newClient.save()

    res.json({
      success: true
    })
  }
)

router.get('/getClient/:id', async (req, res) => {
  const client = await User.findById(req.params.id)

  res.json({
    success: true,
    client
  })
})

router.post('/updateClientDocumentStatus', async (req, res) => {
  await User.findByIdAndUpdate(req.body.clientID, {
    [req.body.keyInDB + 'Status']: req.body.updateType === 'Approve' ? 'Approved' : req.body.updateType === 'Deny' ? 'Denied' : 'Pending'
  })

  res.json({
    success: true
  })
})

router.get('/getClientOrders/:id', async (req, res) => {
  const clientID = req.params.id
  const orders = await Order.find({ client: clientID })

  res.json({
    success: true,
    orders
  })
})

router.post('/storeClientOrders', async (req, res) => {
  const clientID = req.body.clientID
  const orders = req.body.orders

  for (var index = 0; index < orders.length; index++) {
    var order = orders[index]
    var newOrder = new Order({
      ...order
    })
    newOrder.client = clientID
    
    await newOrder.save()
  }

  res.json({
    success: true
  })
})

router.post('/storeClientNotification', async (req, res) => {
  var newNotification = new Notification({
    client: req.body.clientID,
    content: req.body.notification
  })
  await newNotification.save()

  res.json({
    success: true
  })
})

module.exports = router