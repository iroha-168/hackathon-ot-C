'use strict';

function teskUpdate(){
  var sqlite = require('sqlite3').verbose();                                          
  var db = new sqlite.Database('test.sqlite');
  var taskContent = $("#task").val();
  
  db.serialize(function() {

    db.run("UPDATE task SET content =  " + taskContent + "WHERE id=1");
    db.each("SELECT * FROM task", function(err, row) {
      socket.emit('sendTaskEvent',row.content);
    });

  });

  db.close();
}

socket.on('receiveTaskEvent', function (data) {
  $('#task').prepend('<p>' + data + '</p>');
});