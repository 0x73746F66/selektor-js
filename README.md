[1]: http://chrisdlangton.com/
[2]: http://api.jquery.com/category/selectors/

SelektorJS
==========

DOM and MVVM JavaScript Framework.

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=chrisdlangton&url=https://github.com/chrisdlangton/SelektorJS&title=SelektorJS&language=&tags=github&category=software)

# Author's Website
[chrisdlangton.com][1]

# What is SelektorJS

SelektorJS is a JavaScript Framework offering CSS style Selector, DOM event management, and MVVM data binding with observables and template systems.
Its origins are from the development of a web-based mobile HTML5 game I (Chris Langton the Author) am developing.

## Installation:

Download the latest SelektorJS or SelektorJS.min.js file from this repository or from [chrisdlangton.com][1] and upload it to  your public javascripts directory. 

Include the script in your html body after all the content (at the bottom of the body element) like so;

```html
<script src="javascripts/SelektorJS.min.js" type="text/javascript" charset="utf-8"></script>
```

Start writing great content!

# Examples

### Selecting the DOM

SelektorJS uses the vanilla JavaScript function;

```javascript
document.querySelector()
```

which is the same as all modern frameworks (jQuery for example) that affer a CSS sytle selection method.
What that means is by using vanilla querySelector() function, all the usual selectors you are used to (how you use jQuery) will also work the same in SelektorJS.

```javascript
$('div#main') //selects the div with id main
$('span.bold') //selects all span elements with the class bold
$('div#main > table') //selects table elements within the div with id main
$('div#main > table *') //selects table elements and all thier child elements within the div with id main
$('[page="home"]') //selects matching elements by the custom attribute page with attribute value home.
$('[page="home"] *') //selects matching elements and all thier child elements within by the custom attribute page with attribute value home.
$('body') //select the entire body
$("input:checked") //selects all checked inputs
```

The above are just to name a few.

Although the vanilla querySelector() function is not unique to jQuery but rather all browsers by default, jQuery do have the best documentation for using this function.

Review its uses here; [jQuery: Selectors][2]
Again, this is the same as using the vanilla querySelector() function, its not jQuery specific contrary to popular belief.

### Manipulating the DOM

SelektorJS has many great DOM manipulation methods, here are some examples;

```javascript
$('div#main').hide() //hides the div with id main
$('span.error').show() //shows all span elements with the class error
$('div#main > input').fadeIn() //fade in all input elements within the div with id main
$('div#main > input').fadeOut() //fade out all input elements within the div with id main
$('div#main > input').fadeTo(0.5) //fade to half opaque all input elements within the div with id main
$('div#main > table *').remove() //removes table elements and all thier child elements within the div with id main
$('div#main > table *').remove(true) //removes table elements preserving all thier child elements within the div with id main
$('[page="home"]').empty() //empties contents of matching elements by the custom attribute page with attribute value home.
$('div#main').hasClass('custom-bg') // returns bool if the div with id main has defined class name
$('[page="home"] *').addClass('highlight') //adds class highlight to matching elements and all thier child elements within by the custom attribute page with attribute value home.
$('[page="home"] *').removeClass('highlight') //removes class highlight leaving other classes in tact from matching elements and all thier child elements within by the custom attribute page with attribute value home.
$('body').toggleClass('margins') //toggles the class margins on and off the entire body
$('input:checked').val() //gets all checked input values
$('input[name="password"]').val('password') //sets all input with name password a value of password.
$('div#main').html('<h1>Heading</h1>') //replaces html in the div with id main
$('div#main').html() //returns HTML from the div with id main
$('div#main').after('<span id="test">Test</span>') //adds HTML nodes to after the div with id main (not as a child but rather immediately along side it)
$('div#main').before('<span id="test">Test</span>') //adds HTML nodes before the div with id main (not as child, as explained above)
$('div#main').append('<span id="test">Test</span>') //adds HTML nodes to the inner end of the div with id main (as child nodes, preserving existing child nodes)
$('div#main').prepend('<span id="test">Test</span>') //adds HTML nodes to the inner start of the div with id main (as child nodes, as explained above)
$('div#main').hasClass('custom-bg') // returns bool if the div with id main has defined class name
$('section#message').view() //moves the view of the page so the section element with id message is on the screen
$('div#main').attr('page') //returns the value of custom attribute name page
$('div#main').attr('page','main') //sets the value of custom attribute name page to main
$('div#main > input *').disable() //disables input elements within the div with id main
$('div#main > input *').enable() //enables input elements within the div with id main
$('section#message').css('backgroundColor','#EFEFEF') //sets the css style propery background-color to #EFEFEF
$('td').center() //all td elements are applied style of text-align: center  and vertical-align: middle
```
### Attaching events to the DOM

