import express from 'express'
import { handleIncomingMessage, handleMessengerVerification } from '../controllers/webhook.controller'

const router = express.Router()

router.post('/', handleIncomingMessage)
router.get('/', handleMessengerVerification)

export default router
