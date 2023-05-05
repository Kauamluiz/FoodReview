
import express from 'express';


const login = express.Router();

//leva a rota de login
login.post('/', async (req, res) => {
    const { email, password, hash } = req.body

    hash = 

    const senha = async (password) => {
            if (password) {
                const salt = await bcrypt.compareSync(password);
                password = bcrypt.hashSync(password, salt);
            }
        }

    const alreadyExistUser = await User.findOne(
        { where: { email, senha }}
    ).catch((err) => console.log("Error: ", err))
    
});

export default login;

