import { NextFunction, Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import ForbiddenError from "../models/erros/forbidden.error.model";



const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
     
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const JWT = jwt.sign(jwtPayload, secretKey, jwtOptions);
        res.status(StatusCodes.OK).json({ token: JWT })
    } catch (error) {
        next(error);

    }
})

export default authorizationRoute;