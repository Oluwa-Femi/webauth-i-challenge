exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authentication').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('authentication').insert([
        {username: 'Femi', password: 'pass123'},
        {username: 'Anna', password: 'mydogmax'},
        {username: 'Tola', password: 'pa55word'}
      ]);
    });
};