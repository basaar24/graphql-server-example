import { authors, games, reviews } from "./_db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    games: () => games,
    game: (parent, args, context) => games.find((game) => game.id === args.id),
    authors: () => authors,
    author: (parent, args, context) => authors.find((author) => author.id === args.id),
    reviews: () => reviews,
    review: (parent, args, context) => reviews.find((review) => review.id === args.id)
  },
};