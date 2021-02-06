function time(){
    //获取表针
    var miao = document.getElementById("miao");
    var fen = document.getElementById("fen");
    var shi = document.getElementById("shi");
    var now = document.getElementById("now")

    function zhuan() {
        //获取实时时间
        var mydate = new Date();
        //分别获取 时 分 秒
        var h = mydate.getHours();
        var m = mydate.getMinutes();
        var s = mydate.getSeconds();
        //获取年月日
        var year = mydate.getFullYear();
        var mon = mydate.getMonth() + 1;
        var da = mydate.getDate();
        //计算距离毕业的时间
        var t = new Date('7-1-2022');
        var a = t.getTime() - mydate.getTime();
        var b = Math.floor(a / 1000 / 60 / 60 / 24);
        //计算建站时长
        var t1 = new Date('1-27-2020');
        var c = mydate.getTime() - t1.getTime();
        var d = Math.floor(c / 1000 / 60 / 60 / 24);
        //计算时分秒针 每秒需要跳转的度数
        miao.style.transform = "rotate(" + 6 * s + "deg)";
        //定位时分秒针转动的中心点
        miao.style.transformOrigin = "50% 100%";
        fen.style.transform = "rotate(" + 6 * (m + s / 60) + "deg)";
        fen.style.transformOrigin = "50% 100%";
        shi.style.transform = "rotate(" + 30 * (h + m / 60 + s / 3600) + "deg)";
        shi.style.transformOrigin = "50% 100%";
        now.innerHTML = "现在的时间是" + h + "时" + m + "分<br>距离毕业还有" + b + "天<br>本站已创建：" + d + "天"
    }
//计时器每秒刷新一次时间
    setInterval(zhuan, 1000);
}
export {
    time
}