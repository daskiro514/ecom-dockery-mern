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

router.delete('/deleteNotification/:id', async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id)

  res.json({
    success: true
  })
})

module.exports = router