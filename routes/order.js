//this page is referred when user prompts to book a package
const express = require('express');
const connection = require('../services/database');
// router object defined here
const router = express.Router();

module.exports = () => {
  const sql =
    'SELECT PackageId, PkgName, PkgDesc, PkgBasePrice, DATE_FORMAT(PkgStartDate, "%M %d %Y") as StartDate, DATE_FORMAT(PkgEndDate, "%M %d %Y") as PkgEndDate FROM packages';
  // gets all packages from database and enables user to select one and book a trip
  router.get('/', async (req, res) => {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      const packages = JSON.parse(JSON.stringify(result));
      res.render('layout', { pageTitle: 'Order Page', template: 'order', packages });
    });
  });
  //submitts for to database when user submits the completed form
  router.post('/', async (req, res) => {
    const sql1 = `INSERT INTO bookings(PackageId) VALUES((SELECT PackageId FROM packages WHERE PkgName = '${req.body.package}'))`;
    connection.query(sql1, (err, result) => {
      if (err) throw err;
      console.log('\norder package entry added to database');
    });
    return res.send('Order form sent');
  });
  return router;
};
