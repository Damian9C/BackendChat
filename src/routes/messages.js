const {Router} = require('express');
const router = Router();
const {getMessage, getMessages, createMessage, updateMessage} = require('../controllers/messages.controller')

router.route('/')
    .get(getMessages)
    .post(createMessage)

router.route('/:id')
    .get(getMessage)
    .put(updateMessage)

module.exports = router;
