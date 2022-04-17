import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  input InputPost {
    id: Int
    title: String
    content: String
    onlyFrends: Boolean
    onlyFollowers: Boolean
  }

  type Post {
    id: Int
    title: String
    content: String
    onlyFrends: Boolean
    onlyFollowers: Boolean
  }

  type Query {
    getAllPosts: [Post]
  }

  type Mutation {
    addPost(inputData: InputPost): Post
    
  }
`);