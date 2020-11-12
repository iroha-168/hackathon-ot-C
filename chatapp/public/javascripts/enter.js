'use strict';

// 入力されたユーザ名を取得する
const userName = $('#userName').val();
// 入室メッセージイベントを送信する
//io.sockets.emit('enterMyselEvent',)
// 入室メッセージをサーバに送信する
socket.emit('enterMyselfEvent',userName +"さんが入室しました。")

// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterMyselfEvent', function (data) {
    $('#thread').prepend('<p>' +userName+ '</p>');
});
