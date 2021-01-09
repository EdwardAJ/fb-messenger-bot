import express from 'express'
import { getAll, getById, deleteById } from '../controllers/message.controller'

const router = express.Router()
router.get('/get', getAll)
router.get('/get/:id', getById)
router.delete('/delete/:id', deleteById)

export default router
