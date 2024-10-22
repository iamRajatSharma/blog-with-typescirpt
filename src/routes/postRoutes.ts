import { Router } from 'express';
import { createNewPost, getPosts, getPost } from '../controllers/postController';

const router = Router();

router.post('/', createNewPost);
router.get('/', getPosts);
router.get('/:id', getPost);

export default router;
