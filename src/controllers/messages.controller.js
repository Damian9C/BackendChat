const messageCtrl = {};

const messageModel = require('../models/messages');

messageCtrl.getMessages = async (req, res) => {
    try{
        const messages = await messageModel.find();
        res.status(200).json(messages);
    }catch (e) {
        res.status(400);
    }
};

messageCtrl.getMessage = async (req, res) => {
    try{
        const user = await messageModel.findById(req.params.id)
        res.status(200).json(user);
    }catch (e) {
        res.status(400);
    }
};

messageCtrl.createMessage = async (req, res) => {
    try{
        const { users, conversation } = req.body

        const newMessage = new messageModel({
            users,
            conversation,
        });
        await newMessage.save();
        res.status(200).json({message: 'Post request'});
    }catch (e) {
        res.status(400);
    }
};

messageCtrl.updateMessage = async (req, res) => {
    try{
        const miModelo = await messageModel.findById(req.params.id)
        miModelo.user = req.body.users;
        miModelo.conversation = req.body.conversation;

        miModelo.save();

        res.status(200).send('Message Updated');
    }catch (e) {
        res.status(400);
    }
}

module.exports = messageCtrl;
