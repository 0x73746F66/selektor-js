(function (window, undefined) {
//polyfill fixes for old browsers
if(!document.getElementsByClassName){document.getElementsByClassName=function(e){var t=[];var n=document.getElementsByTagName("*");var r=new RegExp("(^|s)"+e+"(s|$)");for(var i=0;i<n.length;i++){if(r.test(n[i].className)){t.push(n[i])}}return t}}
if(typeof Array.prototype.indexOf!=="function"){Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++){if(this[t]===e){return t}}return-1}}
if(!document.querySelector){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0});var Sizzle=function(e,t,n,r){n=n||[];t=t||document;var i=t;if(t.nodeType!==1&&t.nodeType!==9){return[]}if(!e||typeof e!=="string"){return n}var s,o,u,a,f,l,c,h,p=true,d=Sizzle.isXML(t),v=[],m=e;do{chunker.exec("");s=chunker.exec(m);if(s){m=s[3];v.push(s[1]);if(s[2]){a=s[3];break}}}while(s);if(v.length>1&&origPOS.exec(e)){if(v.length===2&&Expr.relative[v[0]]){o=posProcess(v[0]+v[1],t)}else{o=Expr.relative[v[0]]?[t]:Sizzle(v.shift(),t);while(v.length){e=v.shift();if(Expr.relative[e]){e+=v.shift()}o=posProcess(e,o)}}}else{if(!r&&v.length>1&&t.nodeType===9&&!d&&Expr.match.ID.test(v[0])&&!Expr.match.ID.test(v[v.length-1])){f=Sizzle.find(v.shift(),t,d);t=f.expr?Sizzle.filter(f.expr,f.set)[0]:f.set[0]}if(t){f=r?{expr:v.pop(),set:makeArray(r)}:Sizzle.find(v.pop(),v.length===1&&(v[0]==="~"||v[0]==="+")&&t.parentNode?t.parentNode:t,d);o=f.expr?Sizzle.filter(f.expr,f.set):f.set;if(v.length>0){u=makeArray(o)}else{p=false}while(v.length){l=v.pop();c=l;if(!Expr.relative[l]){l=""}else{c=v.pop()}if(c==null){c=t}Expr.relative[l](u,c,d)}}else{u=v=[]}}if(!u){u=o}if(!u){Sizzle.error(l||e)}if(toString.call(u)==="[object Array]"){if(!p){n.push.apply(n,u)}else if(t&&t.nodeType===1){for(h=0;u[h]!=null;h++){if(u[h]&&(u[h]===true||u[h].nodeType===1&&Sizzle.contains(t,u[h]))){n.push(o[h])}}}else{for(h=0;u[h]!=null;h++){if(u[h]&&u[h].nodeType===1){n.push(o[h])}}}}else{makeArray(u,n)}if(a){Sizzle(a,i,n,r);Sizzle.uniqueSort(n)}return n};Sizzle.uniqueSort=function(e){if(sortOrder){hasDuplicate=baseHasDuplicate;e.sort(sortOrder);if(hasDuplicate){for(var t=1;t<e.length;t++){if(e[t]===e[t-1]){e.splice(t--,1)}}}}return e};Sizzle.matches=function(e,t){return Sizzle(e,null,null,t)};Sizzle.matchesSelector=function(e,t){return Sizzle(t,null,null,[e]).length>0};Sizzle.find=function(e,t,n){var r;if(!e){return[]}for(var i=0,s=Expr.order.length;i<s;i++){var o,u=Expr.order[i];if(o=Expr.leftMatch[u].exec(e)){var a=o[1];o.splice(1,1);if(a.substr(a.length-1)!=="\\"){o[1]=(o[1]||"").replace(rBackslash,"");r=Expr.find[u](o,t,n);if(r!=null){e=e.replace(Expr.match[u],"");break}}}}if(!r){r=typeof t.getElementsByTagName!=="undefined"?t.getElementsByTagName("*"):[]}return{set:r,expr:e}};Sizzle.filter=function(e,t,n,r){var i,s,o=e,u=[],a=t,f=t&&t[0]&&Sizzle.isXML(t[0]);while(e&&t.length){for(var l in Expr.filter){if((i=Expr.leftMatch[l].exec(e))!=null&&i[2]){var c,h,p=Expr.filter[l],d=i[1];s=false;i.splice(1,1);if(d.substr(d.length-1)==="\\"){continue}if(a===u){u=[]}if(Expr.preFilter[l]){i=Expr.preFilter[l](i,a,n,u,r,f);if(!i){s=c=true}else if(i===true){continue}}if(i){for(var v=0;(h=a[v])!=null;v++){if(h){c=p(h,i,v,a);var m=r^!!c;if(n&&c!=null){if(m){s=true}else{a[v]=false}}else if(m){u.push(h);s=true}}}}if(c!==undefined){if(!n){a=u}e=e.replace(Expr.match[l],"");if(!s){return[]}break}}}if(e===o){if(s==null){Sizzle.error(e)}else{break}}o=e}return a};Sizzle.error=function(e){throw"Syntax error, unrecognized expression: "+e};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t==="string",r=n&&!rNonWord.test(t),i=n&&!r;if(r){t=t.toLowerCase()}for(var s=0,o=e.length,u;s<o;s++){if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1){}e[s]=i||u&&u.nodeName.toLowerCase()===t?u||false:u===t}}if(i){Sizzle.filter(t,e,true)}},">":function(e,t){var n,r=typeof t==="string",i=0,s=e.length;if(r&&!rNonWord.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:false}}}else{for(;i<s;i++){n=e[i];if(n){e[i]=r?n.parentNode:n.parentNode===t}}if(r){Sizzle.filter(t,e,true)}}},"":function(e,t,n){var r,i=done++,s=dirCheck;if(typeof t==="string"&&!rNonWord.test(t)){t=t.toLowerCase();r=t;s=dirNodeCheck}s("parentNode",t,i,e,r,n)},"~":function(e,t,n){var r,i=done++,s=dirCheck;if(typeof t==="string"&&!rNonWord.test(t)){t=t.toLowerCase();r=t;s=dirNodeCheck}s("previousSibling",t,i,e,r,n)}},find:{ID:function(e,t,n){if(typeof t.getElementById!=="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!=="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++){if(r[i].getAttribute("name")===e[1]){n.push(r[i])}}return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!=="undefined"){return t.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(rBackslash,"")+" ";if(s){return e}for(var o=0,u;(u=t[o])!=null;o++){if(u){if(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)){if(!n){r.push(u)}}else if(n){t[o]=false}}}return false},ID:function(e){return e[1].replace(rBackslash,"")},TAG:function(e,t){return e[1].replace(rBackslash,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){Sizzle.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0;e[3]=t[3]-0}else if(e[2]){Sizzle.error(e[0])}e[0]=done++;return e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(rBackslash,"");if(!s&&Expr.attrMap[o]){e[1]=Expr.attrMap[o]}e[4]=(e[4]||e[5]||"").replace(rBackslash,"");if(e[2]==="~="){e[4]=" "+e[4]+" "}return e},PSEUDO:function(e,t,n,r,i){if(e[1]==="not"){if((chunker.exec(e[3])||"").length>1||/^\w/.test(e[3])){e[3]=Sizzle(e[3],null,null,t)}else{var s=Sizzle.filter(e[3],t,n,true^i);if(!n){r.push.apply(r,s)}return false}}else if(Expr.match.POS.test(e[0])||Expr.match.CHILD.test(e[0])){return true}return e},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!Sizzle(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=Expr.filters[i];if(s){return s(e,n,t,r)}else if(i==="contains"){return(e.textContent||e.innerText||Sizzle.getText([e])||"").indexOf(t[3])>=0}else if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++){if(o[u]===e){return false}}return true}else{Sizzle.error(i)}},CHILD:function(e,t){var n=t[1],r=e;switch(n){case"only":case"first":while(r=r.previousSibling){if(r.nodeType===1){return false}}if(n==="first"){return true}r=e;case"last":while(r=r.nextSibling){if(r.nodeType===1){return false}}return true;case"nth":var i=t[2],s=t[3];if(i===1&&s===0){return true}var o=t[0],u=e.parentNode;if(u&&(u.sizcache!==o||!e.nodeIndex)){var a=0;for(r=u.firstChild;r;r=r.nextSibling){if(r.nodeType===1){r.nodeIndex=++a}}u.sizcache=o}var f=e.nodeIndex-s;if(i===0){return f===0}else{return f%i===0&&f/i>=0}}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=Expr.attrHandle[n]?Expr.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:!o?i&&r!==false:s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":false},POS:function(e,t,n,r){var i=t[2],s=Expr.setFilters[i];if(s){return s(e,n,t,r)}}}};var origPOS=Expr.match.POS,fescape=function(e,t){return"\\"+(t-0+1)};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape))}var makeArray=function(e,t){e=Array.prototype.slice.call(e,0);if(t){t.push.apply(t,e);return t}return e};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(e){makeArray=function(e,t){var n=0,r=t||[];if(toString.call(e)==="[object Array]"){Array.prototype.push.apply(r,e)}else{if(typeof e.length==="number"){for(var i=e.length;n<i;n++){r.push(e[n])}}else{for(;e[n];n++){r.push(e[n])}}}return r}}var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(e,t){if(e===t){hasDuplicate=true;return 0}if(!e.compareDocumentPosition||!t.compareDocumentPosition){return e.compareDocumentPosition?-1:1}return e.compareDocumentPosition(t)&4?-1:1}}else{sortOrder=function(e,t){if(e===t){hasDuplicate=true;return 0}else if(e.sourceIndex&&t.sourceIndex){return e.sourceIndex-t.sourceIndex}var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u){return siblingCheck(e,t)}else if(!o){return-1}else if(!u){return 1}while(a){i.unshift(a);a=a.parentNode}a=u;while(a){s.unshift(a);a=a.parentNode}n=i.length;r=s.length;for(var f=0;f<n&&f<r;f++){if(i[f]!==s[f]){return siblingCheck(i[f],s[f])}}return f===n?siblingCheck(e,s[f],-1):siblingCheck(i[f],t,1)};siblingCheck=function(e,t,n){if(e===t){return n}var r=e.nextSibling;while(r){if(r===t){return-1}r=r.nextSibling}return 1}}Sizzle.getText=function(e){var t="",n;for(var r=0;e[r];r++){n=e[r];if(n.nodeType===3||n.nodeType===4){t+=n.nodeValue}else if(n.nodeType!==8){t+=Sizzle.getText(n.childNodes)}}return t};(function(){var e=document.createElement("div"),t="script"+(new Date).getTime(),n=document.documentElement;e.innerHTML="<a name='"+t+"'/>";n.insertBefore(e,n.firstChild);if(document.getElementById(t)){Expr.find.ID=function(e,t,n){if(typeof t.getElementById!=="undefined"&&!n){var r=t.getElementById(e[1]);return r?r.id===e[1]||typeof r.getAttributeNode!=="undefined"&&r.getAttributeNode("id").nodeValue===e[1]?[r]:undefined:[]}};Expr.filter.ID=function(e,t){var n=typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}}n.removeChild(e);n=e=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){Expr.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++){if(n[i].nodeType===1){r.push(n[i])}}n=r}return n}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(e){return e.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=Sizzle,t=document.createElement("div"),n="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0){return}Sizzle=function(t,r,i,s){r=r||document;if(!s&&!Sizzle.isXML(r)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(o&&(r.nodeType===1||r.nodeType===9)){if(o[1]){return makeArray(r.getElementsByTagName(t),i)}else if(o[2]&&Expr.find.CLASS&&r.getElementsByClassName){return makeArray(r.getElementsByClassName(o[2]),i)}}if(r.nodeType===9){if(t==="body"&&r.body){return makeArray([r.body],i)}else if(o&&o[3]){var u=r.getElementById(o[3]);if(u&&u.parentNode){if(u.id===o[3]){return makeArray([u],i)}}else{return makeArray([],i)}}try{return makeArray(r.querySelectorAll(t),i)}catch(a){}}else if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){var f=r,l=r.getAttribute("id"),c=l||n,h=r.parentNode,p=/^\s*[+~]/.test(t);if(!l){r.setAttribute("id",c)}else{c=c.replace(/'/g,"\\$&")}if(p&&h){r=r.parentNode}try{if(!p||h){return makeArray(r.querySelectorAll("[id='"+c+"'] "+t),i)}}catch(d){}finally{if(!l){f.removeAttribute("id")}}}}return e(t,r,i,s)};for(var r in e){Sizzle[r]=e[r]}t=null})()}(function(){var e=document.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var n=!t.call(document.createElement("div"),"div"),r=false;try{t.call(document.documentElement,"[test!='']:sizzle")}catch(i){r=true}Sizzle.matchesSelector=function(e,i){i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(e)){try{if(r||!Expr.match.PSEUDO.test(i)&&!/!=/.test(i)){var s=t.call(e,i);if(s||!n||e.document&&e.document.nodeType!==11){return s}}}catch(o){}}return Sizzle(i,null,null,[e]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!=="undefined"&&!n){return t.getElementsByClassName(e[1])}};e=null})();function dirNodeCheck(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=false;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}if(a.nodeType===1&&!s){a.sizcache=n;a.sizset=o}if(a.nodeName.toLowerCase()===t){f=a;break}a=a[e]}r[o]=f}}}function dirCheck(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=false;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}if(a.nodeType===1){if(!s){a.sizcache=n;a.sizset=o}if(typeof t!=="string"){if(a===t){f=true;break}}else if(Sizzle.filter(t,[a]).length>0){f=a;break}}a=a[e]}r[o]=f}}}if(document.documentElement.contains){Sizzle.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):true)}}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}}else{Sizzle.contains=function(){return false}}Sizzle.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false};var posProcess=function(e,t){var n,r=[],i="",s=t.nodeType?[t]:t;while(n=Expr.match.PSEUDO.exec(e)){i+=n[0];e=e.replace(Expr.match.PSEUDO,"")}e=Expr.relative[e]?e+"*":e;for(var o=0,u=s.length;o<u;o++){Sizzle(e,s[o],r)}return Sizzle.filter(i,r)};document.querySelectorAll=function(t){return Sizzle(t,this)};document.querySelector=function(t){return document.querySelectorAll.call(this,t)[0]||null}}
    var $ = function (selector) {
        if ( window === this ) {
            return new $(selector);
        }
        if ( typeof selector === 'object' ) {
            if ( typeof selector.about === 'undefined' ) {
                this[0] = selector;
                this.length = 1;
                return this;
            }
        }
        var result = document.querySelectorAll(selector);
        if ( result.length > 0 ) {
            for (var i = 0; i < result.length; i++) {
                this[i] = result[i];
            }
            this.length = result.length;
        }
        return this;
    };
    $.fn = $.prototype = {
        about: {
            Library: "SelektorJS",
            Version: 0.6,
            Author: "Christopher D. Langton",
            Website: "http:\/\/chrisdlangton.com",
            Created: "2013-03-19",
            Updated: "2013-03-21"
        },
        addClass: function (c) {
            c = c.split(' ');
            for (var i = 0; i < c.length; i++) {
                for (var t = 0; t < this.length; t++) {
                    if (!$(this[t]).hasClass(c[i])) {
                        this[t].className = this[t].className !== '' ? (this[t].className + ' ' + c[i]) : c[i];
                    }
                }
            }
            return this;
        },
        hasClass: function (c) {
            for (var t = 0; t < this.length; t++) {
                var r = true,
                    e = this[t].className.split(' ');
                c = c.split(' ');
                for (var i = 0; i < c.length; i++) {
                    if (e.indexOf(c[i]) === -1) {
                        r = false;
                    }
                }
            }
            return r;
        },
        removeClass: function (c) {
            for (var t = 0; t < this.length; t++) {
                var e = this[t].className.split(' ');
                c = c.split(' ');
                for (var i = 0; i < c.length; i++) {
                    if ($(this[t]).hasClass(c[i])) {
                        e.splice(e.indexOf(c[i]), 1);
                    }
                }
                this[t].className = e.join(' ');
            }
            return this;
        },
        toggleClass: function (c) {
            c = c.split(' ');
            for (var i = 0; i < c.length; i++) {
                for (var t = 0; t < this.length; t++) {
                    if ($(this[t]).hasClass(c[i])) {
                        $(this[t]).removeClass(c[i]);
                    } else {
                        $(this[i]).addClass(c[i]);
                    }
                }
            }
            return this;
        },
        has: function (attr, value) {
            if (typeof attr === 'undefined' || attr === 'class') { return {}; }
            for (var i = 0; i < this.length; i++) {
                if (this[i].hasAttribute(attr)) {
                    if (typeof value !== 'undefined') {
                        if (this[i].getAttribute(attr) !== value) {
                            delete(this[i]);
                        }
                    }
                } else {
                    delete(this[i]);
                }
            }
			delete(this.length);
            return this;
        },
        not: function (attr, value) {
            if (typeof attr === 'undefined') { return {}; }
            for (var i = 0; i < this.length; i++) {
                if (this[i].hasAttribute(attr)) {
                    if (typeof value !== 'undefined') {
                        if (this[i].getAttribute(attr) === value) {
                            delete(this[i]);
                        }
                    } else {
                        delete(this[i]);
                    }
                }
            }
			delete(this.length);
            return this;
        },
        each: function (fn, scope) {
            for (var key in this) {
                delete(this.length);
                if ( this.hasOwnProperty(key) )
                fn.call(scope, this[key], key, this);
            }
        },
        on: function ( type, fn ) {
            if (type === 'ready') {
                handle = setInterval(function(){
                    if ( document.readyState === "complete" ) {
                        clearInterval(handle);
                        fn();
                    }
                },10);
                return this;
            } else {
                for (var i = 0; i < this.length; i++) {
                    if ( this[i].attachEvent ) {
                        this[i]['e'+type+fn] = fn;
                        this[i][type+fn] = function(){this[i]['e'+type+fn]( window.event );};
                        this[i].attachEvent( 'on'+type, this[i][type+fn] );
                    } else {
                        this[i].addEventListener( type, fn, false );
                    }
                }
            }
        },
        view: function () {
            this[0].scrollIntoView(true);
            return this;
        },
        attr: function (attribute, value) {
            if (typeof attribute !== 'undefined' && typeof value !== 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this[i].setAttribute(attribute, value);
                }
            } else if (typeof attribute !== 'undefined' && typeof value === 'undefined') {
                return this[0].getAttribute(attribute);
            }
            return this;
        },
        html: function (replacement) {
            if ( typeof replacement === 'undefined' ) {
                for (var i = 0; i < this.length; i++) {
                    return this[i].innerHTML;
                }
                return this;
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i].innerHTML = replacement;
                }
                return this;
            }
        },
        val: function (replacement) {
            if ( typeof replacement === 'undefined' ) {
                for (var i = 0; i < this.length; i++) {
                    return this[i].value ;
                }
                return this;
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i].value = replacement;
                }
                return this;
            }
        },
        enable: function () {
            for (var i = 0; i < this.length; i++) {
                if (this[i].tagName && (
                    this[i].tagName.toLowerCase() === "button" || 
                    this[i].tagName.toLowerCase() === "input" || 
                    this[i].tagName.toLowerCase() === "optgroup" || 
                    this[i].tagName.toLowerCase() === "option" || 
                    this[i].tagName.toLowerCase() === "select" || 
                    this[i].tagName.toLowerCase() === "textarea" 
                    ) )
                {
                    this[i].disabled = false;
                } else {
                    var inputs = this[i].getElementsByTagName("input");
                    for (var t = 0; t < inputs.length; t++) {
                        inputs[t].disabled = false;
                    }
                    var selects = this[i].getElementsByTagName("select");
                    for (var t = 0; t < selects.length; t++) {
                        selects[t].disabled = false;
                    }
                    var textareas = this[i].getElementsByTagName("textarea");
                    for (var t = 0; t < textareas.length; t++) {
                        textareas[t].disabled = false;
                    }
                    var buttons = this[i].getElementsByTagName("button");
                    for (var t = 0; t < buttons.length; t++) {
                        buttons[t].disabled = false;
                    }
                    var options = this[i].getElementsByTagName("option");
                    for (var t = 0; t < options.length; t++) {
                        options[t].disabled = false;
                    }
                    var options = this[i].getElementsByTagName("optgroup");
                    for (var t = 0; t < options.length; t++) {
                        options[t].disabled = false;
                    }
                }
            }
            return this;
        },
        disable: function () {
            for (var i = 0; i < this.length; i++) {
                if (this[i].tagName && (
                    this[i].tagName.toLowerCase() === "button" || 
                    this[i].tagName.toLowerCase() === "input" || 
                    this[i].tagName.toLowerCase() === "optgroup" || 
                    this[i].tagName.toLowerCase() === "option" || 
                    this[i].tagName.toLowerCase() === "select" || 
                    this[i].tagName.toLowerCase() === "textarea" 
                    ) )
                {
                    this[i].disabled = true;
                } else {
                    var inputs = this[i].getElementsByTagName("input");
                    for (var t = 0; t < inputs.length; t++) {
                        inputs[t].disabled = true;
                    }
                    var selects = this[i].getElementsByTagName("select");
                    for (var t = 0; t < selects.length; t++) {
                        selects[t].disabled = true;
                    }
                    var textareas = this[i].getElementsByTagName("textarea");
                    for (var t = 0; t < textareas.length; t++) {
                        textareas[t].disabled = true;
                    }
                    var buttons = this[i].getElementsByTagName("button");
                    for (var t = 0; t < buttons.length; t++) {
                        buttons[t].disabled = true;
                    }
                    var options = this[i].getElementsByTagName("option");
                    for (var t = 0; t < options.length; t++) {
                        options[t].disabled = true;
                    }
                    var options = this[i].getElementsByTagName("optgroup");
                    for (var t = 0; t < options.length; t++) {
                        options[t].disabled = true;
                    }
                }
            }
            return this;
        },
        remove: function (preserveChildren) {
			var elem;
			if (typeof preserveChildren !== 'undefined' && preserveChildren === true) {
				for (var i = 0; i < this.length; i++) {
					this[i].insertAdjacentHTML( 'beforebegin', this[i].innerHTML );
					(elem = this[i]).parentNode.removeChild(elem);
				}
			} else {
				for (var i = 0; i < this.length; i++) {
					( elem = this[i]).parentNode.removeChild(elem);
				}
            }
            return this;
        },
        empty: function () {
            for (var i = 0; i < this.length; i++) {
                if (this[i].innerHTML)
                this[i].innerHTML = "";
                if (this[i].value)
                this[i].value = "";
            }
            return this;
        },
        append: function (elems) {
            if (typeof elems !== 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('beforeend', elems);
                }
            }
            return this;
        },
        prepend: function (elems) {
            if (typeof elems !== 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('afterbegin', elems);
                }
            }
            return this;
        },
        before: function (elems) {
            if (typeof elems !== 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('beforebegin', elems);
                }
            }
            return this;
        },
        after: function (elems) {
            if (typeof elems !== 'undefined') {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('afterend', elems);
                }
            }
            return this;
        },
        hide: function(fade) {
            for (var i = 0; i < this.length; i++) {
                if (typeof fade === 'undefined') {
                    this[i].style.display = 'none';
                } else if (fade) {
                    $(this[i]).fadeOut();
                }
            }
            return this;
        },
        show: function(fade) {
            for (var i = 0; i < this.length; i++) {
                if (typeof fade === 'undefined') {
                    this[i].style.display = 'inherit';
					if (this[i].style.opacity < 1 && this[i].style.opacity !== '') {
						this[i].style.opacity = '';
					}
                } else if (fade) {
                    $(this[i]).fadeIn();
                }
            }
            return this;
        },
        fadeIn: function (speed) {            
            var ele = this[0];
            if(typeof speed === 'undefined'){
                speed = 1000;
            }
            if(ele.style.display === 'none'){
                var current_opacity = 0.05;
                ele.style.opacity = current_opacity;
                ele.style.display = 'inherit';
                handle = setInterval(function(){              
                    current_opacity += 0.05;
                    ele.style.opacity = current_opacity;
                    if(current_opacity >= 1){
						ele.style.opacity = '';
                        clearInterval(handle);
                    }
                }, speed/20);
            }
            return this;
        },
        fadeOut: function (speed) {
            var ele = this[0];
            if(typeof speed === 'undefined'){
                speed = 1000;
            }
            if(ele.style.display !== 'none'){
                var current_opacity = 1;
                handle = setInterval(function(){
                    current_opacity -= 0.05;
                    ele.style.opacity = current_opacity;
                    if(current_opacity <= 0){
                        clearInterval(handle);
                        ele.style.display = 'none';
                    }
                }, speed/20);
            }
            return this;
        },
        fadeTo: function (fade,speed,step) {
			var ele = this[0];
			if (typeof fade === 'undefined') {
				var fade = 0.5;
			}
			if (typeof speed === 'undefined') {
				var speed = 1000;
			}
			if (typeof step === 'undefined') {
				var step = 0.05;
			}
			if (ele.style.display !== 'none') {
				var current_opacity = 1;
				handle = setInterval(function(){
					current_opacity -= step;
					ele.style.opacity = current_opacity;
					if(current_opacity < fade+0.02 && current_opacity > fade-0.02){
						clearInterval(handle);
					}
				}, speed/20);
			} else {
				var current_opacity = step;
                ele.style.opacity = current_opacity;
				ele.style.display = 'inherit';
                handle = setInterval(function() {
                    current_opacity += step;
                    ele.style.opacity = current_opacity;
                    if(current_opacity < fade+0.02 && current_opacity > fade-0.02){
						clearInterval(handle);
					}
                }, speed/20);
			}
            return this;
        },
        css: function (property, value) {
            if (typeof property !== 'undefined' && value !== null) {
                for (var i = 0; i < this.length; i++) {
                    this[i].style[property] = value;
                }
            }
            return this;
        },
        center: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.textAlign = 'center';
                this[i].style.verticalAlign = 'middle';
            }
            return this;
        }
    };
    window.$ = $;
	/* Add a plugin
	$.fn.red = function() {
		for (var i = 0; i &lt; this.length; i++) {
			this[i].style.color = 'red';
		}
		return this;
	} */
	/* addEvent
	$('body').on('mousemove',function(event){
	  $('#x').html('x = ' + event.x);
	  $('#y').html('y = ' + event.y);
	}); */
	var $jsonStart = function (fn) {
        if ( window === this ) {
            return new $jsonStart(fn);
        }
		window.jsonStart = fn;
		return;
	};
	window.$jsonStart = $jsonStart;
	var $jsonEnd = function (fn) {
        if ( window === this ) {
            return new $jsonEnd(fn);
        }
		window.jsonEnd = fn;
		return;
	};
	window.$jsonEnd = $jsonEnd;
	var $json = function (settings) {
		if ( window === this ) {
			return new $json(settings);
		}
		if (typeof settings.url === 'undefined') { return ; }
		if (typeof settings.data === 'undefined') { return ; }
		if (typeof settings.method === 'undefined') { settings.method = 'GET'; } else { settings.method = settings.method.toUpperCase(); }
		this.serialiseObject = function (obj) {
			var pairs = [];
			for (var prop in obj) {
				if (!obj.hasOwnProperty(prop)) {
					continue;
				}
				pairs.push(prop + '=' + encodeURIComponent(obj[prop]));
			}
			return pairs.join('&');
		};
		if (settings.method === 'GET' && typeof settings.json !== 'undefined' && settings.json === true && typeof settings.data === 'string') {
			settings.data = JSON.parse(settings.data);
		}
		if (typeof settings.data === 'object') {
			settings.data = this.serialiseObject(settings.data);
		}
		if (typeof settings.before === 'function') {
			typeof settings.data === 'undefined' ? settings.before({url:settings.url,method:settings.method}) : settings.before({url:settings.url,data:settings.data,method:settings.method}) ;
		}
		if (typeof jsonStart !== 'undefined' && typeof jsonStart === 'function') {
			jsonStart();
		}
		var httpRequest;
		if (window.XMLHttpRequest) { // Mozilla, Safari, ...
			httpRequest = new XMLHttpRequest();
		} else {
			if (window.ActiveXObject) { // IE
				try {
					httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try {
						httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}
		}
		if (!httpRequest) {
			return ;
		}
		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState === 4) {
				if (typeof settings.status !== 'undefined' && typeof settings.status[httpRequest.status] === 'function') {
					settings.status[httpRequest.status](httpRequest);
				}
				if (httpRequest.status === 200) {
					if (typeof settings.success !== 'undefined' && typeof settings.success === 'function') {
						settings.success(JSON.parse(httpRequest.responseText));
					}
				} else {
					if (typeof settings.error !== 'undefined' && typeof settings.error === 'function') {
						settings.error(httpRequest);
					}						
				}
				if (typeof settings.done !== 'undefined' && typeof settings.done === 'function') {
					settings.done(httpRequest);
				}						
				if (typeof jsonEnd !== 'undefined' && typeof jsonEnd === 'function') {
					jsonEnd();
				}
			}
		};
		if (typeof settings.data === 'string' && settings.method === 'GET') {
			httpRequest.open('GET', settings.url + '?' + settings.data, true);
		} else {
			httpRequest.open(settings.method, settings.url, true);
		}
		typeof settings.data !== 'undefined' ? httpRequest.send(settings.data) : httpRequest.send(null) ;
		return;
	};
	window.$json = $json;
	/* EXAMPLE USE
	$json({
		url:'/api/test/',
		// data as an object to be serialised;
		data:{some:'prop',more:'props'},
		// or as a serialised string
		data:'some=prop&more=props',
		// or as json
		data:'{"some":"prop","more":"props"}',
		json:true, //only use this if the data is JSON format
		method:'GET',
		before: function(opts){console.log(opts);},
		success: function(json){console.log(json);},
		status: {
			404:function(resp){console.log(resp);},
			500:function(resp){console.log(resp);}
			},
		error: function(resp){console.log(resp.status);},
		done: function(resp){console.log(resp.responseText);}
	}); */
	var $bind = function (binder,data,replace) {
        var dtf = function () {
            var	t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                tz = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                tz2 = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) val = "0" + val;
                    return val;
                };

            // static closure
            return function (date, mask) {
                var utc;
                var newObj = dtf;

                if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }

                date = date ? new Date(date) : new Date;
                if (isNaN(date)) throw SyntaxError("invalid date");

                mask = String(newObj.masks[mask] || mask || newObj.masks["default"]);

                // UTC
                if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
                }

                var	_ = utc ? "getUTC" : "get",
                    d = date[_ + "Date"](),
                    D = date[_ + "Day"](),
                    m = date[_ + "Month"](),
                    y = date[_ + "FullYear"](),
                    H = date[_ + "Hours"](),
                    M = date[_ + "Minutes"](),
                    s = date[_ + "Seconds"](),
                    L = date[_ + "Milliseconds"](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d:    d,
                        dd:   pad(d),
                        ddd:  newObj.i18n.days[D],
                        dddd: newObj.i18n.days[D + 7],
                        m:    m + 1,
                        mm:   pad(m + 1),
                        mmm:  newObj.i18n.months[m],
                        mmmm: newObj.i18n.months[m + 12],
                        yy:   String(y).slice(2),
                        yyyy: y,
                        h:    H % 12 || 12,
                        hh:   pad(H % 12 || 12),
                        H:    H,
                        HH:   pad(H),
                        M:    M,
                        MM:   pad(M),
                        s:    s,
                        ss:   pad(s),
                        l:    pad(L, 3),
                        L:    pad(L > 99 ? Math.round(L / 10) : L),
                        t:    H < 12 ? "a"  : "p",
                        tt:   H < 12 ? "am" : "pm",
                        T:    H < 12 ? "A"  : "P",
                        TT:   H < 12 ? "AM" : "PM",
                        Z:    utc ? "UTC" : (String(date).match(tz) || [""]).pop().replace(tz2, ""),
                        o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

                return mask.replace(t, function ($0) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                });
            };
        }();
        dtf.masks = {
            "default":      "ddd mmm dd yyyy HH:MM:ss",
            shortDate:      "m/d/yy",
            mediumDate:     "mmm d, yyyy",
            longDate:       "mmmm d, yyyy",
            fullDate:       "dddd, mmmm d, yyyy",
            shortTime:      "h:MM TT",
            mediumTime:     "h:MM:ss TT",
            longTime:       "h:MM:ss TT Z",
            isoDate:        "yyyy-mm-dd",
            isoTime:        "HH:MM:ss",
            isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        dtf.i18n = {
            days: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            months: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };
/*  EXAMPLES
    this.dtf(date,"m/dd/yy");
    // Returns, e.g., 6/09/07
     
    // Can also be used as a standalone function
    this.dtf(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    // Saturday, June 9th, 2007, 5:46:21 PM
     
    // You can use one of several named masks
    this.dtf(date, "isoDateTime");
    // 2007-06-09T17:46:21
     
    // When using the standalone this.dtf function,
    // you can also provide the date as a string
    this.dtf("Jun 9 2007", "fullDate");
    // Saturday, June 9, 2007
     
    // Note that if you don't include the mask argument,
    // this.dtf.masks.default is used
    this.dtf(date);
    // Sat Jun 09 2007 17:46:21
     
    // ...Or add the prefix "UTC:" to your mask.
    this.dtf(date, "UTC:h:MM:ss TT Z");
    10:46:21 PM UTC */
		if (typeof binder !== 'string') { return ; }
		if (typeof data === 'string') { data = JSON.parse(data); }
		if (typeof data !== 'object') { return ; }
        if ( window === this ) {
            return new $bind(binder,data,replace);
        }
        this.data = data;
		if (typeof window.clone === 'undefined') {
			clone = {}; clone[binder] = $('[each="'+binder+'"]').html();
			$('[each="'+binder+'"]').empty();
		} else if (typeof clone[binder] === 'undefined') {
			clone[binder] = $('[each="'+binder+'"]').html();
		}
		if (typeof replace !== 'undefined' && replace === true) {
			$('[each="'+binder+'"]').empty();
		}
		for (var j = 0; j < data.length; j++) {
			$('[each="'+binder+'"]').append(clone[binder]);
			var bind = {}, i = 0;
			$('[binder="'+binder+'"] *').each(function(child){
				if ($(child).attr('bind')) {
					bind[i] = JSON.parse($(child).attr('bind'));
					if(bind[i].img) {
                        if (bind[i].imgClass) {
                            $(child).append('<img class="' + bind[i].imgClass + '" src="' + data[j][bind[i].img] + '" />');
                        } else {
                            $(child).append('<img src="' + data[j][bind[i].img] + '" />');
                        }
                    }
					if(bind[i].href) {
                        if (bind[i].hrefClass) {
                            if (bind[i].hrefText) {
                                $(child).append('<a class="' + bind[i].hrefClass + '" href="' + data[j][bind[i].href] + '" target="_blank" >' + bind[i].hrefText + '</a>');
                            } else {
                                $(child).append('<a class="' + bind[i].hrefClass + '" href="' + data[j][bind[i].href] + '" target="_blank" >' + data[j][bind[i].href] + '</a>');
                            }
                        } else {
                            if (bind[i].hrefText) {
                                $(child).append('<a href="' + data[j][bind[i].href] + '" target="_blank" >' + bind[i].hrefText + '</a>');
                            } else {
                                $(child).append('<a href="' + data[j][bind[i].href] + '" target="_blank" >' + data[j][bind[i].href] + '</a>');
                            }
                        }
                    }
					if(bind[i].text) {
                        if (bind[i].textClass) {
                            $(child).append('<span class="' + bind[i].textClass + '">' + data[j][bind[i].text] + '</span>');
                        } else {
                            $(child).append(data[j][bind[i].text]);
                        }
                    }
					if(bind[i].datetime) {
                        var newDatetime = new Date( data[j][bind[i].datetime] );
                        if(bind[i].mask) { 
                            var datetimeMasked = dtf( newDatetime , bind[i].mask );
                        } else {
                            var datetimeMasked = dtf( newDatetime );
                        }
                        if (bind[i].datetimeClass) {
                            $(child).append('<span class="' + bind[i].datetimeClass + '">' + datetimeMasked + '</span>');
                        } else {
                            $(child).append( datetimeMasked );
                        }
                    }
					if(bind[i].formatNumber && !isNaN(data[j][bind[i].formatNumber])){
                        var x = data[j][bind[i].formatNumber].split('.');
                        var x1 = x[0];
                        var x2 = x.length > 1 ? '.' + x[1] : '';
                        var rgx = /(\d+)(\d{3})/;
                        while (rgx.test(x1)) {
                            x1 = x1.replace(rgx, '$1' + ',' + '$2');
                        }
                        var formatted = x1 + x2;
                        if (bind[i].formatNumberClass) {
                            $(child).append('<span class="' + bind[i].formatNumberClass + '">' + formatted + '</span>');
                        } else {
                            $(child).append(formatted);
                        }
                    }
					if(bind[i].now){
						var today = new Date();
						var dd = today.getDate();
						var mm = today.getMonth()+1;//January is 0!
						var yyyy = today.getFullYear();
						var hours = today.getHours();
						var minutes = today.getMinutes();
						var seconds = today.getSeconds();
						if(dd < 10){dd='0'+dd;}
						if(mm < 10){mm='0'+mm;}
						if(bind[i].now === 'datetime'){
							$(child).append(yyyy+'-'+mm+'-'+dd+' '+hours+':'+minutes+':'+seconds);
						} else if(bind[i].now === 'short'){
							$(child).append(yyyy+'-'+mm+'-'+dd+' '+hours+':'+minutes);
						} else if(bind[i].now === 'date'){
							$(child).append(yyyy+'-'+mm+'-'+dd);
						} else if(bind[i].now === 'day'){
							$(child).append(dd);
						} else if(bind[i].now === 'month'){
							$(child).append(mm);
						} else if(bind[i].now === 'year'){
							$(child).append(yyyy);
						} else if(bind[i].now === 'time'){
							$(child).append(hours+':'+minutes+':'+seconds);
						} else if(bind[i].now === 'minutes'){
							$(child).append(hours+':'+minutes);
						}
					}
					i++;
					child.removeAttribute('bind');
				}
			});
		}
		return this;
	};
	window.$bind = $bind;
	/* EXAMPLE
		<table binder="feed" cellspacing="1" cellpadding="2">
	        <thead>
		        <tr>
			        <th>id</th>
			        <th>dtcreated</th>
			        <th class="desc" onClick="sort(this);return false;">tw_created_at</th>
			        <th>tw_id</th>
			        <th>tw_text</th>
			        <th>tw_screen_name</th>
			        <th>tw_profile_pic</th>
			        <th>tw_user_id</th>
			        <th>tw_user_name</th>
		        </tr>
	        </thead>

	        <tbody each="feed">
	            <tr>
	                <td bind='{"text":"id","textClass":"center"}'></td>
	                <td bind='{"datetime":"dtcreated","mask":"dddd, mmmm dS, yyyy, h:MM:ss TT","datetimeClass":"center"}'></td>
	                <td bind='{"text":"tw_created_at"}'></td>
	                <td bind='{"formatNumber":"tw_id","formatNumberClass":"center"}'></td>
	                <td bind='{"text":"tw_text"}'></td>
	                <td bind='{"img":"tw_profile_pic","imgClass":"pip","text":"tw_screen_name"}'></td>
	                <td bind='{"href":"tw_profile_pic","hrefText":"Pic URL","hrefClass":"bold"}'></td>
	                <td bind='{"text":"tw_user_id"}'></td>
	                <td bind='{"text":"tw_user_name","textClass":"center"}'></td>
	            </tr>
	        </tbody>
        </table>
	var json = '[{"id":"1","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:34:39","tw_id":"313856011721142272","tw_text":"SEO - RSS Feed Ping to Search Engine\n<a target=\"_blank\" href=\"http:\/\/t.co\/U8xEga2NOP\">http:\/\/t.co\/U8xEga2NOP<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"2","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:34:13","tw_id":"313855904640557056","tw_text":"SEO - Sitemap Ping to Search Engines\n<a target=\"_blank\" href=\"http:\/\/t.co\/VnDbhWLhNf\">http:\/\/t.co\/VnDbhWLhNf<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"3","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:33:57","tw_id":"313855838559301632","tw_text":"Online Javascript Minification Tool\n<a target=\"_blank\" href=\"http:\/\/t.co\/S8mC9yQ3gL\">http:\/\/t.co\/S8mC9yQ3gL<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"4","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:33:28","tw_id":"313855715246735360","tw_text":"Social Markup JavaScript Library for Single-page Apps\n<a target=\"_blank\" href=\"https:\/\/t.co\/xwKmkmlFrW\">https:\/\/t.co\/xwKmkmlFrW<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"5","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:33:00","tw_id":"313855599093874688","tw_text":"PagesJS JavaScript Micro-Framework for SPAs\n<a target=\"_blank\" href=\"https:\/\/t.co\/54k5Ze2OkP\">https:\/\/t.co\/54k5Ze2OkP<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"6","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-03-19 03:32:30","tw_id":"313855472522383360","tw_text":"SelektorJS - JavaScript Selector and Prototype extender\n<a target=\"_blank\" href=\"https:\/\/t.co\/awnq0xk11j\">https:\/\/t.co\/awnq0xk11j<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"7","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-02-20 23:55:35","tw_id":"304378798412017664","tw_text":"What are Single-page Apps SPAs and how to choose a Framework: <a target=\"_blank\" href=\"http:\/\/t.co\/DDmV76qb4e\">http:\/\/t.co\/DDmV76qb4e<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"8","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-02-05 06:15:24","tw_id":"298676176057167872","tw_text":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a> - Page.js A small JavaScript Framework for single-page Apps: <a target=\"_blank\" href=\"http:\/\/t.co\/Z5HbIqHR\">http:\/\/t.co\/Z5HbIqHR<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"9","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-02-02 01:13:06","tw_id":"297512938359631872","tw_text":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/Codewiz_biz\" targe=\"_blank\">@Codewiz_biz<\/a> - CSS3 Rotate for IE, FF, Chrome, Safari, and Opera: <a target=\"_blank\" href=\"http:\/\/t.co\/YyzKc1ry\">http:\/\/t.co\/YyzKc1ry<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"},{"id":"10","dtcreated":"2013-03-22 07:16:55","tw_created_at":"2013-01-22 23:24:03","tw_id":"293861615911194625","tw_text":"<a target=\"_blank\" href=\"http:\/\/t.co\/nWDiKrsk\">http:\/\/t.co\/nWDiKrsk<\/A> - Guide to building a REST API with PHP and Apache: <a target=\"_blank\" href=\"http:\/\/t.co\/PrMO0iPN\">http:\/\/t.co\/PrMO0iPN<\/A>","tw_screen_name":"<a class=\"tw_handle\" href=\"https:\/\/twitter.com\/codewiz_biz\" targe=\"_blank\">@codewiz_biz<\/a>","tw_profile_pic":"https:\/\/si0.twimg.com\/profile_images\/2933830717\/bcef4263a1d614e3a388fe4f3ee6cb69_normal.png","tw_user_id":"990106033","tw_user_name":"Codewiz.biz"}]';
	$bind('feed',json); */
})(window);