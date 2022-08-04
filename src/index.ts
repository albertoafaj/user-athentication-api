import express, { Request, Response, NextFunction } from "express";
import userRoute from "./routes/users.route";

const app = express();

app.use(userRoute)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res
        .status(200)
        .send({
            json: 'Alterou'
        })
})

// Para subir o servidor

app.listen(3000, () => {
    console.log('Aplicação excultando na porta 3000')
})