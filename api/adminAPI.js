var express = require('express');
var router = express.Router();
// var contactUsCtrl = require('./../ctrl/contactUsCtrl');

router.get('/', async (req, res) => {
    try {
        res.redirect('/admin/login');
    } catch (error) {
        res.status(500).json({success: false, error});
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json({success: false, error});
    }
});

router.post('/login', async (req, res) => {
    try {
        if (req.body.username == 'admin' && req.body.password == 'admin') {
            res.status(200).json({message: 'Login success', success: true});
        } else {
            res.status(400).json({message: 'Please enter correct data', success: false});
        }
    } catch(error) {
        res.status(500).json({success: false, error});
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const response = []; // await contactUsCtrl.list(req);
        res.render('contactus', {data: response});
    } catch(error) {
        res.status(500).json({success: false, error});
    }
});

router.get('/logout', async (req, res) => {
    try {
        res.status(200).json({success: true});
    } catch(error) {
        res.status(500).json({success: false, error});
    }
});

module.exports = router;
