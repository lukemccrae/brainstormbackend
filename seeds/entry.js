exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('entry').del()
        .then(function() {
            // Inserts seed entries
            return knex('entry').insert([{
                    content: 'awesome'
                },
                {
                    content: 'good great fine ok'
                }
            ]);
        });
};
