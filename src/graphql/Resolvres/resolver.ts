import { Post } from '../../dto/TypesFrom-Post';
import { PostService } from '../../services/PostService';
import type { TypeInput } from './InputsType/Register';

const postService = new PostService();

export const resolvers = {
  getAllPosts: async (): Promise<Post[]> => {
    return await postService.getAll();
  },

  addPost: async (inputData: TypeInput) => {
    const data = await postService.createPost(inputData.inputData)
    return data
  }
}