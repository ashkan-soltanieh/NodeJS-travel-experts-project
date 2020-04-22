// module for index page to be used in server.js
const express = require('express');
const connection = require('../services/database');

const router = express.Router();

module.exports = () => {
  const sql =
    'SELECT PackageId, PkgName, PkgDesc, PkgBasePrice, DATE_FORMAT(PkgStartDate, "%M %d %Y") as PkgStartDate, DATE_FORMAT(PkgEndDate, "%M %d %Y") as PkgEndDate FROM packages';
  router.get('/', async (req, res) => {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      const allPackages = JSON.parse(JSON.stringify(result));
      const len = allPackages.length;
      const packages = [];
      for (let i = 0; i < len; i++) {
        packageTemp = allPackages[Math.floor(allPackages.length * Math.random())];
        packages.unshift(packageTemp);
        remIndex = allPackages.indexOf(packages[0]);
        allPackages.splice(remIndex, 1);
      }
      res.render('layout', { pageTitle: 'Packages', template: 'packages', packages });
    });
  });
  return router;
};

// module.exports = router()
