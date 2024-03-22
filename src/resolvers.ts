import { authors, games, reviews } from "./_db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    games: () => games,
    game: (_, args) => games.find((game) => game.id === args.id),
    authors: () => authors,
    author: (_, args) => authors.find((author) => author.id === args.id),
    reviews: () => reviews,
    review: (_, args) => reviews.find((review) => review.id === args.id)
  },
  Game: {
    reviews: (parent) => reviews.filter((review) => review.game_id === parent.id)
  },
  Author: {
    reviews: (parent) => reviews.filter((review) => review.author_id === parent.id)
  },
  Review: {
    author: (parent) => authors.find((author) => author.id === parent.id),
    game: (parent) => games.find((game) => game.id === parent.game_id),
  },
  Mutation: {
    addGame: (_, args) => {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString()
      }
      games.push(game);
      return game;
    },
    deleteGame: (_, args) => {
      return games.filter((game) => game.id !== args.id);
    },
    updateGame: (_, args) => {
      return games
        .map((g) => {
          if (g.id === args.id) {
            return { ...g, ...args.edits }
          }
          return g;
        })
        .find((g) => g.id === args.id);
    }
  }
};