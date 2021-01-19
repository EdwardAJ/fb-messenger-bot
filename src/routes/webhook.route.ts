import express from 'express'
import { middleware } from '@line/bot-sdk'
import { handleIncomingMessage, handleMessengerVerification } from '../controllers/webhook.controller'

import messengerConfig from '../utils/messenger-client/config.util'
const router = express.Router()

router.post('/', middleware(messengerConfig), handleIncomingMessage)
router.get('/', handleMessengerVerification)

export default router
