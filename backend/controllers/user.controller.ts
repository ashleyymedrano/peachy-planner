import { Request, Response } from "express";

// register a new user
export const signUp = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            message: "User registered successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

// login a user
export const login = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            message: "User logged in successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};