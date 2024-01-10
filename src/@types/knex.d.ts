import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    products: {
      id: string
      title: string
      slug: string
      price: number,
      image: string,
      description: string,
      featured: boolean,
    }
  }
}