SelektorJS has a simple event handler for attaching a function to an element that fires on the defined event, here are some examples;

```javascript
$('body').on('mousemove',function(event){
    $('#x').html('x = ' + event.x);
	$('#y').html('y = ' + event.y);
});
```
As the mouse moves its x & y location is displayed.

```javascript
$('th').on('click',function(event){
		var headingName = this.innerHTML;
		//do stuff
});
```
in this example we are binding the on mouse click (and touch) event to table heading elements.

There is also a psudo event introduced to SelektorJS, called on ready. This event fires only when the browser has recieved all requested files from the server.
Attach it to any element, it will fire only once and then be discarded.

```javascript
$('body').on('ready',function(event){
		//make use of more great Selektor methods now we know they are available!
});
```
### Extending or adding plugins

With the SelektorJS main function, you can create your own extensions/plugins.
Unless your plugin is specifically returning a value, try to always return this so it can be chained with other methods.
As the selectors return nodes in an array, you must iterate over them applying whatever you intend to each iteration, or you may decide to apply to only this[0] which is the first node selected.

```javascript
$.fn.green = function() {
  	for (var i = 0; i &lt; this.length; i++) {
		this[i].style.color = 'green';
	}
	return this;
};
```
This example will apply the CSS style property of color a value of green. There is no limit as to what you can add to SelektorJS!

### More methods to be documented;

* $json
* $json.fn
* $bind
* $bind(config).sort(props)
* $bind.fn
* $CreateViewBindings

```javascript
//setup always before and after functions for JSON AJAX
$json({
	Start: function(){
        $('#nonce').show();
    },
    End: function(){
        $('#nonce').hide();
    }
});
//make a JSON AJAX call
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
});
```
```html
<table view="feed" cellspacing="1" cellpadding="2">
  <tbody forEach="feed">
      <tr>
          <td data-bind='{"text":"id","textClass":"center"}'></td>
          <td data-bind='{"datetime":"dtcreated","mask":"dddd, mmmm dS, yyyy, h:MM:ss TT","datetimeClass":"center"}'></td>
          <td data-bind='{"text":"tw_created_at"}'></td>
          <td data-bind='{"formatNumber":"tw_id","formatNumberClass":"center"}'></td>
          <td data-bind='{"text":"tw_text"}'></td>
          <td data-bind='{"img":"tw_profile_pic","imgClass":"pip","text":"tw_screen_name"}'></td>
          <td data-bind='{"anchor":"tw_profile_pic","anchorText":"Pic URL","anchorClass":"bold"}'></td>
          <td data-bind='{"text":"tw_user_id"}'></td>
          <td data-bind='{"text":"tw_user_name","textClass":"center"}'></td>
      </tr>
  </tbody>
</table>
```
```javascript
var json = 'some json data';
$bind({
  view:'feed',
  data:json,
  replace:true,
  thead:true,
  sortable:true
});
```
```html
<div view="form">
    <select name="fruit">
        <option data-bind='{"value":"ordered"}'></option>
    </select>
</div>
```
```javascript
var json = '["Pear","Apple","Orange","Grape"]';
$bind({
  binder:'form',
  data:json,
  replace:true
});
```
```javascript
// define a sortable table view model
var TwitterFeedViewModel = {
    view: 'feed', // matching view attribute in the DOM
    getJSON: { // remote JSON data source
        url:'/api/tweets/',
        data:{ foo:'some request data', bar:'other request data' } // properties for the query string
    },
    json: '[{"default":"json","data":"source"}]', // use this if your default JSON data is not remote
    thead: true, // dynamically create table headings from JSON key values?
    sortable: true, // if headings were generated, do we make the table sortable?
    callback: function(props){ 
        // do stuff after view is generated.
        console.log('View model loaded successfully');
    }
};
$CreateViewBindings(TwitterFeedViewModel);
```

