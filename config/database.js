module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: "mongodb://admin-christin:Gf6-G99-Ffa@christinmikolai-portfol-shard-00-00.yigez.mongodb.net:27017,christinmikolai-portfol-shard-00-01.yigez.mongodb.net:27017,christinmikolai-portfol-shard-00-02.yigez.mongodb.net:27017/christinmikolai-portfolio?ssl=true&replicaSet=atlas-t9gg44-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true
      }
    },
  },
});
