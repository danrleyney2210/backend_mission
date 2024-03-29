import fastify from 'fastify'
import { env } from './env'
import { productsRoutes } from './routes/products'

const app = fastify()

app.register(productsRoutes, {
  prefix: 'mission',
})

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP Server Running!')
})
