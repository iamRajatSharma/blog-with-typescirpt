import pool from '../config/db';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export const createUser = async (user: User) => {
  const [result] = await pool.query('INSERT INTO users SET ?', user);
  return result;
};

export const getAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

export const findUserByEmail = async (email: string) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows;
};
