// // requireの設定
//   const mysql = require('mysql');

//   // MySQLとのコネクションの作成
//   const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password: '',
//     database: 'test'
//   });

//   // 接続
//   connection.connect();

//   // userdataの取得
//   connection.query('SELECT * from profile;', function (err, rows, fields) {
//     if (err) { console.log('err: ' + err); } 

//     console.log('Name: ' + rows[0].Name);
//     console.log('DOB: ' + rows[0].DOB);
//     console.log('Birthplace: ' + rows[0].Birthplace);

//   });

//   // userdataのカラムを取得
//   connection.query('SHOW COLUMNS FROM profile;', function (err, rows, fields) {
//     if (err) { console.log('err: ' + err); }

//     console.log(rows[0].Field);
//     console.log(rows[1].Field);
//     console.log(rows[2].Field);
//   });

//   // 接続終了
//   connection.end();
  


const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hoge',
  password : '',
  database : 'test'
});

app.set('view engine', 'js');
app.use(express.static('views'));

const recordLog = function (req, res, next) {
  console.log('localhost:3000にアクセスしました');
  next();
};

app.use(recordLog);

app.get('/', function (req, res) {
  let sql = 'select * from profile';
  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    res.render('profile.js', { title: 'node + mysql practice', ProfileDatas: rows});
  });
});

app.listen(3000);