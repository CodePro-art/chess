const userController = require('../controllers/user');
const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');

// insert all initial users
router.post('/users', async (req, res) => {
    userController.insertUsers(req,res);
})

// user log-in to his/her existing account
router.post('/users/login', async (req, res) => {
    userController.loginUser(req,res);
})

// log-out function, requires authentication
router.post('/users/logout', auth , async (req, res) => {
    userController.logoutUser(req,res);
})

// log-out from all sessions, requires authentication
router.post('/users/logoutAll', auth , async (req, res) => {
    userController.logoutAllSessions(req,res);
})

// user delete his/her account, requires authentication
router.delete('/users/me', auth , async (req, res) => {
    
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
})

// user sign-in & creates new account
router.post('/users/signin', async (req, res) => {
    userController.createNewUser(req,res);
})

// admin can get all users, requires authentication
router.get('/users', auth , async (req, res) => {
    userController.getAllUsers(req,res);
})

// admin can get users by id, requires authentication
router.get('/users/:id', auth , async (req, res) => {
    userController.getUserById(req, res)
})

// user can update his/her data, requires authentication
router.patch('/users/me', auth , async (req, res) => {
    userController.updatePlayer(req,res)
})

// admin can delete user by id
router.delete('/users/:id', auth ,async (req, res) => {
    userController.removeUser(req,res)
})

module.exports = router