const {Router} = require('express');
const router = Router();
const {getUsers, createUser, getUser, loginUser} = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/login')
    .post(loginUser)

router.route('/:id')
    .get(getUser)

module.exports  = router;
