/* eslint-disable import/first */

/*
   Initialize the dotenv first.
   There are several process.env needed to be called in webhook.route.ts
*/

import dotenv from 'dotenv'
dotenv.config()

/* After that, import necessary dependencies */

import routes from './routes'
import express from 'express'
import cors from 'cors'
import { DEFAULT_PORT } from './constants/port.constant'

const app = express()
app.use(cors())
app.use(routes)

const PORT = process.env.PORT || DEFAULT_PORT
app.listen(PORT, () => {
  console.log(`Server is starting on http://localhost:${PORT}`)
})
