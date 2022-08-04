import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res
        .status(200)
        .send({
            json: 'json'
        })
})

// Para subir o servidor

app.listen(3000, () => {
    console.log('Aplicação excultando na porta 3000')
})