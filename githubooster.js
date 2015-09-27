var url = location.href;

$("button").each(function(index) {
   // ボタン名を取得
   var button_name = $(this).text();
   // console.log(index + ": " + button_name);
   if (button_name == 'Post') {
       // Postのだけ
       $(this).click(function() {
           // テキストに入れたメッセージ
           // nameがxhpc_message_text
	   // idがu_0_11かもしれないけど数字変わりそうだからしない。
           // var text_message = $('textarea#u_0_11').val();
           var text_message = $('textarea').val();
           var match = text_message.match(/\d+/);
	   // ワード
           var four_letter_word_arr = [
               'fuck', 'バカ', 'ばか', 'カス', 'ゴミ', 'ブス', 'しね', '死ね'
           ];

           var flag = false;
           console.log(text_message);
           jQuery.each(four_letter_word_arr, function() {
               // 正規表現オブジェクトにする
               var founded = text_message.search(new RegExp(String(this)));
	       // -1以外なら見つけたよ
               if (founded != -1) {
                   flag = true;
               }
           });

           if (flag) {
               var ret = confirm("いじめに関する言葉を使ってます。本当に投稿しますか？");
               if (ret) {
                   console.log("残念ながら投稿しました。");
               } else {
                   console.log("投稿しませんでした。");
    	       return false;
               }
           }
       });
   }
});
