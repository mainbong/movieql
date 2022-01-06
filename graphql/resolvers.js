import { addMovie, getMovies, deleteMovie } from "./db.js"
import { getById } from "./db.js"


const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
}

export default resolvers