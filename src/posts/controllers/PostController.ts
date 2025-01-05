import { Request, Response } from 'express';
import PostService from '../services/PostService';

export default class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    try {
      const post = await this.postService.create(name, description);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error });
    }
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const post = await this.postService.get(Number(id))

      if (post) {
        const success = await this.postService.remove(Number(id));
        
        res.status(success ? 200 : 404).json(post);
      } else {
        res.status(404).send()
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting post', error });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const posts = await this.postService.getAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching posts', error });
    }
  }
}
