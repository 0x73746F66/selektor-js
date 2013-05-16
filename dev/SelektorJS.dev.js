(function (window, undefined) {
        window.SelektorJS = {};
	var $init = function (props) {
		if (typeof window.SelektorJS !== 'undefined' && typeof window.SelektorJS.job === 'undefined') {
			window.SelektorJS.jobs = {};
		}
		if (typeof SelektorJS.jobs.onLineHandle === 'undefined') {
			if (typeof props.monitorOnline === 'undefined' || props.monitorOnline === true) { props.monitorOnline = 500; }
			SelektorJS.jobs.onLineHandle = setInterval(function(){
				if ( navigator.onLine === false ) {
					if ( SelektorJS.online === true ) {
						if (typeof SelektorJS.offlineFnQ !== 'undefined')
						for (var i=0; i < SelektorJS.offlineFnQ.length; i++) {
						  SelektorJS.offlineFnQ[i]();
						}
					}
					SelektorJS.online = false;
				} else if ( navigator.onLine === true ) {
					if ( SelektorJS.online === false ) {
						if (typeof SelektorJS.onlineFnQ !== 'undefined')
						for (var i=0; i < SelektorJS.onlineFnQ.length; i++) {
						  SelektorJS.onlineFnQ[i]();
						}
					}
					SelektorJS.online = true;
				}
			},props.monitorOnline);
		}
	};
	window.$init = $init;
/*  ########
    $
    ######## */
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
		if (typeof window.SelektorJS === 'undefined') { window.SelektorJS = {}; }
        return this;
    };
    $.fn = $.prototype = {
        about: {
            Library: "SelektorJS",
            Version: 0.9,
            Author: "Christopher D. Langton",
            Website: "http:\/\/chrisdlangton.com",
            Created: "2013-03-19",
            Updated: "2013-04-03"
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
                onreadyhandle = setInterval(function(){
                    if ( document.readyState === "complete" ) {
                        clearInterval(onreadyhandle);
                        fn();
                    }
                },10);
                return this;
            } else if (type === 'offline') {
                if (typeof SelektorJS.offlineFnQ === 'undefined') { SelektorJS.offlineFnQ = {}; SelektorJS.offlineFnQ.length = 0; }
				SelektorJS.offlineFnQ[SelektorJS.offlineFnQ.length] = fn;
				SelektorJS.offlineFnQ.length += 1;
                return this;
            } else if (type === 'online') {
                if (typeof SelektorJS.onlineFnQ === 'undefined') { SelektorJS.onlineFnQ = {}; SelektorJS.onlineFnQ.length = 0; }
				SelektorJS.onlineFnQ[SelektorJS.onlineFnQ.length] = fn;
				SelektorJS.onlineFnQ.length += 1;
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
        hide: function(fadespeed,fn) {
            for (var i = 0; i < this.length; i++) {
                if (typeof fadespeed === 'undefined') {
                    this[i].style.display = 'none';
                    if (typeof fn !== 'undefined') { fn(this); }
                } else {
                    $(this[i]).fadeOut(fadespeed,fn);
                }
            }
            return this;
        },
        show: function(fadespeed,fn) {
            for (var i = 0; i < this.length; i++) {
                if (typeof fadespeed === 'undefined') {
                    this[i].style.display = 'inherit';
					if (this[i].style.opacity < 1 && this[i].style.opacity !== '') {
						this[i].style.opacity = '';
                        if (typeof fn !== 'undefined') { fn(this); }
					}
                } else {
                    $(this[i]).fadeIn(fadespeed,fn);
                }
            }
            return this;
        },
        fadeIn: function (speed,fn) {            
            var ele = this[0];
            if(typeof speed === 'undefined' || speed === null || speed === true){
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
                        if (typeof fn !== 'undefined') { fn(this); }
                    }
                }, speed/20);
            }
            return this;
        },
        fadeOut: function (speed,fn) {
            var ele = this[0];
            if(typeof speed === 'undefined' || speed === null || speed === true){
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
						ele.style.opacity = '';
                        if (typeof fn !== 'undefined') { fn(this); }
                    }
                }, speed/20);
            }
            return this;
        },
        fadeTo: function (fade,speed,step,fn) {
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
                        if (typeof fn !== 'undefined') { fn(this); }
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
                        if (typeof fn !== 'undefined') { fn(this); }
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
/*  ########
    $json
    ######## */
	var $json = function (settings) {
		if ( window === this ) {
			return new $json(settings);
		}
        //setup
		if (typeof window.SelektorJS !== 'undefined' && typeof settings.Start === 'function') {
            SelektorJS.jsonStart = settings.Start;
        }
		if (typeof window.SelektorJS !== 'undefined' && typeof settings.End === 'function') {
            SelektorJS.jsonEnd = settings.End;
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
				pairs.push(prop + '/' + encodeURIComponent(obj[prop]));
			}
			return pairs.join('/');
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
		if (typeof window.SelektorJS !== 'undefined' && typeof SelektorJS.jsonStart === 'function') {
			SelektorJS.jsonStart();
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
				if (typeof window.SelektorJS !== 'undefined' && typeof SelektorJS.jsonEnd === 'function') {
					SelektorJS.jsonEnd();
				}
			}
		};
		if (typeof settings.data === 'string' && settings.method === 'GET') {
			httpRequest.open('GET', settings.url + settings.data, true);
		} else {
			httpRequest.open(settings.method, settings.url, true);
		}
		typeof settings.data !== 'undefined' ? httpRequest.send(settings.data) : httpRequest.send(null) ;
		return;
	};
    $json.fn = $json.prototype = {
        // extend $json here through plugins, no default methods as yet.
	};
	window.$json = $json;
