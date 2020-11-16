'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterMyselfEvent', function (data) {
        // 画面上にメッセージを表示

        //$('#thread').prepend('<p>' + data + '</p>');
    });
};
