
import express from 'express';

const login = express.Router();

//leva a rota de login
login.get('/', (req, res) => res.send("Rota do login"));

export default login;

