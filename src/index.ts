import express from "express";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";
import errorHandler from "./middlewares/error-handler-middleware";
import authorizationRoute from "./routes/authorization.router";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/users.route";

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração das Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware), 
app.use(userRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler);


// Inicialização do servidor

app.listen(3000, () => {
    console.log('Aplicação excultando na porta 3000')
})