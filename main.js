function sidebar(rootDir){
    $.ajax({
    url: rootDir + "sidebar.html",
    cache: false,
    success: function(html){
    html = html.replace(/\{\$root\}/g, rootDir); //sidebar.htmlの{$root}を置換
    document.write(html);
    }
    });
    }