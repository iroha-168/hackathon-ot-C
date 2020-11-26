'use strict';

// 投稿メッセージをサーバに送信する
function task() {
    const task = $('#task').val();
    const message = $('#message').val();

    //改行文字を<br>に置き換え
    let newMessage = message.replace(/\n/g,"<br>");
    // 現在時刻を取得
    let sendTime = getNow();
    // 投稿内容を送信
    socket.emit('sendTaskEvent', newMessage +"<br><div align='right'>" +  sendTime + "</div>")
    //textBoxを空にする
    $('#message').val("");

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveTaskEvent', function (data) {
    console.log(data);
    $('#taskContent').html('<p class="task_box">' + data + '</p>');
});

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "/" + mon + "/" + day + " " + hour + ":" + min + ":" + sec + ""; 
	return s;
}