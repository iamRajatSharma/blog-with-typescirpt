import { Request, Response } from 'express';
import { createUser, getAllUsers, findUserByEmail } from '../models/userModel';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const existingUser = await findUserByEmail(req.body.email);
        if (!existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return
        }
        const user = await createUser(req.body);
        res.status(201).json({ message: 'User created successfully', user });
        return
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
        return
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.json(users);
        return
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error })
        return
    }
};