```html
<div view="form">
    <input data-bind='{"click":"clearUsername"}' type="text" name="username" value="" placeholder="username" required />
    <input type="password" name="password" value="" placeholder="password" />
    <select name="websites">
        <option data-bind='{"value":"ordered"}'></option>
    </select>
    <select name="pages">
        <option data-bind='{"value":"key"}'></option>
    </select>
    <textarea name="freetext" value="" placeholder="tell me more" ></textarea>
    <button type="button" data-bind='{"submit":"loginFn","offline":"disable"}' >Submit</button>
</div>
<p>Selected Website: <span id="chosen-website"></span></p>
```
```javascript
var FormView = {
    view: 'form',
    json: '{"websites":["site1","site2","site3","site4"],"pages":["home","account","admin"]}', //each first level index key value name will match either a element id or name attribute, the property value for that index key is some JSON data to bind to that elements child template
    callback:function(props){
        console.log('Form view model loaded successfully');
    },
    observe: { //multiple observables can be defined, observables are essentially onChange event listeners simplified in an MVVM implementation
        websites: function(thisElemtent,event){ //each index name value is matched to an element id or name attribute, and the property of that index is a function that will fire when the matching element changes
                // your function goes here
                $('#chosen-website').html(thisElemtent.options[thisElemtent.selectedIndex].text);
        }
    },
    // each time a data-bind with 'click' is defined, it expects a named function (example below) matching the string of the 'click' property.
    loginFn: function(inputsCaptured,formElement,data,btnElement,event){ // available objects for 'submit'
        console.log(inputsCaptured); // all inputs, selects, and textarea, user values are returned in this object
        console.log(formElement); // equivelent to 'this' for the entire view
        console.log(data); // the same as the data provided in this view model, useful for validating.
        console.log(btnElement); // equivelent to 'this' for the button clicked
        console.log(event); // the javascript event object
    },
    clearUsername: function(input,thisElement,event) { // available objects for 'click'
    	console.log(input); // this object has a key matching the name attribute of the element clicked and value matching value of the clicked element
    	$(thisElement).val(''); // thisElement: equivelent to 'this' for the element clicked
        console.log(event); // the javascript event object
    }
};
$CreateViewBindings(FormView);
```

## Plugins

### On screen confirm Messages

Below is the complete plugin to create on screen confirm messages;

