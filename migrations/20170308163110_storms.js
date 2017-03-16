exports.up = function(knex, Promise) {
    return knex.schema.createTable('storm', table => {
        table.increments();
        table.text('name').notNullable();
        table.datetime('date').notNullable();
        table.integer('view_id').defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('storm');
};
