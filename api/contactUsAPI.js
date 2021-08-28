var express = require('express');
var router = express.Router();
var contactUsCtrl = require('./../ctrl/contactUsCtrl');

router.get('/', async (req, res) => {
  try{
    res.render('homepage');
  }
  catch(error){
    res.status(500).json({success: false, error});
  }
});

router.post('/contactus', async (req, res) => {
  try{
    // const response = await contactUsCtrl.contactus(req.body);
    res.status(200).json({ success: true, data: [], message: 'Your request send successfully' });
  }
  catch(error){
    res.status(500).json({ success: false, message: 'Something went wrong, Please try after some time', error });
  }
});

module.exports = router;
