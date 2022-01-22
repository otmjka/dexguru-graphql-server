import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import Fastify, { FastifyInstance } from "fastify";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

class HttpServer {
  fastify: FastifyInstance;
  constructor() {
    // Declare a route

    this.fastify = Fastify({
      logger: true,
    });
  }

  async start() {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        this.fastifyAppClosePlugin(this.fastify),
        ApolloServerPluginDrainHttpServer({ httpServer: this.fastify.server }),
      ],
    });
    await server.start();
    this.fastify.register(server.createHandler());
    // this.fastify.get("/", async (request, reply) => {
    //   const data = await dexGuruService.getAllChains();
    //   reply.send(data);
    // });
    // Run the server!
    this.fastify.listen(3000, "0.0.0.0", (err, address) => {
      if (err) {
        this.fastify.log.error(err);
        process.exit(1);
      }
      // Server is now listening on ${address}
    });
  }

  fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
    return {
      async serverWillStart() {
        return {
          async drainServer() {
            await app.close();
          },
        };
      },
    };
  }
}

export default HttpServer;
