import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import routes from './routes'

dotenv.config()

const app = express()
app.use(cors())
app.use(routes)
app.listen(process.env.PORT, () => {
  console.log(`Server is starting on http://localhost:${process.env.PORT}`)
})
