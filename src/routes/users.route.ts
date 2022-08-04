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

userRoute.post('/users', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser)
    
})

userRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifieldUser = req.body;
    modifieldUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ uuid })
    
})

userRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})



export default userRoute