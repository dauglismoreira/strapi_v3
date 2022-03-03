module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '177.153.59.10'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'communication'),
        username: env('DATABASE_USERNAME', 'rh'),
        password: env('DATABASE_PASSWORD', 'L.e,o@2021='),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
