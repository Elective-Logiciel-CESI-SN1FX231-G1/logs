import express from 'express'
import 'express-async-errors'
import { auth } from './auth'
// import SponsorCodeRouter from './routes/SponsorCodeRouter'
// import SponsorshipRouter from './routes/SponsorshipRouter'

const app = express()

app.use(auth)
// app.use('/api/sponsorships', SponsorshipRouter)
// app.use('/api/sponsor-code', SponsorCodeRouter)

export default app
