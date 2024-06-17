function EcrireCookiefreecounterstat(nom,valeur,nombre)
{
   var argv=EcrireCookiefreecounterstat.arguments;
   var argc=EcrireCookiefreecounterstat.arguments.length;
   var ladate=new Date(); 
   ladate.setTime(ladate.getTime()+Number(nombre));
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
//toLocaleString
   document.cookie=nom+"="+escape(valeur)+
      "; expires="+ladate.toGMTString()+
       ((path==null) ? "" : ("; path="+path))+
      ((domain==null) ? "" : ("; domain="+domain))+
      ((secure==true) ? "; secure" : "");
}

function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}

function EcrireCookieGeo(nom,valeur,nombre)
{
   var argv=EcrireCookieGeo.arguments;
   var argc=EcrireCookieGeo.arguments.length;
   if(nombre==-1){
   var ladate=nombre;
   valeur="";
   }
   else{
   var ladate=new Date();
   ladate.setTime(ladate.getTime()+Number(nombre)*1000);
   }
   var expires=(argc > 2) ? argv[2] : null;
   var expires=nombre;
   var path=("/") ;
   var domain=(argc > 4) ? argv[4] : null;
   var secure=(argc > 5) ? arg[5] : false;
   document.cookie=nom+"="+escape(valeur)+
   "; expires="+ladate.toUTCString()+
   ((path==null) ? "" : ("; path="+path))+
   ((domain==null) ? "" : ("; domain="+domain))+
   ((secure==true) ? "; secure" : "");
}

