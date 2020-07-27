module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: env('MONGODB_URI'),
      },
      options: {
        ssl: true
      }
    },
  },
});
