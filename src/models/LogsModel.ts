import { Schema, model } from 'mongoose'

export interface Logs {
  date: Date,
  type: String,
  logs: String
}

export default model('Logs', new Schema<Logs>({
  date: { type: Date, required: true },
  type: { type: String, required: true },
  logs: { type: String, required: true }
}).index({ date: 1, type: 1 }, { unique: true }))
