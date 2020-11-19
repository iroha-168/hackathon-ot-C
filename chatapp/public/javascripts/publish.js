'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    //空メッセージのチェック・エラー表示
    if(message == ""){
        alert("メッセージを入力してください");
        return false;
    }
    //空白、改行のみのメッセージのチェック・エラー表示
    let count = 0;
    
    for(let i = 0; i < message.length; i++){
        if(message[i] == " " || message[i] == "　"){
            continue;
        }
        else if(message[i] == "\n"){
            continue;
        }
        else{
            count++;
            break;
        }
    }
    if(count === 0){
        alert("空白、改行以外の文字を入力してください");
        return false;
    }
    
    // 投稿内容を送信
    socket.emit('sendMessageEvent',userName +"さん"+" : "+ message)
    //textBoxを空にする
    $('#message').val("");

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
