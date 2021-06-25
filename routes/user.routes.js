const { Router } = require('express');
const router = Router();
const { userGet, userPost, usersGet, userPut, userDelete } = require('../controllers/user.controllers');
router.get('/user', userGet);
router.get('/user/:id', usersGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/:id', userDelete);
module.exports = router;