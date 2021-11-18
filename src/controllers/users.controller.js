const usersCtrl = {};
const userModel = require('../models/users');

usersCtrl.getUsers = async (req, res) => {
    try{
        const users = await userModel.find();
        res.json({users, status:200});
    }catch (e) {
        res.json({status: 400});
    }
};

usersCtrl.getUser = async (req, res) => {
    try{
        const user = await userModel.findById(req.params.id)
        res.json({user, status: 200});
    }catch (e) {
        res.json({status: 400});
    }
};

usersCtrl.createUser = async (req, res) => {
    try{
        const {name, phone, img, age, email, priority, problem, promotion, curp, password} = req.body
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
            password,
        });

        await newUser.save();
        res.json({newUser, status: 200});
    }catch (e) {
        res.json({status: 400});
    }
};

module.exports = usersCtrl;
