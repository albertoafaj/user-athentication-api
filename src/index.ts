import express from "express";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuração das Rotas
app.use(statusRoute);
app.use(userRoute);


// Inicialização do servidor

app.listen(3000, () => {
    console.log('Aplicação excultando na porta 3000')
})