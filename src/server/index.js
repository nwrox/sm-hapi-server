import Hapi from 'hapi'
import { plugin as inert } from 'inert'
import path from 'path'
import routes from '../http/routes'

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8000,
  routes: {
    cors: {
      origin: ['*'],
      additionalHeaders: [
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Methods',
        'Access-Control-Allow-Origin'
      ]
    },
    files: {
      relativeTo: path.join(__dirname, '../../static')
    }
  }
})

routes(server)

// Start the server
const start = async () => {
  try {
    await server.register(inert)
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log(`Server running at: ${server.info.uri}`)
}

module.exports = {
  start
}
