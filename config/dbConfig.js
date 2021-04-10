// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'rope_master',
// });

// connection.connect((err) => {
//   if (!err) {
//     console.log("Database is connected ...");
//   } else {
//     console.log("" + err + " : Error connecting database ...");
//   }
// });

// module.exports = connection;

const mysql = require('mysql');
// mysql.createConnection({multipleStatements: true});

const db = mysql.createPool({
  // connectionLimit : 100,
  connectionLimit : 1000,
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
  host: 'neersytems.ckuhkerjn7n2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Ja!nam97',
  port: 3306,
  // connectTimeout: 20000,
  // multipleStatements: true,
  // database: 'neer_system',
});

const connectionCheck = () => {
  return new Promise((resolve,reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        if(connection) connection.release();
        reject(err);
      } else {
        resolve('success');
      }
    });
  });
};

const connectionRelease = () => {
  db.on('release', (connection) => {
    console.log('Connection %d released', connection.threadId);
  });
}

module.exports = {
  db,
  connectionCheck: connectionCheck(),
  connectionRelease: connectionRelease(),
};
