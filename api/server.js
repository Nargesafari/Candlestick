const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const {
    // ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageGraphQLPlayground,

} = require("apollo-server-core");


const connectMongoDB = require("./src/dbConnector");
const { schema } = require("./src/schema");

const app = express();
// const httpServer = http.createServer(app);
const corsOptions = {
  credentials: true,
  origin: ["https://studio.apollographql.com", "http://localhost:3000"],
};


connectMongoDB.connectMongoDB();

async function startServer() {
    const server = new ApolloServer({ typeDefs: schema.typeDefs, resolvers: schema.resolvers
    ,  plugins: [
        
        ApolloServerPluginLandingPageGraphQLPlayground(),
        // ApolloServerPluginDrainHttpServer()
      ],
     })
    await server.start()
    server.applyMiddleware({ app ,cors: corsOptions  })
    
}




app.listen({ port: "4000" }, () => {
    console.log("Server ready at http://localhost:4000/graphql/")
  
});
startServer();