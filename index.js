import {
    createServer
} from "graphql-yoga"
import resolvers from "./graphql/resolvers.js"
console.log("hello")

const server = createServer({
    typeDefs: /* GraphQL */ `
    type Movie {
        id: Int!
        title: String!
        rating: Float!
        language: String!
        medium_cover_image: String!
    }
    type Query {
        movies(limit: Int, rating: Float): [Movie]!
        movie(id: Int!): Movie
    }

    type Mutation {
        addMovie(name: String!, score: Int!): Movie
        deleteMovie(id: Int!): Boolean
    }

    `,
    resolvers
})

server.start(() => console.log("Graphql Server Running"))