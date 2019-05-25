function header(rootDir){
    $.ajax({
    url: rootDir + "include/header.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
    html = html.replace(/\{\$root\}/g, rootDir); //sidebar.htmlの{$root}を置換
    document.write(html);
    }
    });
}

function sidebar(rootDir){
    $.ajax({
    url: rootDir + "include/sidebar.html",
    cache: false,
    async: false,
    dataType: 'html',
    success: function(html){
    html = html.replace(/\{\$root\}/g, rootDir); //sidebar.htmlの{$root}を置換
    document.write(html);
    }
    });
}