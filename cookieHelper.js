
var getC = e=>document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "";

var chkC = e=>!! getC(e);

var setC = (t, o, n)=>{
    var c = document.location.host.toLowerCase().split(":")[0].split("."),
        i = [];
    if (1 == c.length)(r = new Date).setDate(r.getDate() + n), document.cookie = t + "=" + escape(o) + (null == n ? "" : ";expires=" + r.toUTCString()) + ";path=/";
    else
        for (var a = c.length - 1; a >= 0; a--) {
            i.push(c[a]);
            var r, s = "." + i.slice().reverse().join(".");
            if ((r = new Date).setDate(r.getDate() + n), document.cookie = t + "=" + escape(o) + (null == n ? "" : ";expires=" + r.toUTCString()) + ";domain=" + s + ";path=/", e(t) == o) break
        }
}

var delC = e=>!!(document.cookie = e + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;');
/*
    alternatively: setC("cname","cvalue",0) will delete the cookie
    0-will set the expire time to new Date()

*/
var cookieEnabled = navigator.cookieEnabled

console.log(getC("ppkcookie"))
setC('ppkcookie2','testcookie2',0);
console.log('navigator.cookieEnabled :',cookieEnabled)
//use getters and setters

//check if path not set does cookie deletes

/*
If you don't specify path, browser sets cookie relative to page you are currently on,
so if you delete cookie while on different page, other cookie continues its existence.

Be aware that in some cases to identify right cookie, Domain parameter is required too.
Usually used as Domain=.yourdomain.com
Period in front of domain name mean that this cookie may exist on any sub-domain (www also counts as sub-domain).

HttpOnly cookies can not be deleted with JavaScript on client side.
A HttpOnly cookie means that it's not available to scripting languages like JavaScript
HttpOnly cookies are set by server side language    
*/
