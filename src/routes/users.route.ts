import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Alberto' }];
    res.status(StatusCodes.OK).send({ users });

})

userRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });

})

export default userRoute