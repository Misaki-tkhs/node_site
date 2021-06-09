// ↓MySQLからデータを取得するコーディングです


// requireの設定
  const mysql = require('mysql');

  // MySQLとのコネクションの作成
  const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database: 'test'
  });

  // 接続
  connection.connect();

  // userdataの取得
  connection.query('SELECT * from profile;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); } 

    console.log('Name: ' + rows[0].Name);
    console.log('DOB: ' + rows[0].DOB);
    console.log('Birthplace: ' + rows[0].Birthplace);

  });

  // userdataのカラムを取得
  connection.query('SHOW COLUMNS FROM profile;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); }

    console.log(rows[0].Field);
    console.log(rows[1].Field);
    console.log(rows[2].Field);
  });

  // 接続終了
//   connection.end();
  
