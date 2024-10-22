import { Request, Response } from 'express';
import { createPost, getAllPosts, getPostById } from '../models/postModel';

export const createNewPost = async (req: Request, res: Response) => {
    try {
        const post = await createPost(req.body);
        res.status(201).json({ message: 'Post created successfully', post });
        return
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
        return
    }
};

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
        return
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error });
        return
    }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        const post = await getPostById(Number(req.params.id));
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return
        }
        res.json(post);
        return
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error });
        return
    }
};
