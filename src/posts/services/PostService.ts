import PostRepository from '../repositories/PostRepository';
import Post from '../models/Post';

export default class PostService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async create(name: string, description: string): Promise<Post> {
    return this.postRepository.insert(name, description);
  }

  async remove(id: number): Promise<boolean> {
    return this.postRepository.delete(id);
  }

  async get(id: number): Promise<Post | null> {
    return this.postRepository.get(id);
  }

  async getAll(): Promise<Post[]> {
    return this.postRepository.list();
  }
}
