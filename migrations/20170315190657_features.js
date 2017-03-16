exports.up = function(knex, Promise) {
    return knex.schema.createTable('feature', table => {
        table.increments();
        table.integer('storm_id').notNullable();
        table.integer('entry_id').notNullable();
        table.text('content').notNullable();
        table.integer('interest').defaultTo(0);
        table.integer('difficulty').defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('feature');
};
