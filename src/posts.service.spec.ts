import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const addedPost = postsService.create(post);

    expect(postsService.getAll()).toContainEqual(addedPost);
    expect(addedPost).toHaveProperty('id');
    expect(addedPost).toHaveProperty('date');
    expect(addedPost.text).toBe('Mocked post');
  });

  it('should find a post', () => {
    const addedPost = postsService.create(post);

    const foundedPost = postsService.find(addedPost.id);

    expect(foundedPost).toEqual(addedPost);
  });
});