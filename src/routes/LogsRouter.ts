import express from 'express'
import LogsController from '../controllers/LogsController'
const LogsRouter = express.Router()

LogsRouter.get('/', LogsController.getAll)

LogsRouter.get('/:type/:date', LogsController.getOne)

export default LogsRouter
