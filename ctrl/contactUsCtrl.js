// var express = require('express');
// var router = express.Router();
// var {db, connectionRelease} = require('../config/dbConfig');

// router.list = (req) => {
//   return new Promise((resolve, reject) => {
//     const query = `select * from contactus order by created_at desc`;
//     db.query(query, (err, result) => {
//       connectionRelease;
//       if (err) {
//         const msg = {
//           message: 'db error',
//           error: err,
//         };
//         reject(msg);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// router.contactus = (data) => {
//   return new Promise((resolve, reject) => {
//     db.query('insert into contactus set ? ', data, (err, res) => {
//       connectionRelease;
//       if (err) {
//         const msg = {
//           message: 'db error',
//           error: err,
//         };
//         reject(msg);
//       } else {
//         const msg = {
//           message: 'Record Added Successfully',
//         };
//         resolve(msg);
//       }
//     });
//   });
// };

// module.exports = router;
