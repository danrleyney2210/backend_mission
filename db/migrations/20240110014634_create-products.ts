import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.text('slug').notNullable()
    table.integer('price').notNullable()
    table.text('image').notNullable()
    table.text('description').notNullable()
    table.text('featured').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products')
}

