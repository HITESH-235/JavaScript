console.log('11//JS');
// This file is about Document Object Model.
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. ... The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
let a = document;
console.log(a);
// Gives the whole html code in object form.

let a0 = document.all;
console.log(a0);
// Gives a list of everything in a html code in object form.

a1 = document.body;
console.log(a1)
// Does the same, but only with body.

a2 = document.forms;
a3 = document.forms[0];
console.log(a2);
console.log(a3);
// a3 is for printing the first form in code(if there are many).

Array.from(a2).forEach(function (element, index) {
          console.log(element);
})
// Since a2 is an object, so we cnvrted it to an one element array by from(a2).

a4 = document.links;
a5 = document.links[0];
a6 = document.links[0].href;
// if any attribute is used which doesn't takes any values, like "hidden" will print true or false, which are actually the hidden values for this.

console.log(a4);
console.log(a5);
console.log(a6);
// a4 makes an object for links.
// a5 does this work particularly.
// a6 prints the link.

a7 = document.images;
a8 = document.images[0];
console.log(a7);
console.log(a8);

a9 = document.scripts;
a10 = document.scripts[0];
console.log(a9);
console.log(a10);

// document.anchors	                Returns all <a> elements that have a name attribute	
// document.applets	                Deprecated	
// document.baseURI	               Returns the absolute base URI of the document	
// document.body	                 Returns the <body> element	
// document.cookie	                Returns the document's cookie	
// document.doctype	                Returns the document's doctype	
// document.documentElement	Returns the <html> element	
// document.documentMode	  Returns the mode used by the browser	
// document.documentURI	           Returns the URI of the document	
// document.domain	                Returns the domain name of the document server	
// document.domConfig	             Obsolete.	
// document.embeds	               Returns all <embed> elements	
// document.forms	                Returns all <form> elements	
// document.head	                Returns the <head> element	
// document.images	               Returns all <img> elements	
// document.implementation	  Returns the DOM implementation	
// document.inputEncoding	Returns the document's encoding (character set)	
// document.lastModified	Returns the date and time the document was updated	
// document.links	Returns all <area> and <a> elements that have a href attribute	
// document.readyState	Returns the (loading) status of the document	
// document.referrer	Returns the URI of the referrer (the linking document)	
// document.scripts	Returns all <script> elements
// document.strictErrorChecking	Returns if error checking is enforced	
// document.title	Returns the <title> element	
// document.URL	Returns the complete URL of the document