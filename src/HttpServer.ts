import Fastify from "fastify";
import DexGuruSdk from "./DexGuruSdk";

const fastify = Fastify({
  logger: true,
});

class HttpServer {
  constructor() {
    // Declare a route
    const dexGuruService = new DexGuruSdk();

    fastify.get("/", async (request, reply) => {
      const data = await dexGuruService.getAllChains();
      reply.send(data);
    });
  }

  start() {
    // Run the server!
    fastify.listen(3000, "0.0.0.0", function (err, address) {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
      // Server is now listening on ${address}
    });
  }
}

export default HttpServer;
