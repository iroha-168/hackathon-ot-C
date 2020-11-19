'use strict';

// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 入室メッセージイベントを送信する
const sendTime = getNow();
//io.sockets.emit('enterMyselEvent',)
// 入室メッセージをサーバに送信する
socket.emit('enterMyselfEvent',userName +"さんが入室しました。" + sendTime)

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
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