
import express from 'express';


const user = express.Router();

//rota para lista de usuario
user.get('/', (req, res) => res.send("Rota de usuario"));

//rota para registro de usuario 
user.get('/register', (req, res) => res.send("Cadastro de usuario"));

export default user;

