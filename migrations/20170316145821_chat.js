exports.up = function(knex, Promise) {
    return knex.schema.createTable('chat', table => {
        table.increments();
        table.integer('storm_id').notNullable();
        table.text('content').notNullable();
        table.datetime('date').notNullable();

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('chat');
};
