
/** The Request */

var xhr = new XMLHttpRequest();
/** 
 * An instance of the XMLHttpRequest object is created using
 * object constructor notation. It uses the new keyword and stores
 * the object in a variable. The variable name xhr is short
 * for XMLHttpRequest (the name of the object)
 */

 xhr.open('GET', 'data/test.json', true);
 /**
  * The XMLHttpRequest object's open() method prepares the request.
  * It has three parameters
  *     a.  The HTTP method
  *     b.  The url of the page that will handle the request
  *     c.  A boolean indicating if it should be asynchronous
  */

  xhr.send('search=arduino');
  /**
   * The send() method is the one that sends the prepared
   * request to the server. Extra information can be passed to
   * the server in the parentheses. If no extra information is sent,
   * you may see the keyword null used: xhr.send(null)
   */


   /** The Response */

   xhr.onload = function() {
       if (xhr.status === 200) {
           // write something here...
       }
   }

   /**
    * When the browser has received and loaded a response from the server.
    * the onload event will fire. This will trigger a function (here, it
    * is an anonymous function).
    * 
    * The function checks the status property of the object. This is used
    * to make sure the server's response was okay (If this property is blank, check
    * the setup of the server)
    */