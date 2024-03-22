export const games = [
    { id: "1", title: "Gears 5", platform: ["Xbox"] },
    { id: "2", title: "Mario Kart", platform: ["Switch"] },
    { id: "3", title: "Pokemon", platform: ["PS5", "Xbox", "PC"] },
    { id: "4", title: "FIFA", platform: ["PS5", "Xbox", "PC"] },
    { id: "5", title: "The Last of Us", platform: ["PS5"] },
];

export const authors = [
    { id: "1", name: "Mario", verified: true },
    { id: "2", name: "Yoshi", verified: false },
    { id: "3", name: "Peach", verified: true },
];

export const reviews = [
    { id: "1", rating: 9, content: "Lorem ipsum", author_id: "1", game_id: "2" },
    { id: "2", rating: 8, content: "Lorem ipsum", author_id: "2", game_id: "4" },
    { id: "3", rating: 6, content: "Lorem ipsum", author_id: "3", game_id: "5" },
    { id: "4", rating: 7, content: "Lorem ipsum", author_id: "2", game_id: "3" },
    { id: "5", rating: 8, content: "Lorem ipsum", author_id: "3", game_id: "5" },
    { id: "6", rating: 9, content: "Lorem ipsum", author_id: "1", game_id: "1" },
    { id: "7", rating: 7, content: "Lorem ipsum", author_id: "2", game_id: "3" },
];