exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('storm').del()
        .then(function() {
            // Inserts seed entries
            return knex('storm').insert([{
                    name: 'brainstorming is awesome',
                    date: new Date()
                },
                {
                    name: 'cool',
                    date: new Date()
                }
            ]);
        });
};
