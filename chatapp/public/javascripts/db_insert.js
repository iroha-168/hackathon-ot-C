'use strict';

function taskInsert(){
  var sqlite = require('sqlite3').verbose();                                          
  var db = new sqlite.Database('test.sqlite');

  db.serialize(function() {

    // テーブルがなければ作成
    db.run('CREATE TABLE IF NOT EXISTS task(id INT, content TEXT)');
  
    // プリペアードステートメントでデータ挿入
    var stmt = db.prepare('INSERT INTO task VALUES(?,?)');
    stmt.run([1, ""]);
  });

  db.close();
}