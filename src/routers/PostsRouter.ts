import express, { Request, Response } from 'express';
import { PostService } from '../services/PostService';

const app = express();
app.use(express.json())
const postService = new PostService();

export const postRouter = app.get('/posts', (req: Request, res: Response) => {
  const data = postService.getAll();
  res.status(200).send(data);
})

export const getPostById = app.get('/getPostFromId', async (req: Request, res: Response) => {
  const id = await req.body.id;
  const data = postService.getById(id)
  res.status(200).send(data);
});

export const addPost = app.post('/addPost', async (req: Request, res: Response) => {
  const data = req.body;
  res.send(postService.createPost(data));
});