exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('storm').del()
        .then(function() {
            // Inserts seed entries
            return knex('storm').insert([{
                    storm_id: 1,
                    content: 'this is a chat message',
                    date: new Date()
                },
                {
                    storm_id: 2,
                    content: 'cool',
                    date: new Date()
                }
            ]);
        });
};
