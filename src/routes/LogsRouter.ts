import express from 'express'
import LogsController from '../controllers/LogsController'
import paginate from '../utils/pagination'
const LogsRouter = express.Router()

LogsRouter.get('/', paginate, LogsController.getAll)

LogsRouter.get('/:type/:date', LogsController.getOne)

export default LogsRouter
