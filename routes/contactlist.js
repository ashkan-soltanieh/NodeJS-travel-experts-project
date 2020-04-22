// this router is for contact us page. it tskes params from server and fetch the contactlist from it using method in contactlist service
// it uses layout page index page as shared layout with other pages and its template is at pages folder
const express = require('express');
const connection = require('../services/database');

const router = express.Router();

module.exports = () => {
  const sql =
    "select a.AgtFirstName as 'Firstname', a.AgtLastName as 'Lastname', a.AgtEmail as Email, concat(agencies.AgncyAddress, ', ', agencies.AgncyCity, ', ',agencies.AgncyProv) as 'Address', agencies.AgncyPhone as 'Phone' from agents a join agencies on a.AgencyID = agencies.AgencyID";
  router.get('/', async (req, res, next) => {
    connection.query(sql, (err, result) => {
      const contactlist = JSON.parse(JSON.stringify(result));
      res.render('layout', {
        pageTitle: 'Contact List',
        template: 'contactlist',
        contactlist,
      });
    });
  });

  return router;
};
