exports.up = function(knex, Promise) {
    return knex.schema.createTable('entry', table => {
        table.increments();
        table.integer('storm_id').references('storm.id').unsigned().onDelete('cascade');
        table.text('content').notNullable();
        table.integer('votes').defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('entry');
};
