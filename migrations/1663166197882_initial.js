
exports.up = pgm => {
  pgm.createTable('users', {
    id: { type: 'Int'},
    name: { type: 'varchar(1000)' },
    age: { type: 'Int' },
  })
};

exports.down = pgm => {
  pgm.dropTable('users')
};
