'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = getValue();

    // ユーザ名が未入力でないかチェックする
    if(userName == "") {
        //ユーザー名を入力してくださいと出力
        alert("ユーザー名を入力してください");
        return false;
    }

    $('form').submit();
}

function getValue() {
    const userName = $('#userName').val();
    return userName;
}
