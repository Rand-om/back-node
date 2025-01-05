import PostModel from '../../infraestructure/database/PostModel';
import Post from '../models/Post';
import PostMapper from '../mappers/PostMapper';

export default class PostRepository {
  async insert(name: string, description: string): Promise<Post> {
    const post = await PostModel.create({ name, description });
    return new Post(post.id, post.name, post.description, post.created_at);
  }

  async delete(id: number): Promise<boolean> {
    const result = await PostModel.destroy({ where: { id } });
    return result > 0;
  }

  async get(id: number): Promise<Post | null> {
    const post = await PostModel.findByPk(id);

    if (post) {
      return PostMapper.toDto(new Post(post.id, post.name, post.description, post.created_at));
    }

    return null
  }

  async list(): Promise<Post[]> {
    const posts = await PostModel.findAll();
    return posts.map(post => PostMapper.toDto(new Post(post.id, post.name, post.description, post.created_at)));
  }
}
