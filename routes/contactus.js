const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res) => {
    res.render('layout', { pageTitle: 'Contact Us', template: 'contactus' });
  });
  // to send confirmation after form is submitted and have entered values in req.body to send to database
  router.post('/', async (req, res) => {
    console.log(req.body);
    return res.send('Contact form sent');
  });

  return router;
};
