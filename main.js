function sidebar(){
    $.ajax({
        url: "sidebar.html", // 読み込むHTMLファイル
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}