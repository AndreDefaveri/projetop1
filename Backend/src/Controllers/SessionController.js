const User = require("../models/User")

module.exports = {
    async Store(req, res){

        const { email, senha } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({error:"Usuário não encontrado."});
        }
        if(!(await user.compareHash(senha))){
            return res.status(400).json({error:"Senha inválida."});
        }
        return res.json({ user, token: User.generateToken(user)});
    }
}