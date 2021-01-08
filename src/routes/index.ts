import express from 'express'
import webhook from './webhook.route'

const router = express.Router()
router.use('/webhook', webhook)

export default router
