const messageCtrl = {};

const messageModel = require('../models/messages');

messageCtrl.getMessages = async (req, res) => {
    try{
        const messages = await messageModel.find();
        res.json({messages, status:200});
    }catch (e) {
        res.json({status: 400});
    }
};

messageCtrl.getMessage = async (req, res) => {
    try{
        const user = await messageModel.findById(req.params.id)
        res.json({user, status: 200});
    }catch (e) {
        res.json({status: 400});
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
        res.json({message: 'Post request', status: 200});
    }catch (e) {
        res.json({status: 400});
    }
};

messageCtrl.updateMessage = async (req, res) => {
    try{
        const {users, conversation} = req.body;
        messageModel.findOneAndUpdate(req.params.id, {
            users,
            conversation
        });

        res.json({status: 200})
    }catch (e) {
        res.json({status: 400})
    }
}

module.exports = messageCtrl;
