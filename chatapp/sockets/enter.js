'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterMyselfEvent', function (data) {

        console.log(data);
        // 画面上にメッセージを表示
        socket.broadcast.emit('receiveEnterEvent', data);
    });
};
