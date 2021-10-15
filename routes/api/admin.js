const express = require('express')
const router = express.Router()

// MODEL
const User = require('../../models/User')

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
  fileUpload.fields([{ name: 'bankCard', maxCount: 1 }]),
  async (req, res) => {
    let bankCard = req.files['bankCard'][0].filename
    console.log(bankCard)

    res.json({
      success: true
    })
  }
)

module.exports = router