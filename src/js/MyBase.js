"use strict";var cookie={set:function(e,t,i){var o=e+"="+t;i.expires&&(o+=";expires="+i.expires.toUTCString()),i.path&&(o+=";path="+i.path),i.domain&&(o+=";domain="+i.domain),document.cookie=o},get:function(e){for(var t=document.cookie.split("; "),i=0;i<t.length;i++){var o=t[i].split("=");if(e==o[0])return o[1]}},remove:function(e){var t=new Date;t.setDate(t.getDate()-1),cookie.set(e,"",{expires:t,path:"/"})}};