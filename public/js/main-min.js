!function(){"use strict";function t(t){return t}const e=8;let n={mistakes:0,success:0};let r="https://economictest.herokuapp.com",a='"Как хорошо вы разбираетесь в новостях бизнеса"';function s(t){return t}var i,u,l;i=window,u=document,(l=function(t){this.elem=t}).init=function(){var t,e=u.querySelectorAll("[data-sharer]"),n=e.length;for(t=0;t<n;t++)e[t].addEventListener("click",l.add)},l.add=function(t){var e=t.currentTarget||t.srcElement;new l(e).share()},l.prototype={constructor:l,getValue:function(t){var e=this.elem.getAttribute("data-"+t);return e&&"hashtag"===t&&(e.startsWith("#")||(e="#"+e)),e},share:function(){var t=this.getValue("sharer").toLowerCase(),e={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url"),hashtag:this.getValue("hashtag")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to")||"",params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:!0},whatsapp:{shareUrl:null!==this.getValue("web")?"https://api.whatsapp.com/send":"whatsapp://send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},telegram:{shareUrl:"tg://msg_url",params:{text:this.getValue("title"),url:this.getValue("url"),to:this.getValue("to")},isLink:!0},viber:{shareUrl:"viber://forward",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},line:{shareUrl:"http://line.me/R/msg/text/?"+encodeURIComponent(this.getValue("title")+" "+this.getValue("url")),isLink:!0},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url"),media:this.getValue("image"),description:this.getValue("description")}},tumblr:{shareUrl:"http://tumblr.com/widgets/share/tool",params:{canonicalUrl:this.getValue("url"),content:this.getValue("url"),posttype:"link",title:this.getValue("title"),caption:this.getValue("caption"),tags:this.getValue("tags")}},hackernews:{shareUrl:"https://news.ycombinator.com/submitlink",params:{u:this.getValue("url"),t:this.getValue("title")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},xing:{shareUrl:"https://www.xing.com/app/user",params:{op:"share",url:this.getValue("url"),title:this.getValue("title")}},buffer:{shareUrl:"https://buffer.com/add",params:{url:this.getValue("url"),title:this.getValue("title"),via:this.getValue("via"),picture:this.getValue("picture")}},instapaper:{shareUrl:"http://www.instapaper.com/edit",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("description")}},pocket:{shareUrl:"https://getpocket.com/save",params:{url:this.getValue("url")}},digg:{shareUrl:"http://www.digg.com/submit",params:{url:this.getValue("url")}},stumbleupon:{shareUrl:"http://www.stumbleupon.com/submit",params:{url:this.getValue("url"),title:this.getValue("title")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},weibo:{shareUrl:"http://service.weibo.com/share/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),pic:this.getValue("image"),appkey:this.getValue("appkey"),ralateUid:this.getValue("ralateuid"),language:"zh_cn"}},renren:{shareUrl:"http://share.renren.com/share/buttonshare",params:{link:this.getValue("url")}},myspace:{shareUrl:"https://myspace.com/post",params:{u:this.getValue("url"),t:this.getValue("title"),c:this.getValue("description")}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},baidu:{shareUrl:"http://cang.baidu.com/do/add",params:{it:this.getValue("title"),iu:this.getValue("url")}},douban:{shareUrl:"https://www.douban.com/share/service",params:{name:this.getValue("title"),href:this.getValue("url"),image:this.getValue("image")}},okru:{shareUrl:"https://connect.ok.ru/dk",params:{"st.cmd":"WidgetSharePreview","st.shareUrl":this.getValue("url"),title:this.getValue("title")}},mailru:{shareUrl:"http://connect.mail.ru/share",params:{share_url:this.getValue("url"),linkname:this.getValue("title"),linknote:this.getValue("description"),type:"page"}},evernote:{shareUrl:"http://www.evernote.com/clip.action",params:{url:this.getValue("url"),title:this.getValue("title")}},skype:{shareUrl:"https://web.skype.com/share",params:{url:this.getValue("url"),title:this.getValue("title")}}}[t];return e&&(e.width=this.getValue("width"),e.height=this.getValue("height")),void 0!==e&&this.urlSharer(e)},urlSharer:function(t){var e,n=t.params||{},r=Object.keys(n),a=r.length>0?"?":"";for(e=0;e<r.length;e++)"?"!==a&&(a+="&"),n[r[e]]&&(a+=r[e]+"="+encodeURIComponent(n[r[e]]));if(t.shareUrl+=a,t.isLink)i.location.href=t.shareUrl;else{var s=t.width||600,u=t.height||480,l=i.innerWidth/2-s/2+i.screenX,o="scrollbars=no, width="+s+", height="+u+", top="+(i.innerHeight/2-u/2+i.screenY)+", left="+l,c=i.open(t.shareUrl,"",o);i.focus&&c.focus()}}},"complete"===u.readyState||"loading"!==u.readyState?l.init():u.addEventListener("DOMContentLoaded",l.init),i.addEventListener("page:load",l.init),i.Sharer=l;var o={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},c={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},h=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],d={CSS:{},springs:{}};function p(t,e,n){return Math.min(Math.max(t,e),n)}function f(t,e){return t.indexOf(e)>-1}function g(t,e){return t.apply(null,e)}var m={arr:function(t){return Array.isArray(t)},obj:function(t){return f(Object.prototype.toString.call(t),"Object")},pth:function(t){return m.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||m.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return m.hex(t)||m.rgb(t)||m.hsl(t)},key:function(t){return!o.hasOwnProperty(t)&&!c.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function v(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function w(t,e){var n=v(t),r=p(m.und(n[0])?1:n[0],.1,100),a=p(m.und(n[1])?100:n[1],.1,100),s=p(m.und(n[2])?10:n[2],.1,100),i=p(m.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),l=s/(2*Math.sqrt(a*r)),o=l<1?u*Math.sqrt(1-l*l):0,c=1,h=l<1?(l*u-i)/o:-i+u;function f(t){var n=e?e*t/1e3:t;return n=l<1?Math.exp(-n*l*u)*(c*Math.cos(o*n)+h*Math.sin(o*n)):(c+h*n)*Math.exp(-n*u),0===t||1===t?t:1-n}return e?f:function(){var e=d.springs[t];if(e)return e;for(var n=0,r=0;;)if(1===f(n+=1/6)){if(++r>=16)break}else r=0;var a=n*(1/6)*1e3;return d.springs[t]=a,a}}function y(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=p(t,1,10),r=p(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}function b(t){return void 0===t&&(t=10),function(e){return Math.round(e*t)*(1/t)}}var _=function(){var t=11,e=1/(t-1);function n(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function a(t){return 3*t}function s(t,e,s){return((n(e,s)*t+r(e,s))*t+a(e))*t}function i(t,e,s){return 3*n(e,s)*t*t+2*r(e,s)*t+a(e)}return function(n,r,a,u){if(0<=n&&n<=1&&0<=a&&a<=1){var l=new Float32Array(t);if(n!==r||a!==u)for(var o=0;o<t;++o)l[o]=s(o*e,n,a);return function(t){return n===r&&a===u?t:0===t||1===t?t:s(c(t),r,u)}}function c(r){for(var u=0,o=1,c=t-1;o!==c&&l[o]<=r;++o)u+=e;var h=u+(r-l[--o])/(l[o+1]-l[o])*e,d=i(h,n,a);return d>=.001?function(t,e,n,r){for(var a=0;a<4;++a){var u=i(e,n,r);if(0===u)return e;e-=(s(e,n,r)-t)/u}return e}(r,h,n,a):0===d?h:function(t,e,n,r,a){var i,u,l=0;do{(i=s(u=e+(n-e)/2,r,a)-t)>0?n=u:e=u}while(Math.abs(i)>1e-7&&++l<10);return u}(r,u,u+e,n,a)}}}(),V=function(){var t=["Quad","Cubic","Quart","Quint","Sine","Expo","Circ","Back","Elastic"],e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],y],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,e){return function(n){return 1-y(t,e)(1-n)}}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,e){return function(n){return n<.5?y(t,e)(2*n)/2:1-y(t,e)(-2*n+2)/2}}]},n={linear:[.25,.25,.75,.75]},r=function(r){e[r].forEach(function(e,a){n["ease"+r+t[a]]=e})};for(var a in e)r(a);return n}();function x(t,e){if(m.fnc(t))return t;var n=t.split("(")[0],r=V[n],a=v(t);switch(n){case"spring":return w(t,e);case"cubicBezier":return g(_,a);case"steps":return g(b,a);default:return m.fnc(r)?g(r,a):g(_,r)}}function k(t){try{return document.querySelectorAll(t)}catch(t){return}}function M(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],s=0;s<n;s++)if(s in t){var i=t[s];e.call(r,i,s,t)&&a.push(i)}return a}function L(t){return t.reduce(function(t,e){return t.concat(m.arr(e)?L(e):e)},[])}function U(t){return m.arr(t)?t:(m.str(t)&&(t=k(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function C(t,e){return t.some(function(t){return t===e})}function $(t){var e={};for(var n in t)e[n]=t[n];return e}function S(t,e){var n=$(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function T(t,e){var n=$(t);for(var r in e)n[r]=m.und(t[r])?e[r]:t[r];return n}function O(t){return m.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:m.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):m.hsl(t)?function(t){var e,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),s=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,l=a[4]||1;function o(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==i)e=n=r=u;else{var c=u<.5?u*(1+i):u+i-u*i,h=2*u-c;e=o(h,c,s+1/3),n=o(h,c,s),r=o(h,c,s-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+l+")"}(t):void 0;var e,n}function D(t){var e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[2]}function q(t,e){return m.fnc(t)?t(e.target,e.id,e.total):t}function E(t,e){return t.getAttribute(e)}function A(t,e,n){if(C([n,"deg","rad","turn"],D(e)))return e;var r=d.CSS[e+n];if(!m.und(r))return r;var a=document.createElement(t.tagName),s=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;s.appendChild(a),a.style.position="absolute",a.style.width=100+n;var i=100/a.offsetWidth;s.removeChild(a);var u=i*parseFloat(e);return d.CSS[e+n]=u,u}function I(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?A(t,a,n):a}}function N(t,e){return m.dom(t)&&!m.inp(t)&&(E(t,e)||m.svg(t)&&t[e])?"attribute":m.dom(t)&&C(h,e)?"transform":m.dom(t)&&"transform"!==e&&I(t,e)?"css":null!=t[e]?"object":void 0}function P(t){if(m.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(n);)a.set(e[1],e[2]);return a}}function j(t,e,n,r){var a=f(e,"scale")?1:0+function(t){return f(t,"translate")||"perspective"===t?"px":f(t,"rotate")||f(t,"skew")?"deg":void 0}(e),s=P(t).get(e)||a;return n&&(n.transforms.list.set(e,s),n.transforms.last=e),r?A(t,s,r):s}function B(t,e,n,r){switch(N(t,e)){case"transform":return j(t,e,r,n);case"css":return I(t,e,n);case"attribute":return E(t,e);default:return t[e]||0}}function F(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=D(t)||0,a=parseFloat(e),s=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return a+s+r;case"-":return a-s+r;case"*":return a*s+r}}function H(t,e){if(m.col(t))return O(t);var n=D(t),r=n?t.substr(0,t.length-n.length):t;return e&&!/\s/g.test(t)?r+e:r}function R(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function X(t){for(var e,n=t.points,r=0,a=0;a<n.numberOfItems;a++){var s=n.getItem(a);a>0&&(r+=R(e,s)),e=s}return r}function Y(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*E(t,"r")}(t);case"rect":return function(t){return 2*E(t,"width")+2*E(t,"height")}(t);case"line":return function(t){return R({x:E(t,"x1"),y:E(t,"y1")},{x:E(t,"x2"),y:E(t,"y2")})}(t);case"polyline":return X(t);case"polygon":return function(t){var e=t.points;return X(t)+R(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function z(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;m.svg(e)&&(e=e.parentNode,m.svg(e.parentNode)););return e}(t),a=r.getBoundingClientRect(),s=E(r,"viewBox"),i=a.width,u=a.height,l=n.viewBox||(s?s.split(" "):[0,0,i,u]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:i/l[2],h:u/l[3]}}function W(t,e){function n(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var r=z(t.el,t.svg),a=n(),s=n(-1),i=n(1);switch(t.property){case"x":return(a.x-r.x)*r.w;case"y":return(a.y-r.y)*r.h;case"angle":return 180*Math.atan2(i.y-s.y,i.x-s.x)/Math.PI}}function Z(t,e){var n=/-?\d*\.?\d+/g,r=H(m.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:m.str(t)||e?r.split(n):[]}}function Q(t){return M(t?L(m.arr(t)?t.map(U):U(t)):[],function(t,e,n){return n.indexOf(t)===e})}function G(t){var e=Q(t);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:P(t)}}})}function J(t,e){var n=$(e);if(/^spring/.test(n.easing)&&(n.duration=w(n.easing)),m.arr(t)){var r=t.length;2===r&&!m.obj(t[0])?t={value:t}:m.fnc(e.duration)||(n.duration=e.duration/r)}var a=m.arr(t)?t:[t];return a.map(function(t,n){var r=m.obj(t)&&!m.pth(t)?t:{value:t};return m.und(r.delay)&&(r.delay=n?0:e.delay),m.und(r.endDelay)&&(r.endDelay=n===a.length-1?e.endDelay:0),r}).map(function(t){return T(t,n)})}function K(t,e){var n=[],r=e.keyframes;for(var a in r&&(e=T(function(t){for(var e=M(L(t.map(function(t){return Object.keys(t)})),function(t){return m.key(t)}).reduce(function(t,e){return t.indexOf(e)<0&&t.push(e),t},[]),n={},r=function(r){var a=e[r];n[a]=t.map(function(t){var e={};for(var n in t)m.key(n)?n==a&&(e.value=t[n]):e[n]=t[n];return e})},a=0;a<e.length;a++)r(a);return n}(r),e)),e)m.key(a)&&n.push({name:a,tweens:J(e[a],t)});return n}function tt(t,e){var n;return t.tweens.map(function(r){var a=function(t,e){var n={};for(var r in t){var a=q(t[r],e);m.arr(a)&&1===(a=a.map(function(t){return q(t,e)})).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),s=a.value,i=m.arr(s)?s[1]:s,u=D(i),l=B(e.target,t.name,u,e),o=n?n.to.original:l,c=m.arr(s)?s[0]:o,h=D(c)||D(l),d=u||h;return m.und(i)&&(i=o),a.from=Z(c,d),a.to=Z(F(i,c),d),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=x(a.easing,a.duration),a.isPath=m.pth(s),a.isColor=m.col(a.from.original),a.isColor&&(a.round=1),n=a,a})}var et={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){if(r.list.set(e,n),e===r.last||a){var s="";r.list.forEach(function(t,e){s+=e+"("+t+") "}),t.style.transform=s}}};function nt(t,e){G(t).forEach(function(t){for(var n in e){var r=q(e[n],t),a=t.target,s=D(r),i=B(a,n,s,t),u=F(H(r,s||D(i)),i),l=N(a,n);et[l](a,n,u,t.transforms,!0)}})}function rt(t,e){return M(L(t.map(function(t){return e.map(function(e){return function(t,e){var n=N(t.target,e.name);if(n){var r=tt(e,t),a=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(t,e)})})),function(t){return!m.und(t)})}function at(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,t.map(function(t){return r(t)+t.duration})):e.duration,a.delay=n?Math.min.apply(Math,t.map(function(t){return r(t)+t.delay})):e.delay,a.endDelay=n?a.duration-Math.max.apply(Math,t.map(function(t){return r(t)+t.duration-t.endDelay})):e.endDelay,a}var st=0;var it,ut=[],lt=[],ot=function(){function t(){it=requestAnimationFrame(e)}function e(e){var n=ut.length;if(n){for(var r=0;r<n;){var a=ut[r];if(a.paused){var s=ut.indexOf(a);s>-1&&(ut.splice(s,1),n=ut.length)}else a.tick(e);r++}t()}else it=cancelAnimationFrame(it)}return t}();function ct(t){void 0===t&&(t={});var e,n=0,r=0,a=0,s=0,i=null;function u(t){var e=window.Promise&&new Promise(function(t){return i=t});return t.finished=e,e}var l=function(t){var e=S(o,t),n=S(c,t),r=K(n,t),a=G(t.targets),s=rt(a,r),i=at(s,n),u=st;return st++,T(e,{id:u,children:[],animatables:a,animations:s,duration:i.duration,delay:i.delay,endDelay:i.endDelay})}(t);u(l);function h(){var t=l.direction;"alternate"!==t&&(l.direction="normal"!==t?"normal":"reverse"),l.reversed=!l.reversed,e.forEach(function(t){return t.reversed=l.reversed})}function d(t){return l.reversed?l.duration-t:t}function f(){n=0,r=d(l.currentTime)*(1/ct.speed)}function g(t,e){e&&e.seek(t-e.timelineOffset)}function m(t){for(var e=0,n=l.animations,r=n.length;e<r;){var a=n[e],s=a.animatable,i=a.tweens,u=i.length-1,o=i[u];u&&(o=M(i,function(e){return t<e.end})[0]||o);for(var c=p(t-o.start-o.delay,0,o.duration)/o.duration,h=isNaN(c)?1:o.easing(c),d=o.to.strings,f=o.round,g=[],m=o.to.numbers.length,v=void 0,w=0;w<m;w++){var y=void 0,b=o.to.numbers[w],_=o.from.numbers[w]||0;y=o.isPath?W(o.value,h*b):_+h*(b-_),f&&(o.isColor&&w>2||(y=Math.round(y*f)/f)),g.push(y)}var V=d.length;if(V){v=d[0];for(var x=0;x<V;x++){d[x];var k=d[x+1],L=g[x];isNaN(L)||(v+=k?L+k:L+" ")}}else v=g[0];et[a.type](s.target,a.property,v,s.transforms),a.currentValue=v,e++}}function v(t){l[t]&&!l.passThrough&&l[t](l)}function w(t){var o=l.duration,c=l.delay,f=o-l.endDelay,w=d(t);l.progress=p(w/o*100,0,100),l.reversePlayback=w<l.currentTime,e&&function(t){if(l.reversePlayback)for(var n=s;n--;)g(t,e[n]);else for(var r=0;r<s;r++)g(t,e[r])}(w),!l.began&&l.currentTime>0&&(l.began=!0,v("begin"),v("loopBegin")),w<=c&&0!==l.currentTime&&m(0),(w>=f&&l.currentTime!==o||!o)&&m(o),w>c&&w<f?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),m(w)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=p(w,0,o),l.began&&v("update"),t>=o&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=a,v("loopComplete"),v("loopBegin"),"alternate"===l.direction&&h()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(i(),u(l)))))}return l.reset=function(){var t=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===t,l.remaining=l.loop,e=l.children;for(var n=s=e.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===t&&1===l.loop)&&l.remaining++,m(0)},l.set=function(t,e){return nt(t,e),l},l.tick=function(t){a=t,n||(n=a),w((a+(r-n))*ct.speed)},l.seek=function(t){w(d(t))},l.pause=function(){l.paused=!0,f()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,ut.push(l),f(),it||ot())},l.reverse=function(){h(),f()},l.restart=function(){l.reset(),l.play()},l.reset(),l.autoplay&&l.play(),l}function ht(t,e){for(var n=e.length;n--;)C(t,e[n].animatable.target)&&e.splice(n,1)}"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(ut.forEach(function(t){return t.pause()}),lt=ut.slice(0),ut=[]):lt.forEach(function(t){return t.play()})}),ct.version="3.0.1",ct.speed=1,ct.running=ut,ct.remove=function(t){for(var e=Q(t),n=ut.length;n--;){var r=ut[n],a=r.animations,s=r.children;ht(e,a);for(var i=s.length;i--;){var u=s[i],l=u.animations;ht(e,l),l.length||u.children.length||s.splice(i,1)}a.length||s.length||r.pause()}},ct.get=B,ct.set=nt,ct.convertPx=A,ct.path=function(t,e){var n=m.str(t)?k(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:z(n),totalLength:Y(n)*(r/100)}}},ct.setDashoffset=function(t){var e=Y(t);return t.setAttribute("stroke-dasharray",e),e},ct.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?x(e.easing):null,a=e.grid,s=e.axis,i=e.from||0,u="first"===i,l="center"===i,o="last"===i,c=m.arr(t),h=c?parseFloat(t[0]):parseFloat(t),d=c?parseFloat(t[1]):0,p=D(c?t[1]:t)||0,f=e.start||0+(c?h:0),g=[],v=0;return function(t,e,m){if(u&&(i=0),l&&(i=(m-1)/2),o&&(i=m-1),!g.length){for(var w=0;w<m;w++){if(a){var y=l?(a[0]-1)/2:i%a[0],b=l?(a[1]-1)/2:Math.floor(i/a[0]),_=y-w%a[0],V=b-Math.floor(w/a[0]),x=Math.sqrt(_*_+V*V);"x"===s&&(x=-_),"y"===s&&(x=-V),g.push(x)}else g.push(Math.abs(i-w));v=Math.max.apply(Math,g)}r&&(g=g.map(function(t){return r(t/v)*v})),"reverse"===n&&(g=g.map(function(t){return s?t<0?-1*t:-t:Math.abs(v-t)}))}return f+(c?(d-h)/v:h)*(Math.round(100*g[e])/100)+p}},ct.timeline=function(t){void 0===t&&(t={});var e=ct(t);return e.duration=0,e.add=function(n,r){var a=ut.indexOf(e),s=e.children;function i(t){t.passThrough=!0}a>-1&&ut.splice(a,1);for(var u=0;u<s.length;u++)i(s[u]);var l=T(n,S(c,t));l.targets=l.targets||t.targets;var o=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=m.und(r)?o:F(r,o),i(e),e.seek(l.timelineOffset);var h=ct(l);i(h),s.push(h);var d=at(s,t);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},ct.easing=x,ct.penner=V,ct.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};class dt{constructor(){this.data=window.testData}getLayout(){let t=document.querySelector(".container");t.innerHTML="",t.innerHTML=function(t){let i="",u={};return 0==n.success?(i="Мне больше интересен футбол",u.src="img/football.png",u.src2x="img/football@2x.png",u.alt='"Мне больше интересен футбол"',u.myClassName='"test__box box box--zero"'):n.success<=3?(i='Читаю <a href="#">vc.ru</a> с экрана попутчика в метро',u.src="img/women.png",u.alt='"Читаю с экрана попутчика в метро"',u.myClassName='"test__box box box--three"'):n.success<=5?(i="Бизнес это интересно,<br> но где взять столько времени?",u.src="img/hand.png",u.alt='"Бизнес это интересно, но где взять столько времени?"',u.myClassName='"test__box box box--five"'):n.success<=7?(i='Читаю <a href="#">vc.ru</a> каждый день, но работать тоже нужно',u.src="img/man.png",u.alt='"Читаю vc.ru каждый день, но работать тоже нужно"',u.myClassName='"test__box box box--seven"'):(i='Я работаю<br> в редакции <a href="#">vc.ru</a>',u.src="img/editor.png",u.alt='"Я работаю в редакции vc.ru"',u.myClassName='"test__box box box--eight"'),`\n\n    <div class="test test--game">\n      <div class="test__wrap test__wrap--result">\n        <p class="test__level">${n.success} из ${e} правильных ответов</p>\n        <p class="test__result">${i}</p>\n        <ul class="test__socials socials">\n\n          <li class="socials__item">\n            <a class="socials__link" href="http://www.facebook.com" data-sharer="facebook" data-url=${r} target="_blank">\n              <span class="visually-hidden">fb</span>\n              <i class="socials__icon fab fa-facebook-f"></i>\n              <span class="socials__text">Поделиться</span>\n            </a>\n          </li>\n\n          <li class="socials__item">\n            <a class="socials__link" href="http://vk.com/" data-sharer="vk" data-title=${a} data-url=${r} target="_blank">\n              <span class="visually-hidden">vk</span>\n              <i class="socials__icon fab fa-vk"></i>\n            </a>\n          </li>\n\n          <li class="socials__item">\n            <a class="socials__link" href="https:/twitter.com" data-sharer="twitter" data-title=${a} data-url=${r} target="_blank" >\n              <span class="visually-hidden">twitter</span>\n              <i class="socials__icon fab fa-twitter"></i>\n            </a>\n          </li>\n        </ul>\n\n        <button class="test__repeat">\n          ${t.btnTitle}\n          <i class="test__refresh fas fa-redo"></i>\n        </button>\n      </div>\n\n      <div class=${s(u.myClassName)}>\n        <img class="box__img" src=${s(u.src)} alt=${s(u.alt)} data-rjs="3">\n      </div>\n    </div>\n  `}(this.data.result),ct({targets:".test__repeat",translateX:500})}init(){this.getLayout(),this.repeat();let t=document.querySelectorAll(".socials__link");window.Sharer.init();for(let e of t)e.addEventListener("click",t=>{t.preventDefault(),window.Sharer.init()})}repeat(e=1){document.querySelector(".test__repeat").addEventListener("click",r=>{return r.preventDefault(),n.success=0,n.mistakes=0,(new ft).init(t(e))})}}class pt{constructor(){this.data=window.testData}getLayout(e,n){let r=document.querySelector(".container");r.innerHTML="",r.innerHTML=function(t,e){let n="";for(let r in t.answers)t.answers[r].answer==e&&(n=t.answers[r].text);return`\n    <div class='test test--game'>\n      <div class="test__wrap">\n        <span class="test__level">${t.level}</span>\n        <p class="test__question test__question--anime">${t.question}</p>\n        <p class="test__answer">${e}</p>\n        <p class="test__text">${n} ${t.answers.commonText}</p>\n        <button class="test__next">\n          ${t.btnTitle} <span class="test__arrow"><i class="fas fa-arrow-right"></i></span>\n        </button\n      </div>\n  `}(this.data[t(n)],e),ct({targets:[".test__next",".test__text"],translateX:1e3,easing:"easeInOutExpo"})}getCondition(t){let e=document.querySelector(".test__answer");t?e.classList.add("test__answer--right"):e.classList.add("test__answer--loose")}init(n,r,a){this.getLayout(n,r),this.getCondition(a),document.querySelector(".test__next").addEventListener("click",n=>{if(n.preventDefault(),r==e){return(new dt).init()}return r++,(new ft).init(t(r))})}}class ft{constructor(){this.data=window.testData,this.isUserAnswerRight=!1}getLayout(t=1){document.querySelector(".container").innerHTML=function(t,n){return document.querySelector(".container").innerHTML="",`\n    <div class="test test--game">\n      <div class="test__wrap ">\n        <span class="test__level">${n}/${e}</span>\n        <p class="test__question">${t.question}</p>\n        <ul class="test__list">\n          <li class="test__item">\n            <a class="answer" href="#" onclick="return false">${t.answers.first.answer}</a>\n          </li>\n          <li class="test__item">\n            <a class="answer" href="#" onclick="return false">${t.answers.second.answer}</a>\n          </li>\n          <li class="test__item">\n            <a class="answer" href="#" onclick="return false">${t.answers.third.answer}</a>\n          </li>\n          <li class="test__item">\n            <a class="answer" href="#" onclick="return false">${t.answers.fourth.answer}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  `}(this.data[t],t),ct({targets:[".test__question",".test__list"],translateX:1e3,easing:"easeInOutExpo"})}init(e){this.getLayout(e),document.querySelector(".test__list").addEventListener("click",r=>{let a,s=r.target;if("A"==s.tagName)return s.textContent===this.data[t(e)].answers.right?(n.success+=1,this.isUserAnswerRight=!0,(a=new pt).init(s.textContent,e,this.isUserAnswerRight)):(n.mistakes+=1,(a=new pt).init(s.textContent,e,this.isUserAnswerRight))})}}let gt=new class{constructor(){this.data=window.testData}getLayout(){var t;document.querySelector(".container").innerHTML=`\n    <div class="test">\n\n      <div class="test__wrapper">\n        <span class="test__describe">${(t=this.data.startPage).describe}</span>\n        <h1 class="test__title">${t.title}</h1>\n        <p class="test__subtitle">${t.subtitle}</p>\n      </div>\n\n      <div>\n        <button class="test__start btn">${t.btnTitle}</button>\n      </div>\n\n    </div>\n\n    <div class="test__cash">\n      <img src='img/cash.png' alt='американские доллары' data-rjs="3">\n    </div>\n    <div class="test__face">\n      <img src='img/face.png' alt='профиль известного предпринимателя' data-rjs="3">\n    </div>\n    <div class="test__newspapper">\n      <img src='img/newspapper.png' alt='газета' data-rjs="3">\n    </div>\n  `}init(){this.getLayout(),document.querySelector(".test__start").addEventListener("click",e=>(e.preventDefault(),(new ft).init(t(1))))}};(new class{init(){return gt.init()}}).init()}();