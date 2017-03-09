exports.up = function(knex, Promise) {
    return knex.schema.createTable('storm', table => {
        table.increments();
        table.text('name').notNullable();
        table.datetime('date').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('storm');
};
