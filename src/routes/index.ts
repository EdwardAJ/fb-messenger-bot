import express from 'express'
import webhook from './webhook.route'
import messages from './messages.route'

const router = express.Router()
router.use('/webhook', webhook)
router.use('/messages', messages)

export default router
