const express = require('express');
const connection = require('../services/database');

const router = express.Router();

module.exports = () => {
  router.get('/', async (req, res) => {
    res.render('layout', { pageTitle: 'Register', template: 'register' });
  });
  //submitts registration form to databse
  router.post('/', async (req, res) => {
    const sql = `INSERT INTO customers(CustFirstName, CustLastName, CustAddress, CustCity, CustProv, CustPostal, CustBusPhone, CustEmail) VALUES('${req.body.firstName}', '${req.body.lastName}','${req.body.address}', '${req.body.city}', '${req.body.province}', '${req.body.postal}', '${req.body.tel}', '${req.body.email}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log('\nregistration entry added to database');
    });
    return res.send('Registration form sent');
  });

  return router;
};
