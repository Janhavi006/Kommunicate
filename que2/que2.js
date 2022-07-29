function getUrlParameterValue(url, parameter) {

var tempurl = new URL(url);

var ans = tempurl.searchParams.get(parameter);
console.log(ans);
}
var url ='https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby';
getUrlParameterValue(url, 'utm_medium');
getUrlParameterValue(url, 'utm_campaign');