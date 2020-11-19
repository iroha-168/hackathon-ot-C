'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitMyselfEvent', function (data) {

        console.log(data);

        socket.broadcast.emit('receiveExitEvent', data);

    });
};
