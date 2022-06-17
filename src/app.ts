import express from 'express'
import 'express-async-errors'
import { auth } from './auth'
import LogsRouter from './routes/LogsRouter'

const app = express()

app.use(auth)
app.use('/api/logs', LogsRouter)

export default app
