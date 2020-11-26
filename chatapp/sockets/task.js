'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendTaskEvent', function (data) {
        if(!data){
            return;
        }

        io.sockets.emit('receiveTaskEvent', data);
    });
};