/*  ########
    $bind
    ######## */
	var $bind = function (opts) {
        if ( window === this ) {
            return new $bind(opts);
        }
		if (typeof opts === 'undefined') { return ; }
		if (typeof opts.view !== 'string') { return ; }
        this.view = opts.view;
		if (typeof window.SelektorJS === 'undefined') { window.SelektorJS = {}; }
        if (typeof SelektorJS.json === 'undefined') {
            SelektorJS.json = {};
        }
		if (typeof opts.data === 'string') { opts.data = JSON.parse(opts.data); }
		if (typeof opts.data !== 'object') {
            return this;
        } else if (typeof SelektorJS.json[this.view] === 'undefined') {
            SelektorJS.json[this.view] = opts.data;
        } else if (opts.replace !== true && typeof SelektorJS.json[this.view] !== 'undefined') {
            SelektorJS.json[this.view] = SelektorJS.json[this.view].concat(opts.data);
        }
        // private functions
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
		if (typeof SelektorJS.clones === 'undefined') {
            SelektorJS.clones = {};
        }
        // if this view not already been cloned we will need to define the view model clones space
		if (typeof SelektorJS.clones[this.view] === 'undefined') {
			SelektorJS.clones[this.view] = {};
            // now add a clone if we find a forEach directive
            if ( typeof $('[forEach="'+this.view+'"]')[0] !== 'undefined' ) {
                SelektorJS.clones[this.view].forEach = $('[forEach="'+this.view+'"]').html();
                $('[forEach="'+this.view+'"]').empty();
            } else { // clone each element by id or name per matching json index value
                for (var key in opts.data) {
                    if (typeof $('[id="'+key+'"]')[0] !== 'undefined' ) {
                        SelektorJS.clones[this.view][key] = $('[id="'+key+'"]').html();
                        $('[id="'+key+'"]').empty();
                    } else if (typeof $('[name="'+key+'"]')[0] !== 'undefined' ) {
                        SelektorJS.clones[this.view][key] = $('[name="'+key+'"]').html();
                        $('[name="'+key+'"]').empty();
                    }
                }
            }
		} else if (opts.replace === true) { // clone has already been done for this view, so we are just binding new data
            // if this binding replaces the existing binded data remove all previous data, otherwise we will append new data.
            if (typeof $('[forEach="'+this.view+'"]')[0] !== 'undefined') {
                $('[forEach="'+this.view+'"]').empty();
            } else {
                for (var key in opts.data) {
                    if (typeof $('[id="'+key+'"]')[0] !== 'undefined' ) {
                        $('[id="'+key+'"]').empty();
                    } else if (typeof $('[name="'+key+'"]')[0] !== 'undefined' ) {
                        $('[name="'+key+'"]').empty();
                    }
                }
            }
        }
		if ( opts.thead === true && ($('[view="'+this.view+'"] > thead').length !== 1 && $('[view="'+this.view+'"] > tbody').length === 1) ) {
			var thead=document.createElement("thead");
			var tr=document.createElement("tr");
			var titles = [], t=0, th, title;
			for ( var key in opts.data[0] ) {
				if (opts.data[0].hasOwnProperty(key))
				titles[t] = key; t++;
			}
			for (t=0;t<titles.length;t++) {
				th=document.createElement("th");
                if (opts.sortable === true) {
                    th.className = 'sort';
                }
				title=document.createTextNode(titles[t]);
				th.appendChild(title);
				tr.appendChild(th);
			}
			thead.appendChild(tr);
			document.querySelectorAll('[view="'+this.view+'"]')[0].appendChild(thead);
			if (opts.sortable === true) {
				$('th.sort').on('click',function(event){
					var view = this.parentNode.parentNode.parentNode.getAttribute('view');
					var sort = this.className, parent=this.parentNode.getElementsByTagName('*');
					for(var i=0;i<parent.length;i++){
						parent[i].className = 'sort';
					}
					var by = this.innerHTML;
					if (sort == "sort" || sort == "asc") { this.className = "desc"; } else {
					if (sort == "desc") { this.className = "asc"; } }
					$bind({view:view}).sort(by,this.className);
				});
			}
		}
        if (typeof $('[forEach="'+this.view+'"]')[0] !== 'undefined') {
            for (var j = 0; j < opts.data.length; j++) {
                $('[forEach="'+this.view+'"]').append(SelektorJS.clones[this.view].forEach);
                var bind = {}, i = 0;
                $('[forEach="'+this.view+'"] *').each(function(child){
                    if ($(child).attr('data-bind')) {
                        bind[i] = JSON.parse($(child).attr('data-bind'));
                        if(bind[i].img) {
                            if (bind[i].imgClass) {
                                $(child).append('<img class="' + bind[i].imgClass + '" src="' + opts.data[j][bind[i].img] + '" />');
                            } else {
                                $(child).append('<img src="' + opts.data[j][bind[i].img] + '" />');
                            }
                        }
                        if(bind[i].anchor) {
                            if (bind[i].anchorClass) {
                                if (bind[i].anchorText) {
                                    $(child).append('<a class="' + bind[i].anchorClass + '" href="' + opts.data[j][bind[i].anchor] + '" target="_blank" >' + bind[i].anchorText + '</a>');
                                } else {
                                    $(child).append('<a class="' + bind[i].anchorClass + '" href="' + opts.data[j][bind[i].anchor] + '" target="_blank" >' + opts.data[j][bind[i].anchor] + '</a>');
                                }
                            } else {
                                if (bind[i].anchorText) {
                                    $(child).append('<a href="' + opts.data[j][bind[i].anchor] + '" target="_blank" >' + bind[i].anchorText + '</a>');
                                } else {
                                    $(child).append('<a href="' + opts.data[j][bind[i].anchor] + '" target="_blank" >' + opts.data[j][bind[i].anchor] + '</a>');
                                }
                            }
                        }
                        if(bind[i].uid) {
							$(child).attr( 'uid' , opts.data[j][bind[i].uid] );
                        }
                        if(bind[i].min) {
							$(child).attr( 'min' , opts.data[j][bind[i].min] );
                        }
                        if(bind[i].max) {
							$(child).attr( 'max' , opts.data[j][bind[i].max] );
                        }
                        if(bind[i].src) {
                            if (bind[i].srcClass) {
                                $(child).addClass( bind[i].srcClass );
                                $(child).attr( 'src' , opts.data[j][bind[i].src] );
                            } else {
                                $(child).attr( 'src' , opts.data[j][bind[i].src] );
                            }
                        }
                        if(bind[i].href) {
                            if (bind[i].hrefClass) {
                                $(child).addClass( bind[i].hrefClass );
                                $(child).attr( 'href' , opts.data[j][bind[i].href] );
                            } else {
                                $(child).attr( 'src' , opts.data[j][bind[i].href] );
                            }
                        }
                        if(bind[i].text) {
                            if (bind[i].textClass) {
                                $(child).append('<span class="' + bind[i].textClass + '">' + opts.data[j][bind[i].text] + '</span>');
                            } else {
                                $(child).append(opts.data[j][bind[i].text]);
                            }
                        }
                        if(bind[i].datetime) {
                            var newDatetime = new Date( opts.data[j][bind[i].datetime] );
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
                        if(bind[i].formatNumber && !isNaN(opts.data[j][bind[i].formatNumber])){
                            var x = opts.data[j][bind[i].formatNumber].split('.');
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
                        child.removeAttribute('data-bind');
                    }
                });
            }
		} else {
            for (var key in opts.data) {
                for (var j = 0; j < opts.data[key].length; j++) {
                    var bind = {}, i = 0;
                    if ( typeof $('[id="'+key+'"]')[0] !== 'undefined' ) {
                        $('[id="'+key+'"]').append(SelektorJS.clones[this.view][key]);
                        $('[id="'+key+'"] *').each(function(child){
                            if ($(child).attr('data-bind')) {
                                bind[i] = JSON.parse($(child).attr('data-bind'));
                                if(bind[i].value) {
                                    $(child).append(opts.data[key][j]);
                                    if (bind[i].value === true) {
                                        $(child).val(opts.data[key][j]);
                                    } else if (bind[i].value === "ordered") {
                                        $(child).val(j);
                                    }
                                }
                            }
                            child.removeAttribute('data-bind');
                        });
                    } else if ( typeof $('[name="'+key+'"]')[0] !== 'undefined' ) {
                        $('[name="'+key+'"]').append(SelektorJS.clones[this.view][key]);
                        $('[name="'+key+'"] *').each(function(child){
                            if ($(child).attr('data-bind')) {
                                bind[i] = JSON.parse($(child).attr('data-bind'));
                                if(bind[i].value) {
                                    $(child).append(opts.data[key][j]);
                                    if (bind[i].value === true || bind[i].value === 'key') {
                                        $(child).val(opts.data[key][j]);
                                    } else if (bind[i].value === "ordered") {
                                        $(child).val(j);
                                    }
                                }
                            }
                            child.removeAttribute('data-bind');
                        });
                    }
                }        
            }
        }
		return this;
	};
    $bind.fn = $bind.prototype = {
        sort: function(by,order) {
            var obj = SelektorJS.json[this.view];
			var sorted = obj.sort(function(a, b){
				if (isNaN(by) && Date.parse(by)) { // is a date
					var dateA=new Date(a[by]), dateB=new Date(b[by]);
					if (order.toLowerCase() === 'desc') {
						return dateB-dateA;
					} else {
						return dateA-dateB;
					}
				} else if (!isNaN(by)) { // is a number
					if (order.toLowerCase() === 'desc') {
						return parseInt(a[by]) > parseInt(b[by]);
					} else {
						return parseInt(b[by]) > parseInt(a[by]);
					}
				} else { // string
					var byA=a[by].toLowerCase(), byB=b[by].toLowerCase();
					if (order.toLowerCase() === 'desc') {
						if (byB < byA)
							return -1; 
						if (byB > byA) return 1;
					} else {
						if (byA < byB)
							return -1;
						if (byA > byB) return 1;
					}
				}
				return 0; //default return value (no sorting)
			});
			$bind({view:this.view,data:sorted,replace:true});
			return this;
        }
    };
	window.$bind = $bind;
/*  ########
    $CreateViewBindings
    ######## */
	var $CreateViewBindings = function (props) {
        if ( window === this ) {
            return new $CreateViewBindings(props);
        }
        if (typeof props === 'undefined') { return ; }
        if (typeof props.view === 'undefined') { return ; }
        if (typeof props.getJSON === 'undefined' && typeof props.json === 'undefined') { return ; }
        if ( (typeof props.getJSON !== 'undefined' && typeof props.getJSON === 'object') && typeof props.json === 'undefined') {
            if (typeof props.getJSON.url !== 'string') { return ; }
            if (typeof props.getJSON.data === 'undefined') {
                $json({
                    url:props.getJSON.url,
                    method:'GET',
                    success: function(json){
                        if (props.thead === true) {
                            if (typeof props.sortable === 'undefined') { props.sortable = false; }
                            $bind({view:props.view,data:json,thead:true,sortable:props.sortable,replace:true});
                        } else {
                            $bind({view:props.view,data:json,thead:false,sortable:false,replace:true});
                        }
						if (typeof props.done === 'function') {
							props.done();
						}
                    },
                    error: function(resp){console.log(resp.status);}
                });
            } else if (typeof props.getJSON.data === 'object') {
                $json({
                    url:props.getJSON.url,
                    data:props.getJSON.data,
                    method:'GET',
                    success: function(json){
                        if (props.thead === true) {
                            if (typeof props.sortable === 'undefined') { props.sortable = false; }
                            $bind({
                                view:props.view,
                                data:json,
                                thead:true,
                                sortable:props.sortable,
                                replace:true
                            });
                        } else {
                            $bind({
                                view:props.view,
                                data:json,
                                thead:false,
                                sortable:false,
                                replace:true
                            });
                        }
						if (typeof props.done === 'function') {
							props.done();
						}
                    },
                    error: function(resp){console.log(resp.status);}
                });
            }
        } else if ( typeof props.json !== 'undefined' && typeof props.json === 'string') {
            if (props.thead === true) {
                if (typeof props.sortable === 'undefined') { props.sortable = false; }
                $bind({
                    view:props.view,
                    data:props.json,
                    thead:true,
                    sortable:props.sortable,
                    replace:true
                });
            } else {
                $bind({
                    view:props.view,
                    data:props.json,
                    thead:false,
                    sortable:false,
                    replace:true
                });
            }
        }
        if (typeof props.observe !== 'undefined') {
            for (var key in props.observe) {
                if (typeof props.observe[key] === 'function') {
                    if ( typeof $('[id="'+key+'"]')[0] !== 'undefined' ) {
                        $('[id="'+key+'"]').on('change',function(event){
                            props.observe[key](this,event);
                        });
                    } else if ( typeof $('[name="'+key+'"]')[0] !== 'undefined' ) {
                        $('[name="'+key+'"]').on('change',function(event){
                            props.observe[key](this,event);
                        });
                    }
                }
            }
        }
        var bind = {}, i = 0;
        $('[view="'+props.view+'"] *').each(function(child){
            if ($(child).attr('data-bind')) {
                bind[i] = JSON.parse($(child).attr('data-bind'));
                if(bind[i].submit) {
                    var fn = bind[i].submit;
                    $(child).on('click',function(event){
                        var input = {};
                        $('[view="'+props.view+'"] *').each(function(formChild){
                            if (formChild.nodeName.toLowerCase() === 'select') {
                                input[formChild.name || i] = formChild.options[formChild.selectedIndex].value;
                            } else if (formChild.nodeName.toLowerCase() === 'input') {
                                input[formChild.name || i] = formChild.value ;
                            } else if (formChild.nodeName.toLowerCase() === 'textarea') {
                                input[formChild.name || i] = formChild.value ;
                            }
                        });
                        props[fn](
                            input,
                            $('[view="'+props.view+'"]'),
                            {json:props.json,view:props.view},
                            child,
                            event
                        );
                    });
                }
                if(bind[i].click) {
                    var fn = bind[i].click;
                    $(child).on('click',function(event){
                        var input = {};
                        input[child.name] = child.value ;
                        props[fn](
                            input,
                            child,
                            event
                        );
                    });
                }
                if(bind[i].offline) {
                    if (bind[i].offline === 'disable') {
						$(child).on("offline", function(event){
							$(child).disable();
						});
						$(child).on("online", function(event){
							$(child).enable();
						});
					}
                }
            }
            i++;
        });
        if (typeof props.callback === 'function') {
            if (typeof props.json === 'undefined') {
            return props.callback({
                            view:props.view
                        });
            } else {
            return props.callback({
                            view:props.view,
                            json:props.json
                        });
            }
        } else {
            return this;
        }
	};
	window.$CreateViewBindings = $CreateViewBindings;
})(window);