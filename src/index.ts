/* eslint-disable import/first */

/*
   Initialize the dotenv first.
   There are several process.env needed to be called in webhook.route.ts.
*/
import dotenv from 'dotenv'
dotenv.config()

/*
  After that, import necessary dependencies.
*/

import express from 'express'
const app = express()

import database from './database'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes'
import { DEFAULT_PORT } from './constants/port.constant'

async function main () {
  console.log('Initializing app...')
  try {
    await database.init()
    console.log('MongoDB successfully connected.')

    app.use(morgan('dev'))
    app.use(cors())
    app.use(routes)

    const PORT = process.env.PORT || DEFAULT_PORT
    app.listen(PORT, () => {
      console.log(`Server is starting on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error happened: ${error}`)
  }
}

main()
