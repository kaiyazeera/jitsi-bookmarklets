# jitsi-bookmarklets

How to use:

* Create a new bookmark and set the location to the content of the *-bookmarklet file
* Click the bookmark while Jitsi is in tiles-mode


## How to create a javascript bookmarklet:

1. Write javascript code that works fine when pasted into browser console
2. Minify your code with any js-minifier
3. Wrap your code in function(){ <code> }
4. Url-encode the wrapped code
5. Wrap code in javascript:( <url-encoded-wrapped-code> )()
6. Store result as bookmark in browser
7. Click bookmark to activate the javascript code

Have fun!
