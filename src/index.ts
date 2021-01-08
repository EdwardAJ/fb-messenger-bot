import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import routes from './routes'

import { DEFAULT_PORT } from './constants/port.constant'

dotenv.config()

const app = express()
app.use(cors())
app.use(routes)

const PORT = process.env.PORT || DEFAULT_PORT
app.listen(PORT, () => {
  console.log(`Server is starting on http://localhost:${PORT}`)
})
