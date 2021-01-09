import express from 'express'
import { getAll, getById, deleteById } from '../controllers/message.controller'

const router = express.Router()
router.get('/', getAll)
router.get('/:id', getById)
router.delete('/:id', deleteById)

export default router
