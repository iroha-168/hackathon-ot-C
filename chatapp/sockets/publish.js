'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        if(!data){
            return;
        }
        
        console.log(data);

        io.sockets.emit('receiveMessageEvent', data);
    });

    socket.on('sendTaskEvent', function (data) {
        if(!data){
            return;
        }
        
        console.log(data);

        io.sockets.emit('receiveTaskEvent', data);
    });
    
};
