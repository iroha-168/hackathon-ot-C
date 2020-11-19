'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    //空メッセージのチェック・エラー表示
    if(message == ""){
        alert("メッセージを入力してください。");
        return false;
    }
    if(message == "必需品"){
        window.open('https://tabisuke.arukikata.co.jp/baggage/4680/', '_blank');
        //alert("食料、水、服、靴");
        return false;
    }
    if(message == "ジャングル"){
        window.open('https://www.discoverychannel.jp/0000090849/', '_blank');
        //alert("食料、水、服、靴");
        return false;
    }
    if(message == "病気"){
        window.open('https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000155663.html', '_blank');
        //alert("食料、水、服、靴");
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
    if(count == 0){
        alert("空白、改行以外の文字を入力してください。");
        return false;
    }

    const form = document.getElementById('form2');

    form.addEventListener('keydown', function(event) {
        if(event.keyCode === 13 || form.onclick) {
            $('form').submit();
        }
    })
    
    //改行文字を<br>に置き換え
    /*let newMessage = message.replace(/\n/g,"<br>");*/
    // 投稿内容を送信
    /*socket.emit('sendMessageEvent',userName +"さん"+" : "+ newMessage)*/
    // 現在時刻を取得
    const sendTime = getNow();
    // 投稿内容を送信
    socket.emit('sendMessageEvent',userName +"さん"+" : "+ message +`<br><div align="right">` +  sendTime + "</div>")
    //textBoxを空にする
    $('#message').val("");

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p class="message_box">' + data + '</p>');
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