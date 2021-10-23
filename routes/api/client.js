const express = require('express')
const router = express.Router()

const Notification = require('../../models/Notification')

router.get('/getNotifications/:id', async (req, res) => {
  const clientID = req.params.id
  const notifications = await Notification.find({ client: clientID })

  res.json({
    success: true,
    notifications
  })
})

module.exports = router