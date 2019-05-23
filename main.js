function sidebar(rootDir){
    $.ajax({
        url: rootDir + "sidebar.html", // 読み込むHTMLファイル
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}