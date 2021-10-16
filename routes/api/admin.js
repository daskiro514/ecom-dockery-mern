const express = require('express')
const router = express.Router()

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// MODEL
const User = require('../../models/User')

// FILE UPLOAD
const fileUpload = require('../../utils/fileUpload')

router.get('/getAdminClients', async (req, res) => {
  const clientsFromDB = await User.find({ type: 'client' })

  var clients = []
  clientsFromDB.forEach(clientFromDB => {
    var client = { ...clientFromDB._doc }
    if (client.einVerificationLetterStatus === 'Pending' ||
      client.articlesOfOrganizationStatus === 'Pending' ||
      client.w9Status === 'Pending' ||
      client.bankCardStatus === 'Pending' ||
      client.usDriversLicenseStatus === 'Pending' ||
      client.creditDebitCardFrontStatus === 'Pending' ||
      client.creditDebitCardBackStatus === 'Pending') {
      client.status = 'Documents Pending'
    } else {
      client.status = 'Approved'
    }
    clients.push(client)
  })

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

module.exports = router