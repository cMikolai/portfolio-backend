module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: "<ADD URI HERE>",
      },
      options: {
        ssl: true
      }
    },
  },
});
