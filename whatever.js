async function whatever() {
    var s = '&commat;'
        , n = '&#105;&#110;&#102;&#111;'
        , k = '&#102;&#101;&#108;&#105;&#099;&#101;&#116;&#117;&#102;&#111;&period;&#099;&#111;&#109;'
        , e = n + s + k
        , l = '<a name="mail" href="mailto:{{spam@uce.gov}}">{{spam@uce.gov}}</a>'.replace(/{{.+?(}})/g, e)
    ;
    document.getElementById("whatever").innerHTML = l;
}

whatever();