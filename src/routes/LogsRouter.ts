import express from 'express'
import LogsController from '../controllers/LogsController'
import paginate from '../utils/pagination'
const LogsRouter = express.Router()

/**
 * @api {get} /logs/api/logs/ Request Logs information
 * @apiName GetAll
 * @apiGroup Log
 *
 * @apiQuery {Number} size=10 Number of elements per page.
 * @apiQuery {Number} skip=0 Number of elements to skip.
 * @apiQuery {Number} page=1 The page to get.
 *
 * @apiSuccess {Number} count Number of products returned.
 * @apiSuccess {Array} results Array of products.
 * @apiSuccess {Date} results.date Name of the product.
 * @apiSuccess {String} results.type Price of the product.
 * @apiSuccess {String} results.logs Description of the product.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "count": "1",
 *      "results": [
 *          {
 *              "date": "Tue Feb 01 2022",
 *              "type": "connection",
 *              "logs": "Connection succeeded, user: test@test.com",
 *          }
 *      ]
 *    }
 */
LogsRouter.get('/', paginate, LogsController.getAll)

/**
 * @api {get} /logs/api/logs/:type/:date Request Logs information based on type and date
 * @apiName GetOne
 * @apiGroup Log
 *
 * @apiParam {String} type Type of the desired log
 * @apiParam {Date} date Date of the desired log
 *
 * @apiSuccess {Date} date Name of the product.
 * @apiSuccess {String} type Price of the product.
 * @apiSuccess {String} logs Description of the product.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "date": "Tue Feb 01 2022",
 *        "type": "connection",
 *        "logs": "Connection succeeded, user: test@test.com",
 *    }
 */
LogsRouter.get('/:type/:date', LogsController.getOne)

export default LogsRouter
