export const typeDefs = `
  type Crop {
    id: ID,
    title: String,
    description: String
    url: String
    imageUrl: String
    category: String
    users: [String]
  }

  type Query {
    crops: [Crop]!
  }
`