function deleteCookie(name,path,domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieValfreecounterstat (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function getCookieValfreecounterstat (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var date_init=new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat=1;
var init_freecounterstat_nv=1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if(acceptcookiefreecounterstat == null){
date=new Date;
date.setTime(date.getTime()+1000);
EcrireCookiefreecounterstat('acceptcookiefreecounterstat','ok','31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat=='ok') {
test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
   if(test_cookie_value_freecounterstat == null){
   init_freecounterstat=0;
   test_cookie_value_freecounterstat ='d055bbd163a60cb5cdc0185fa77f721a';
   EcrireCookiefreecounterstat('counter',test_cookie_value_freecounterstat,'17829000');
   }
   if(test_cookie_value_freecounterstat_nv==null){
   test_cookie_value_freecounterstat_nv ='d055bbd163a60cb5cdc0185fa77f721a';
   EcrireCookiefreecounterstat('counter_nv',test_cookie_value_freecounterstat_nv,'31536000000');
   init_freecounterstat_nv=0;
   }
}
else {
var test_cookie_value_freecounterstat="no";
acceptcookiefreecounterstat='no';
}
var html_div='<a href="https://www.contadorvisitasgratis.com/geozoom.php?c=49wzfg41adqmnjraksu2bt71rabd8u9j&base=counter7&type_clic=1" target="_blank"><img border="0" src="https://counter7.contadorvisitasgratis.com/private/counter.php?c=49wzfg41adqmnjraksu2bt71rabd8u9j&init='+date_init.getTime()+'&init_freecounterstat='+init_freecounterstat+'&library=library_counters&coef=1&type=013&lenght=8&pv=0" border="0"  alt="clic para ver los detalles de las visitas este sitio" title="clic para ver los detalles de las visitas este sitio"/></a>';

var nb_couleur;
if(screen.colorDepth!=undefined){
 nb_couleur=screen.colorDepth;
}
else if(screen.pixelDepth!=undefined){
 nb_couleur=screen.pixelDepth;
}
else{
 nb_couleur=0;
}
var browser = parseInt(navigator.appVersion);
if (browser>=4){var resolution = (screen.height + "*" + screen.width)}
else{var resolution;}
if (navigator.appName.indexOf("Microsoft Internet Explorer")!=-1){langue=navigator.systemLanguage;}
else{langue=navigator.language;}
langue=langue.substring(0,2);
var date_freecounterstat = new Date();

var ref=document.referrer;
var bro_nom="chrome";
//if (ref.indexOf(".swf")!=-1 && bro_nom.indexOf("chrome")!=-1){
//ref="http://cantinachichilo.com.ar/";
//ref="NULL";

html_div+='<img style="border:none" src = "https://counter7.optistats.ovh:4433/private/pointeur/pointeur.gif?|49wzfg41adqmnjraksu2bt71rabd8u9j|'+escape(resolution)+'|'+escape(langue)+'|'+escape(nb_couleur)+'|'+Math.round(date_freecounterstat.getTime()/1000)+'|'+test_cookie_value_freecounterstat+'|computer|windows|10|chrome|125|Argentina|AR|-37.31540|-59.15790|Tandil|Telecom+Argentina+S.A.|-10800|'+init_freecounterstat_nv+'|1718488971|'+acceptcookiefreecounterstat+'|'+escape(document.URL)+'|'+escape(ref)+'|js|152.170.15.21|||&init='+date_init.getTime()+'" border="0"  width="1" height="1">';

var xhrarray={};
var extension1=false;
var extension2=false;
var extension3=false;


function frameMe(u)
{
 iframe = document.createElement('iframe');
 iframe.style.display = "none";
 iframe.src = u;
 document.body.appendChild(iframe);
}



document.getElementById('sfc49wzfg41adqmnjraksu2bt71rabd8u9j').innerHTML=html_div;

freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == null && freecounterstat_test_cookie_value != "okg"){
EcrireCookieGeo('acceptcookie','ok',86400);
}
var uri84='https://www.idealcook.ovh/promo.php?compte=49wzfg41adqmnjraksu2bt71rabd8u9j&path=001001&lg=es&pays=AR&lg_nav='+langue+'&platform=windows&browser=chrome&version=125&idealsite=FCS';
//var uri84='http://164.132.171.89/promo.php?compte=49wzfg41adqmnjraksu2bt71rabd8u9j&path=001001&lg=es&pays=AR&lg_nav='+langue+'&platform=windows&browser=chrome&version=125&idealsite=FCS';
//var uri84='http://37.187.248.215/promo.php?compte=49wzfg41adqmnjraksu2bt71rabd8u9j&path=001001&lg=es&pays=AR&lg_nav='+langue+'&platform=windows&browser=chrome&version=125&idealsite=FCS';
//var uri84='http://5.39.67.191/promo.php?compte=49wzfg41adqmnjraksu2bt71rabd8u9j&path=001001&lg=es&pays=AR&lg_nav='+langue+'&platform=windows&browser=chrome&version=125&idealsite=FCS';
//var uri84='http://94.23.210.144/promo/promo.php?compte=49wzfg41adqmnjraksu2bt71rabd8u9j&path=001001&lg=es&pays=AR&lg_nav='+langue+'&platform=windows&browser=chrome&version=125';


function geoclick(){
freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if(freecounterstat_test_cookie_value == "ok" && freecounterstat_test_cookie_value != "ok." && freecounterstat_test_cookie_value != "okg" && freecounterstat_test_cookie_value != "okz"){
        freecounterstat_test_cookie="001001;49wzfg41adqmnjraksu2bt71rabd8u9j;es;";
        lawidth=screen.width;
        laheight=screen.height;
if(navigator.userAgent.indexOf('Firefox') == -1){
wini=window.open(uri84,'_blank', 'toolbar=1,location=0,directories=1,status=0,menubar=0,scrollbars=1,resizable=1,fullscreen=0,width='+lawidth+',height='+laheight+',top=0,left=100','_blank');
if(wini)wini.blur();
window.focus();
self.focus();



}
else{
bSimple=false;
 randn='pu_' + Math.floor(89999999*Math.random()+10000000);

 var _parent = self,sToolbar,sOptions,popunder84;
 sToolbar='no';
//sToolbar = (navigator.userAgent.indexOf('webkit')==-1 && (navigator.userAgent.indexOf('mozilla')==-1 || parseInt(navigator.appversion, 10) < 12)) ? 'yes' : 'no';
 if (top != self) {
  try {
   if (top.document.location.toString()) {
    _parent = top;
   }
  }
  catch(err) { }
 }
 sOptions = 'toolbar=' + sToolbar + ',scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=' + (screen.availWidth - 10).toString();
 sOptions += ',height=' + (screen.availHeight - 122).toString() + ',screenX=0,screenY=0,left=0,top=0';
 popunder84 = _parent.window.open(uri84, randn, sOptions);
 if (popunder84) {
    popunder84.blur();
    //setTimeout('popunder84.blur',0);
    if (bSimple) {
    window.focus();
    try { opener.window.focus(); }
    catch (err) { }
    }
    else {
    popunder84.init = function(e) {
    with (e) {
     (function() {
     if (typeof window.mozPaintCount != 'undefined') {
     var x = window.open('about:blank');
     x.close();
     }
     try { opener.window.focus(); }
     catch (err) { }
     })();
     }
     };
     popunder84.params = {
       url: uri84
     };
     popunder84.init(popunder84);
     }
  }
}
EcrireCookieGeo('acceptcookie','ok.',86400);
 }
}


function popup84()
{
 items=new Array();
 if(top.location != self.document.location){
 items = document.getElementsByTagName('a');
 parent.document.onclick=geoclick;
 }
 else{
 items = document.getElementsByTagName('a');
 if (window.addEventListener)document.body.addEventListener('click',geoclick,false)
 if (window.attachEvent)document.body.attachEvent("onclick", geoclick)
 }
 for(var i=0; i<items.length; i++){
 if (items[i].onclick == undefined) items[i].onclick = geoclick;
 }
}
if (window.addEventListener)window.addEventListener("load", popup84, false)
if (window.attachEvent)window.attachEvent("onload", popup84)
document.onclick=geoclick;

