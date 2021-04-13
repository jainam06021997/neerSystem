const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
  host: 'neersytems.ckuhkerjn7n2.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Ja!nam97',
  // host: 'localhost',
  // user: 'root',
  // password: '',
  port: 3306,
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
