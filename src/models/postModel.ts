import pool from '../config/db';

export interface Post {
  id?: number;
  title: string;
  content: string;
  user_id: number;
}

export const createPost = async (post: Post) => {
  const [result] = await pool.query('INSERT INTO posts SET ?', post);
  return result;
};

export const getAllPosts = async () => {
  const [rows] = await pool.query('SELECT * FROM posts');
  return rows;
};

export const getPostById = async (id: number) => {
  const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
  return rows;
};
