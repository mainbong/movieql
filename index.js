import { createServer } from "graphql-yoga"

console.log("hello")

const server = createServer({

})

server.start(() => console.log("Graphql Server Running"))