const usersCtrl = {};
const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const {genSalt} = require("bcrypt");

usersCtrl.getUsers = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch (e) {
        res.status(400);
    }
};

usersCtrl.getUser = async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user);
    }catch (e) {
        res.status(400);
    }
};

usersCtrl.createUser = async (req, res) => {
    try{
        const {name, phone, img, age, email, priority, problem, promotion, curp, password} = req.body

        await bcrypt.hash(password, 10, async (err, hashedPassword) => {
            if (err) {
                res.status(400);
            } else {
                const newUser = new userModel({
                    name,
                    phone,
                    img,
                    age,
                    email,
                    priority,
                    problem,
                    promotion,
                    curp,
                    password: hashedPassword,
                });

                console.log(newUser)

                await newUser.save();
                res.status(200).json(newUser);
            }
        })
    }catch (e) {
        res.status(400);
    }
};

usersCtrl.loginUser = async (req, res) => {
    try{
        userModel.findOne({email: req.body.email}).then((e) => {
            bcrypt.compare(req.body.password, e.password, (err, same) => {
                if (err){
                    res.status(500).send('Error al Autenticar');
                }else if (same){
                    res.status(200).json(e);
                }else{
                    res.status(400).send('Usuario o contraseña incorrecto');
                }
            });
        })
    }catch (e) {
        res.status(400);
    }
}

module.exports = usersCtrl;
