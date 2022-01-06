import { getMovies } from "./db.js"

// import { addMovie,getById , deleteMovie } from "./db.js"



const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
        // movie: (_, { id }) => getById(id)
    },
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id)
    // }
}

export default resolvers