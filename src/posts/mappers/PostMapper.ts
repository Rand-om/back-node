import Post from '../models/Post';
import PostDto from '../dto/PostDto';

export default class PostMapper {
  static toDto(post: Post): PostDto {
    return new PostDto(post.id, post.name, post.description, post.created_at);
  }
}
