import { posts } from '../database/data';
import { Post } from '../dto/TypesFrom-Post';

export class PostService {
  getById(id: number) {
    return posts.find((post) => post.id === id);
  }

  getAll() {
    return posts;
  }

  async createPost(data: Post) {
    try {
      await (posts.push(data));
      return posts[posts.length - 1];
    }
    catch {
      return {
        error: "Error to create object, data invalid",
      }
    }
  }
}