import { Router } from 'express';
import PostController from '../controllers/PostController';
import { postValidator } from '../validators/PostValidator';

const router = Router();
const postController = new PostController();

router.post('/', postValidator, postController.create.bind(postController));
router.delete('/:id', postController.remove.bind(postController));
router.get('/', postController.getAll.bind(postController));

export default router;
