function getCookieValue(e) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(e + "="), -1 != c_start) ? (c_start = c_start + e.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
}

getCookieValue(cookieName)



//------------------------------//

/*set cookie*/
var myDate = new Date();
myDate.setMonth(myDate.getMonth() + 12);

document.cookie = '_fb_emailid=viinay.mengu@gmail.com;expires=myDate;domain=.example.com;path=/';
