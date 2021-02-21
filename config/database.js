module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
          post: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          database: env('DATABASE_USERNAME', 'strapi'),
          database: env('DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
