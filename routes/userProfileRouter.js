const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();


router.get('/getUsers', authController.getAllUsers);

router.get('/updateUser/:id', authController.getUserById);

router.post('/updateUser', authController.updateUser);

router.get('/deleteUser/:id', authController.deleteUser);

router.get('/dashboard-stats', authController.getDashboardStats);

module.exports = router;