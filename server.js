const port = Bun.argv[2] || "4545";

Bun.serve({

    async fetch(req) {

        await req.text();

        return new Response("Hello World");

    },

    port: Number(port),

});
