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
mysql.createConnection({multipleStatements: true});

const db = mysql.createPool({
  connectionLimit : 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'neer_system',
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
