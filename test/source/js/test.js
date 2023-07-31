function travelling() {
  if (fcircle_random1 != 'undefined'){
    fetch(114514).then((e=>e.json())).then((e=>{
        var t = e.link
          , o = "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + e.name + "」";
        document.styleSheets[0].addRule(":root", "--heo-snackbar-time:8000ms!important"),
        Snackbar.show({
            text: o,
            duration: 8e3,
            pos: "top-center",
            actionText: "前往",
            onActionClick: function(e) {
                $(e).css("opacity", 0),
                window.open(t, "_blank")
            }
        })
      }
      ))
    }
  else{
    acy.snackbarShow("博客没有配置友圈哦");
  }
}