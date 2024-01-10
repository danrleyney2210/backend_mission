
import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function productsRoutes(app: FastifyInstance) {
  app.post('/products', async (request, reply) => {
    const createProductsBodySchema = z.object({
      // id: z.number(),
      title: z.string(),
      slug: z.string(),
      price: z.number(),
      image: z.string(),
      description: z.string(),
      featured: z.boolean(),
    })

    const body = createProductsBodySchema.parse(request.body)

    await knex('products')
      .insert({
        id: randomUUID(),
        title: body.title,
        slug: body.slug,
        price: body.price,
        image: body.image,
        description: body.description,
        featured: body.featured
      })

    return reply.status(201).send()
  })

  app.get('/products/:id', async (request) => {
    const getProductsParamsSchema = z.object({
      id: z.string().uuid()
    })

    const { id } = getProductsParamsSchema.parse(request.params)
    const product = await knex('products').where('id', id).first()
    return { product }
  })


  app.get('/products', async () => {
    const products = await knex('products').select()

    return {
      products
    }
  })
}