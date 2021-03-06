'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    //改行文字を<br>に置き換え
    let newMessage = message.replace(/\n/g,"<br>");

    let sendTime = getNow();
    // メモの内容を表示
    $('#memoContent').prepend('<p class="memo_box">' + newMessage +"<br><div align='right'>" +sendTime+  "</div>" + '</p>');
    // textBoxを空にする
    $('#message').val("");
    return false;
}

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