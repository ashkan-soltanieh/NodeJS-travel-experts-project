// module for index page to be used in server.js, all routers handeled in this page
const express = require('express');
const connection = require('../services/database');
const packagesRoute = require('./packages');
const contactlistRoute = require('./contactlist');
const contactusRoute = require('./contactus');
const registerRoute = require('./register');
const orderRoute = require('./order');
//router object created from express
const router = express.Router();
//to generate random packages from packages list database access made in here
module.exports = () => {
  const sql =
    'SELECT PackageId, PkgName, PkgDesc, PkgBasePrice, DATE_FORMAT(PkgStartDate, "%M %d %Y") as PkgStartDate, DATE_FORMAT(PkgEndDate, "%M %d %Y") as PkgEndDate FROM packages';
  //gets 3 random packages from database and shows on inde page on every visit
  router.get('/', async (req, res) => {
    connection.query(sql, (err, result) => {
      const allPackages = JSON.parse(JSON.stringify(result));
      const topPackages = [];
      for (let i = 0; i < 3; i++) {
        packageTemp = allPackages[Math.floor(allPackages.length * Math.random())];
        topPackages.unshift(packageTemp);
        remIndex = allPackages.indexOf(topPackages[0]);
        allPackages.splice(remIndex, 1);
      }
      res.render('layout', { pageTitle: 'Welcome', template: 'index', topPackages });
    });
  });
  //routers are assigned to each pages here
  router.use('/packages', packagesRoute());
  router.use('/contactlist', contactlistRoute());
  router.use('/register', registerRoute());
  router.use('/contactus', contactusRoute());
  router.use('/order', orderRoute());
  return router;
};

// module.exports = router()
