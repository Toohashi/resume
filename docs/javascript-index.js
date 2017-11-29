/*global $, location*/
//top menu
$(".top-navi-bar-item").click(function () {
    "use strict";
    location.assign(["index.html", "education.html", "extracurricular.html"][$(this).index()]);
});
//index.html - 2 function buttons.
$(".function-navi-bar-item").click(function () {
    "use strict";
    var usrname = "wangyuanqiao", serverName = "yahoo", eAddr = "mailto:" + usrname + "@" + serverName + ".com", LIAddr = "https://www.linkedin.com/in/wangyuanqiao/";
    location.assign([eAddr, LIAddr][$(this).index()]);
});
//Global - Collapse the area
$(function () {
    "use strict";
    $(".ec-single-item").click(function () {
        $(this).children(".ec-single-item-body").slideToggle();
        $(this).children(".ec-single-item-head").children(".exp-col-btn").text(function () {
            var $this = $(this);
            $this.toggleClass("tempClass");
            if ($this.hasClass("tempClass")) {
                $this.text("Expand");
            } else {
                $this.text("Collapse");
            }
        });
    });
});