```javascript
$.fn.msg = function (props) {
        if (typeof props.onAccept === 'undefined') { return ; }
        if (typeof props.text === 'undefined') { return ; }
        var ele = this[0];
        $('body').css('height','100%');
        if (typeof props.className === 'string') {
            var overlay = document.createElement('div');
                overlay.id = 'overlay';
                overlay.style.display = 'none';
                overlay.style.position = 'absolute';
                overlay.style.left = '0px';
                overlay.style.top = '0px';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.zIndex = '1000';
                overlay.style.textAlign = 'center';
                overlay.className = props.className;
            var div = document.createElement('div');
            var text = document.createTextNode(props.text);
                div.appendChild(text);
            var ok = document.createElement('button');
                ok.id = 'btnOk';
            if (typeof props.btnOkText === 'string') {
                var okText = document.createTextNode(props.btnOkText);
            } else {
                var okText = document.createTextNode('Ok');
            }
                ok.appendChild(okText);
                div.appendChild(ok);
            var cancel = document.createElement('button');
                cancel.id = 'btnCancel';
            if (typeof props.btnCancelText === 'string') {
                var cancelText = document.createTextNode(props.btnCancelText);
            } else {
                var cancelText = document.createTextNode('Cancel');
            }
                cancel.appendChild(cancelText);
                div.appendChild(cancel);
                overlay.appendChild(div);
                ele.appendChild(overlay);
        } else {
            var overlay = document.createElement('div');
                overlay.id = 'overlay';
                overlay.style.display = 'none';
                overlay.style.position = 'absolute';
                overlay.style.left = '0px';
                overlay.style.top = '0px';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.zIndex = '1000';
                overlay.style.textAlign = 'center';
            var div = document.createElement('div');
                div.style.width = '475px';
                div.style.minHeight = '65px';
                div.style.margin = '100px auto';
                div.style.backgroundColor = '#FFF';
                div.style.border = '1px solid #000';
                div.style.padding = '15px';
                div.style.textAlign = 'center';
            var text = document.createTextNode(props.text);
                div.appendChild(text);
            var ok = document.createElement('button');
                ok.id = 'btnOk';
                ok.style.position = 'relative';
                ok.style.right = '30em';
                ok.style.minWidth = '85px';
                ok.style.padding = '20px';
                ok.style.float = 'right';
            var okText = document.createTextNode('Ok');
                ok.appendChild(okText);
                div.appendChild(ok);
            var cancel = document.createElement('button');
                cancel.id = 'btnCancel';
                cancel.style.position = 'relative';
                cancel.style.left = '30em';
                cancel.style.minWidth = '70px';
                cancel.style.padding = '20px';
                cancel.style.float = 'left';
            var cancelText = document.createTextNode('Cancel');
                cancel.appendChild(cancelText);
                div.appendChild(cancel);
                overlay.appendChild(div);
                ele.appendChild(overlay);
        }
        $('#overlay').view().fadeTo(1,200);
        $('#btnOk').on('click',function(event){
            $('#overlay').fadeOut(true,function(){
                $('#overlay').remove();
            });
            return props.onAccept(ele,this,event);
        });
        $('#btnCancel').on('click',function(event){
            $('#overlay').fadeOut(true,function(){
                $('#overlay').remove();
            });
            if (typeof props.onCancel !== 'undefined') {
                return props.onCancel(ele,this,event);
            }
        });
        return this ;
  };
```
#### how to use this plugin
```javascript
    //full use of all options
    $('#message-box').msg({
            text:'this is a text message confirm dialog box - do you want to continue?', //the question
            onAccept: function(ele,btn,event){          // what happenes when user clicks Ok
                    console.log('you confirmed!');
                },
            className: 'confirm-msgbox',                // class of the most parent element, style child classes using css selectors from parent
            onCancel: function(ele,btn,event){          // what happenes when user clicks Cancel
                    console.log('you cancelled!');
                },
            btnCancelText: 'Stop',                      // choose a button name if you set a class for the parent
            btnOkText: 'Continue'                       // choose a button name if you set a class for the parent
    });
    //using the default layout
    $('#message-box').msg({
            text:'this is a text message confirm dialog box - do you want to continue?', //the question
            onAccept: function(ele,btn,event){          // what happenes when user clicks Ok
                    console.log('you confirmed!');
                },
            onCancel: function(ele,btn,event){          // what happenes when user clicks Cancel
                    console.log('you cancelled!');
                }
    });
    //using this as a notification window, i.e. the class will hide the button with id of btnOk
    $('#message-box').msg({
            text:'you have just been notified of something', //the notification
            className: 'notification',                // class of the most parent element, style child classes using css selectors from parent
            onCancel: function(ele,btn,event){          // what happenes when user clicks X
                    $(ele).remove();                // removes the notification
                },
            btnCancelText: 'X'                      // choose a button name if you set a class for the parent
    });
```


## Change Log

#### Current Beta Version: 0.9

* in development.
