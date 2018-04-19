document.write("<style type='text/css'>"
    + ".ImTable *{padding:0px;margin:0px}"
    + ".ImTable{border-collapse:collapse;border:none;background:url(/assets/kefu/bg.gif)}"
    + ".ImTable h2{font-size:14px;font-weight:bold;margin-top:5px}"
    + ".ImHeader{height:165px;background:url(/assets/kefu/im_01.gif)}"
    + ".ImRow0{background:url(/assets/kefu/ico_item1.gif) no-repeat;margin:5px 10px 0;height:24px;padding-left:5px;padding-top:4px; }"
    + ".ImRow1{background:url(/assets/kefu/ico_item1.gif) no-repeat;margin:5px 10px 0;height:24px;padding-left:5px;padding-top:4px;}"
    + "a.im,a:hover.im{text-decoration:none;height:35px;color:#fff; font-size:12px;}"
    + ".ImFooter{height:90px;background:url(/assets/kefu/im_04.gif) no-repeat; display:inline-block; width:150px;font-family:Arial,Helvetica,sans-serif;}"
    + ".ImFooter h5{font-size:14px;font-weight:normal; color:#4C9B05;text-align:center;margin:5px 0 0;font-family:'宋体';}"
    + ".ImFooter p{font-size:20px;font-weight:bold;  color:#4C9B05;text-align:center;margin:5px 0;}"
     + ".ImTable p img{ width:136px;height:136px;padding-left:6px;}"
       + ".ImRow0 img,.ImRow1 img{height:20px;}"
    + "</style>");
var __oran_top_offset = 0;
function __oran_kf_get(elmId) { return document.getElementById(elmId); }
function writeIm(textS, siteNm, topOffset) {
    __oran_top_offset = topOffset;
    var textCrumbs = textS.split(',');
    if (textCrumbs.length == 0) return;
    if (!siteNm) siteNm = "Oran";
    var rowStr = "<div style='position:" + getOs() + ";" + imPosition + ":0px;width:150px;top:" + __oran_top_offset + "px;z-index:10;' id='divOranIm'><div id='kefubtn' style='text-align:" + imPosition + ";cursor:pointer;display:none' ><img alt='打开客服菜单' src='/assets/kefu/kf-1.gif' onclick='__oran_kf_setKf(1,true)'></div><div id='bodd'><div class='ImHeader' onclick='__oran_kf_setKf(0)' style='cursor:pointer' title='隐藏客服菜单'></div><table class='ImTable' border='0' cellspacing='0' cellpadding='0' width='150'>";
    var online = [0];
    var imName = "qq";
    var altText;
    var imgPath;
    var classIm;
    var thisIm;
    var idCrumbs;
    for (var i = 0; i < textCrumbs.length; ++i) {
        if (textCrumbs[i].indexOf('||') == -1) {
            continue;
        }
        classIm = textCrumbs[i].split('||');
        // alert(classIm[0]);
        if (classIm[0]) {
            rowStr += "<tr style='display:none;'><td align='center' valign='middle' height='30'><h2>" + classIm[0] + "</h2><img src='/assets/kefu/title.gif'></td></tr>";
        }
        //        if (classIm[1].indexOf('|') == -1) {
        //            continue;
        //        }
        idCrumbs = classIm[1].split('|');

        for (var j = 0; j < idCrumbs.length; ++j) {

            thisim = idCrumbs[j].split('$');
            rowStr += "<tr><td><div  class='ImRow" + (j % 2) + "'><a title='" + thisim[1] + "' target='_blank' class='im' href='";
            if (idCrumbs[j].indexOf('@') != -1) {
                rowStr += "msnim:chat?contact=";
                imName = "msn";
            } else if (idCrumbs[j].indexOf('?call') != -1) {
                rowStr += "skype:";
                imName = "skype";
            } else if (idCrumbs[j].indexOf('?ww') != -1) {
                rowStr += "http://amos.alicdn.com/getcid.aw?v=2&site=cntaobao&s=2&groupid=0&charset=utf-8&uid=";
                imName = "ww";
                rowStr += thisim[0].replace("?ww", "");
            }
            else {
                rowStr += "http://wpa.qq.com/msgrd?v=3&site=" + siteNm + "&menu=yes&uin=";
                imName = "qq";
            }

            rowStr += thisim[0];
            switch (imName) {
                case "msn": altText = "MSN"; imgPath = "/assets/kefu/im_msn_online.gif"; break;
                case "qq": altText = "QQ"; imgPath = "http://wpa.qq.com/pa?p=2:" + thisim[0] + ":52"; break;
                case "skype": altText = "Skype"; imgPath = "/assets/kefu/skype.gif"; break;
                case "ww": altText = "Wangwang"; imgPath = "http://amos.alicdn.com/online.aw?v=2&uid=" + thisim[0] + "&site=cntaobao&s=2&charset=utf-8"; break;
            }
            rowStr += "'><img src='" + imgPath + "' alt='" + altText + "' onload='asdf(this,\"" + altText + "\")'  style='border:none' align='absmiddle' border='0' /> " + thisim[1] + "</a></div></td></tr>";
        }
    }
    rowStr += "<tr><td><p><img src='/assets/kefu/erweima.png' /></p></td></tr></table><div class='ImFooter' onclick='__oran_kf_setKf(0,true)' style='cursor:pointer' title='隐藏客服菜单'><h5>服务热线</h5><p>" + Line + "</p></div></div></div>";
    document.write(rowStr);
}
function __oran_kf_setKf(valtype, writeCookie) {
    if (valtype == 0) {
        __oran_kf_get("bodd").style.display = "none";
        __oran_kf_get("kefubtn").style.display = "";
        if (writeCookie)
            __oran_kf_setCookie("kefutype", 0);
    } else {
        __oran_kf_get("bodd").style.display = "";
        __oran_kf_get("kefubtn").style.display = "none";
        if (writeCookie)
            __oran_kf_setCookie("kefutype", 1);
    }
}
function __oran_kf_getPosition() {
    var top = document.documentElement.scrollTop;
    var left = document.documentElement.scrollLeft;
    var height = document.documentElement.clientHeight;
    var width = document.documentElement.clientWidth;
    return { top: top, left: left, height: height, width: width };
}
function __oran_kf_setPostion(objID) {
    var obj = __oran_kf_get(objID);
    window.onscroll = function () {
        var Position = __oran_kf_getPosition();
        obj.style.top = (Position.top) + __oran_top_offset + "px";
        obj.style.right = 0;
    };
    var show = true;
    var cookeVal = __oran_kf_getCookie("kefutype");
    if (cookeVal == null || cookeVal == "0") show = false;
    __oran_kf_setKf(show ? 1 : 0, true);
}
function __oran_kf_setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 10000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
function __oran_kf_getCookie(name) {
    var arr;
    var rgx = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(rgx)) return unescape(arr[2]);
    else return null;
}
function getOs() {
    var OsObject = "";

    if (navigator.userAgent.indexOf("MSIE") > 0) {
        return "absolute";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        return "absolute";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
        return "fixed";
    }

    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {

        return "fixed";
    }
    if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
        return "absolute";
    }
}
function asdf(src, a) {
    if (a == "QQ") {
        var impic = new Image();
        impic.src = src.src;
        if (impic.width > 30) {
            src.src = "/assets/kefu/im_qq_offline.gif";
            src.title = "未启用";
        }
        impic = null;
    }
} 