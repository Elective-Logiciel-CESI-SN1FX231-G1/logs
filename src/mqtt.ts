import mqtt from 'async-mqtt'
import config from 'config'
import { insertLog } from './controllers/LogsController'

const client = mqtt.connect(config.get('mqtt.url'))

client.on('message', function (topic, message) {
  try {
    const msg = JSON.parse(message.toString())
    if (topic.startsWith('auth/connection/success')) insertLog('connection', `Connection succeded, user: ${msg.email}`)
    if (topic.startsWith('auth/connection/fail')) insertLog('connection', `Connection failed, user: ${msg.email}`)
  } catch (error) {
    console.error(error)
  }
})

export const connect = async function () {
  if (!client.connected) { await new Promise(resolve => client.once('connect', resolve)) }
  await client.subscribe('auth/connection/success')
  await client.subscribe('auth/connection/fail')
}

export default client
