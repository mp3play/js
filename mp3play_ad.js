var mp3play = 0;

function mp3play_ADS_GetCookie(Name) {
    var re = new RegExp(Name + "=[^;]+", "i");
    if (document.cookie.match(re))
        return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);
    return ""
}

function mp3play_ADS_SetCookie(name, value, days) {
    if (typeof days != "undefined") {
        var expireDate = new Date()
        var expstring = expireDate.setDate(expireDate.getDate() + days)
        document.cookie = name + "=" + decodeURIComponent(value) + "; expires=" + expireDate.toGMTString()
    } else document.cookie = name + "=" + decodeURIComponent(value);
}

function addEvent(obj, eventName, func) {
    if (obj.attachEvent) {
        obj.attachEvent("on" + eventName, func);
    } else if (obj.addEventListener) {
        obj.addEventListener(eventName, func, true);
    } else {
        obj["on" + eventName] = func;
    }
}
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
        var cookie_popup_ads = mp3play_ADS_GetCookie('mp3play_popup_ads');
        if (cookie_popup_ads == '') {
            if (mp3play == 0) {
                mp3play = 1;
                var Time_expires = 24 * 3600 * 1000;
                mp3play_ADS_SetCookie('mp3play_popup_ads', 'true', Time_expires);
                var params = 'width=' + screen.width;
                params += ', height=' + screen.height;
                params += ',scrollbars=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1,fullscreen=yes';
                //var mp3play_popup_1 = window.open('http://youtubemp4.website', 'mp3play_popup_1', params + ', top=0,left=0').blur();
                var mp3play_popup_2 = window.open('http://nginxgenerator.com', 'mp3play_popup_2', params + ', top=0,left=0').blur();
                window.focus();
            }
        }
    });
});
