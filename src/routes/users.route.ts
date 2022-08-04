import { Router, Request, Response, NextFunction } from "express";


const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Alberto' }];
    res.status(200).send({ users });

})

userRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });

})

export default userRoute