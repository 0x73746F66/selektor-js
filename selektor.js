(function (window, undefined) {
//fixes for old browsers
if(!document.getElementsByClassName){document.getElementsByClassName=function(e){var t=[];var n=document.getElementsByTagName("*");var r=new RegExp("(^|s)"+e+"(s|$)");for(var i=0;i<n.length;i++){if(r.test(n[i].className)){t.push(n[i])}}return t}}
if(typeof Array.prototype.indexOf!=="function"){Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++){if(this[t]===e){return t}}return-1}}
if(!document.querySelector){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0});var Sizzle=function(e,t,n,r){n=n||[];t=t||document;var i=t;if(t.nodeType!==1&&t.nodeType!==9){return[]}if(!e||typeof e!=="string"){return n}var s,o,u,a,f,l,c,h,p=true,d=Sizzle.isXML(t),v=[],m=e;do{chunker.exec("");s=chunker.exec(m);if(s){m=s[3];v.push(s[1]);if(s[2]){a=s[3];break}}}while(s);if(v.length>1&&origPOS.exec(e)){if(v.length===2&&Expr.relative[v[0]]){o=posProcess(v[0]+v[1],t)}else{o=Expr.relative[v[0]]?[t]:Sizzle(v.shift(),t);while(v.length){e=v.shift();if(Expr.relative[e]){e+=v.shift()}o=posProcess(e,o)}}}else{if(!r&&v.length>1&&t.nodeType===9&&!d&&Expr.match.ID.test(v[0])&&!Expr.match.ID.test(v[v.length-1])){f=Sizzle.find(v.shift(),t,d);t=f.expr?Sizzle.filter(f.expr,f.set)[0]:f.set[0]}if(t){f=r?{expr:v.pop(),set:makeArray(r)}:Sizzle.find(v.pop(),v.length===1&&(v[0]==="~"||v[0]==="+")&&t.parentNode?t.parentNode:t,d);o=f.expr?Sizzle.filter(f.expr,f.set):f.set;if(v.length>0){u=makeArray(o)}else{p=false}while(v.length){l=v.pop();c=l;if(!Expr.relative[l]){l=""}else{c=v.pop()}if(c==null){c=t}Expr.relative[l](u,c,d)}}else{u=v=[]}}if(!u){u=o}if(!u){Sizzle.error(l||e)}if(toString.call(u)==="[object Array]"){if(!p){n.push.apply(n,u)}else if(t&&t.nodeType===1){for(h=0;u[h]!=null;h++){if(u[h]&&(u[h]===true||u[h].nodeType===1&&Sizzle.contains(t,u[h]))){n.push(o[h])}}}else{for(h=0;u[h]!=null;h++){if(u[h]&&u[h].nodeType===1){n.push(o[h])}}}}else{makeArray(u,n)}if(a){Sizzle(a,i,n,r);Sizzle.uniqueSort(n)}return n};Sizzle.uniqueSort=function(e){if(sortOrder){hasDuplicate=baseHasDuplicate;e.sort(sortOrder);if(hasDuplicate){for(var t=1;t<e.length;t++){if(e[t]===e[t-1]){e.splice(t--,1)}}}}return e};Sizzle.matches=function(e,t){return Sizzle(e,null,null,t)};Sizzle.matchesSelector=function(e,t){return Sizzle(t,null,null,[e]).length>0};Sizzle.find=function(e,t,n){var r;if(!e){return[]}for(var i=0,s=Expr.order.length;i<s;i++){var o,u=Expr.order[i];if(o=Expr.leftMatch[u].exec(e)){var a=o[1];o.splice(1,1);if(a.substr(a.length-1)!=="\\"){o[1]=(o[1]||"").replace(rBackslash,"");r=Expr.find[u](o,t,n);if(r!=null){e=e.replace(Expr.match[u],"");break}}}}if(!r){r=typeof t.getElementsByTagName!=="undefined"?t.getElementsByTagName("*"):[]}return{set:r,expr:e}};Sizzle.filter=function(e,t,n,r){var i,s,o=e,u=[],a=t,f=t&&t[0]&&Sizzle.isXML(t[0]);while(e&&t.length){for(var l in Expr.filter){if((i=Expr.leftMatch[l].exec(e))!=null&&i[2]){var c,h,p=Expr.filter[l],d=i[1];s=false;i.splice(1,1);if(d.substr(d.length-1)==="\\"){continue}if(a===u){u=[]}if(Expr.preFilter[l]){i=Expr.preFilter[l](i,a,n,u,r,f);if(!i){s=c=true}else if(i===true){continue}}if(i){for(var v=0;(h=a[v])!=null;v++){if(h){c=p(h,i,v,a);var m=r^!!c;if(n&&c!=null){if(m){s=true}else{a[v]=false}}else if(m){u.push(h);s=true}}}}if(c!==undefined){if(!n){a=u}e=e.replace(Expr.match[l],"");if(!s){return[]}break}}}if(e===o){if(s==null){Sizzle.error(e)}else{break}}o=e}return a};Sizzle.error=function(e){throw"Syntax error, unrecognized expression: "+e};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n=typeof t==="string",r=n&&!rNonWord.test(t),i=n&&!r;if(r){t=t.toLowerCase()}for(var s=0,o=e.length,u;s<o;s++){if(u=e[s]){while((u=u.previousSibling)&&u.nodeType!==1){}e[s]=i||u&&u.nodeName.toLowerCase()===t?u||false:u===t}}if(i){Sizzle.filter(t,e,true)}},">":function(e,t){var n,r=typeof t==="string",i=0,s=e.length;if(r&&!rNonWord.test(t)){t=t.toLowerCase();for(;i<s;i++){n=e[i];if(n){var o=n.parentNode;e[i]=o.nodeName.toLowerCase()===t?o:false}}}else{for(;i<s;i++){n=e[i];if(n){e[i]=r?n.parentNode:n.parentNode===t}}if(r){Sizzle.filter(t,e,true)}}},"":function(e,t,n){var r,i=done++,s=dirCheck;if(typeof t==="string"&&!rNonWord.test(t)){t=t.toLowerCase();r=t;s=dirNodeCheck}s("parentNode",t,i,e,r,n)},"~":function(e,t,n){var r,i=done++,s=dirCheck;if(typeof t==="string"&&!rNonWord.test(t)){t=t.toLowerCase();r=t;s=dirNodeCheck}s("previousSibling",t,i,e,r,n)}},find:{ID:function(e,t,n){if(typeof t.getElementById!=="undefined"&&!n){var r=t.getElementById(e[1]);return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if(typeof t.getElementsByName!=="undefined"){var n=[],r=t.getElementsByName(e[1]);for(var i=0,s=r.length;i<s;i++){if(r[i].getAttribute("name")===e[1]){n.push(r[i])}}return n.length===0?null:n}},TAG:function(e,t){if(typeof t.getElementsByTagName!=="undefined"){return t.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(e,t,n,r,i,s){e=" "+e[1].replace(rBackslash,"")+" ";if(s){return e}for(var o=0,u;(u=t[o])!=null;o++){if(u){if(i^(u.className&&(" "+u.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)){if(!n){r.push(u)}}else if(n){t[o]=false}}}return false},ID:function(e){return e[1].replace(rBackslash,"")},TAG:function(e,t){return e[1].replace(rBackslash,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){Sizzle.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0;e[3]=t[3]-0}else if(e[2]){Sizzle.error(e[0])}e[0]=done++;return e},ATTR:function(e,t,n,r,i,s){var o=e[1]=e[1].replace(rBackslash,"");if(!s&&Expr.attrMap[o]){e[1]=Expr.attrMap[o]}e[4]=(e[4]||e[5]||"").replace(rBackslash,"");if(e[2]==="~="){e[4]=" "+e[4]+" "}return e},PSEUDO:function(e,t,n,r,i){if(e[1]==="not"){if((chunker.exec(e[3])||"").length>1||/^\w/.test(e[3])){e[3]=Sizzle(e[3],null,null,t)}else{var s=Sizzle.filter(e[3],t,n,true^i);if(!n){r.push.apply(r,s)}return false}}else if(Expr.match.POS.test(e[0])||Expr.match.CHILD.test(e[0])){return true}return e},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!Sizzle(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;return e.nodeName.toLowerCase()==="input"&&"text"===n&&(t===n||t===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"submit"===e.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return(t==="input"||t==="button")&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&"button"===e.type||t==="button"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return t===0},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],s=Expr.filters[i];if(s){return s(e,n,t,r)}else if(i==="contains"){return(e.textContent||e.innerText||Sizzle.getText([e])||"").indexOf(t[3])>=0}else if(i==="not"){var o=t[3];for(var u=0,a=o.length;u<a;u++){if(o[u]===e){return false}}return true}else{Sizzle.error(i)}},CHILD:function(e,t){var n=t[1],r=e;switch(n){case"only":case"first":while(r=r.previousSibling){if(r.nodeType===1){return false}}if(n==="first"){return true}r=e;case"last":while(r=r.nextSibling){if(r.nodeType===1){return false}}return true;case"nth":var i=t[2],s=t[3];if(i===1&&s===0){return true}var o=t[0],u=e.parentNode;if(u&&(u.sizcache!==o||!e.nodeIndex)){var a=0;for(r=u.firstChild;r;r=r.nextSibling){if(r.nodeType===1){r.nodeIndex=++a}}u.sizcache=o}var f=e.nodeIndex-s;if(i===0){return f===0}else{return f%i===0&&f/i>=0}}},ID:function(e,t){return e.nodeType===1&&e.getAttribute("id")===t},TAG:function(e,t){return t==="*"&&e.nodeType===1||e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=Expr.attrHandle[n]?Expr.attrHandle[n](e):e[n]!=null?e[n]:e.getAttribute(n),i=r+"",s=t[2],o=t[4];return r==null?s==="!=":s==="="?i===o:s==="*="?i.indexOf(o)>=0:s==="~="?(" "+i+" ").indexOf(o)>=0:!o?i&&r!==false:s==="!="?i!==o:s==="^="?i.indexOf(o)===0:s==="$="?i.substr(i.length-o.length)===o:s==="|="?i===o||i.substr(0,o.length+1)===o+"-":false},POS:function(e,t,n,r){var i=t[2],s=Expr.setFilters[i];if(s){return s(e,n,t,r)}}}};var origPOS=Expr.match.POS,fescape=function(e,t){return"\\"+(t-0+1)};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape))}var makeArray=function(e,t){e=Array.prototype.slice.call(e,0);if(t){t.push.apply(t,e);return t}return e};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType}catch(e){makeArray=function(e,t){var n=0,r=t||[];if(toString.call(e)==="[object Array]"){Array.prototype.push.apply(r,e)}else{if(typeof e.length==="number"){for(var i=e.length;n<i;n++){r.push(e[n])}}else{for(;e[n];n++){r.push(e[n])}}}return r}}var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(e,t){if(e===t){hasDuplicate=true;return 0}if(!e.compareDocumentPosition||!t.compareDocumentPosition){return e.compareDocumentPosition?-1:1}return e.compareDocumentPosition(t)&4?-1:1}}else{sortOrder=function(e,t){if(e===t){hasDuplicate=true;return 0}else if(e.sourceIndex&&t.sourceIndex){return e.sourceIndex-t.sourceIndex}var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u){return siblingCheck(e,t)}else if(!o){return-1}else if(!u){return 1}while(a){i.unshift(a);a=a.parentNode}a=u;while(a){s.unshift(a);a=a.parentNode}n=i.length;r=s.length;for(var f=0;f<n&&f<r;f++){if(i[f]!==s[f]){return siblingCheck(i[f],s[f])}}return f===n?siblingCheck(e,s[f],-1):siblingCheck(i[f],t,1)};siblingCheck=function(e,t,n){if(e===t){return n}var r=e.nextSibling;while(r){if(r===t){return-1}r=r.nextSibling}return 1}}Sizzle.getText=function(e){var t="",n;for(var r=0;e[r];r++){n=e[r];if(n.nodeType===3||n.nodeType===4){t+=n.nodeValue}else if(n.nodeType!==8){t+=Sizzle.getText(n.childNodes)}}return t};(function(){var e=document.createElement("div"),t="script"+(new Date).getTime(),n=document.documentElement;e.innerHTML="<a name='"+t+"'/>";n.insertBefore(e,n.firstChild);if(document.getElementById(t)){Expr.find.ID=function(e,t,n){if(typeof t.getElementById!=="undefined"&&!n){var r=t.getElementById(e[1]);return r?r.id===e[1]||typeof r.getAttributeNode!=="undefined"&&r.getAttributeNode("id").nodeValue===e[1]?[r]:undefined:[]}};Expr.filter.ID=function(e,t){var n=typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id");return e.nodeType===1&&n&&n.nodeValue===t}}n.removeChild(e);n=e=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){Expr.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if(e[1]==="*"){var r=[];for(var i=0;n[i];i++){if(n[i].nodeType===1){r.push(n[i])}}n=r}return n}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(e){return e.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=Sizzle,t=document.createElement("div"),n="__sizzle__";t.innerHTML="<p class='TEST'></p>";if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0){return}Sizzle=function(t,r,i,s){r=r||document;if(!s&&!Sizzle.isXML(r)){var o=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(o&&(r.nodeType===1||r.nodeType===9)){if(o[1]){return makeArray(r.getElementsByTagName(t),i)}else if(o[2]&&Expr.find.CLASS&&r.getElementsByClassName){return makeArray(r.getElementsByClassName(o[2]),i)}}if(r.nodeType===9){if(t==="body"&&r.body){return makeArray([r.body],i)}else if(o&&o[3]){var u=r.getElementById(o[3]);if(u&&u.parentNode){if(u.id===o[3]){return makeArray([u],i)}}else{return makeArray([],i)}}try{return makeArray(r.querySelectorAll(t),i)}catch(a){}}else if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){var f=r,l=r.getAttribute("id"),c=l||n,h=r.parentNode,p=/^\s*[+~]/.test(t);if(!l){r.setAttribute("id",c)}else{c=c.replace(/'/g,"\\$&")}if(p&&h){r=r.parentNode}try{if(!p||h){return makeArray(r.querySelectorAll("[id='"+c+"'] "+t),i)}}catch(d){}finally{if(!l){f.removeAttribute("id")}}}}return e(t,r,i,s)};for(var r in e){Sizzle[r]=e[r]}t=null})()}(function(){var e=document.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){var n=!t.call(document.createElement("div"),"div"),r=false;try{t.call(document.documentElement,"[test!='']:sizzle")}catch(i){r=true}Sizzle.matchesSelector=function(e,i){i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(e)){try{if(r||!Expr.match.PSEUDO.test(i)&&!/!=/.test(i)){var s=t.call(e,i);if(s||!n||e.document&&e.document.nodeType!==11){return s}}}catch(o){}}return Sizzle(i,null,null,[e]).length>0}}})();(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!=="undefined"&&!n){return t.getElementsByClassName(e[1])}};e=null})();function dirNodeCheck(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=false;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}if(a.nodeType===1&&!s){a.sizcache=n;a.sizset=o}if(a.nodeName.toLowerCase()===t){f=a;break}a=a[e]}r[o]=f}}}function dirCheck(e,t,n,r,i,s){for(var o=0,u=r.length;o<u;o++){var a=r[o];if(a){var f=false;a=a[e];while(a){if(a.sizcache===n){f=r[a.sizset];break}if(a.nodeType===1){if(!s){a.sizcache=n;a.sizset=o}if(typeof t!=="string"){if(a===t){f=true;break}}else if(Sizzle.filter(t,[a]).length>0){f=a;break}}a=a[e]}r[o]=f}}}if(document.documentElement.contains){Sizzle.contains=function(e,t){return e!==t&&(e.contains?e.contains(t):true)}}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(e,t){return!!(e.compareDocumentPosition(t)&16)}}else{Sizzle.contains=function(){return false}}Sizzle.isXML=function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false};var posProcess=function(e,t){var n,r=[],i="",s=t.nodeType?[t]:t;while(n=Expr.match.PSEUDO.exec(e)){i+=n[0];e=e.replace(Expr.match.PSEUDO,"")}e=Expr.relative[e]?e+"*":e;for(var o=0,u=s.length;o<u;o++){Sizzle(e,s[o],r)}return Sizzle.filter(i,r)};document.querySelectorAll=function(t){return Sizzle(t,this)};document.querySelector=function(t){return document.querySelectorAll.call(this,t)[0]||null}}
    var $ = function(selector) {
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
            Version: 0.1,
            Author: "Christopher D. Langton",
            Website: "http:\/\/chrisdlangton.com",
            Created: "2013-03-19",
            Updated: "2013-03-19"
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
                        $(this[t]).addClass(c[i]);
                    }
                }
            }
            return this;
        },
        hide: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        show: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'inherit';
            }
            return this;
        },
        remove: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].parentNode.removeChild(this[i]);
            }
            return this;
        },
        forEach: function (fn, scope) {
            for (var key in this) {
                if ( this.hasOwnProperty(key) )
                fn.call(scope, this[key], key, this);
            }
        }
    };
    window.$ = $;
})(window);

// Add a plugin
//$.fn.red = function() {
//    for (var i = 0; i &lt; this.length; i++) {
//        this[i].style.color = 'red';
//    }
//    return this;
//}