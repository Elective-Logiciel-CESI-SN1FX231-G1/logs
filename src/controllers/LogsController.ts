import LogsModel from '../models/LogsModel'
import { Handler } from 'express'

export const getAll: Handler = async (req, res) => {
  const query = {}
  const [results, count] = await Promise.all([
    LogsModel.find(query).skip(req.pagination.skip).limit(req.pagination.size).exec(),
    LogsModel.countDocuments(query).exec()
  ])
  res.send({
    count,
    results
  })
}

export const getOne: Handler = async (req, res) => {
  const type = req.params.type
  const date = new Date(Date.parse(req.params.date))
  const logs = await LogsModel.findOne({ type, date })
  if (logs) res.send(logs.logs)
  else res.sendStatus(404)
}

export const insertLog = async (type: string, message: string) => {
  const today = new Date()
  today.setUTCMilliseconds(0)
  today.setUTCSeconds(0)
  today.setUTCMinutes(0)
  today.setUTCHours(0)

  await LogsModel.findOneAndUpdate({ type, date: today }, [{
    $set: {
      logs: {
        $concat: [
          { $cond: { if: { $ne: ['$logs', null] }, then: '$logs', else: '' } },
          `[${new Date().toUTCString()}] ${message}\n`
        ]
      }
    }
  }], { upsert: true }).exec()
}

export default {
  getAll,
  getOne,
  insertLog
}
