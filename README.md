# Instagram API Searcher #

This is a simple project to search Instagram via their API. You'll take what the 
user searches for, and display thumbnails below the form field. It should look 
something like this when you are done:

![Example screenshot](/example.png)

## Getting set up ##
1. Fork this repo to your own GitHub account.

2. Create a new Cloud 9 workspace, choosing to clone a URL. Use the SSH URL of 
    your forked repo. (It should start with **`git:`**)
3. Create a new file: **`instagram.key`** and paste in the Instagram API key you 
    were provided. 


## What you need to do ##
You'll be filling in your own code in **`js/script.js`** so that when you type 
in a search term in the text field, it will display a series of images in the 
search-results div.

Provided for you is a function **`searchInstagram()`** that you 
will use to call to Instagram to get the results. It takes exactly 3 arguments:

1. **`query`** - This should be what the user types in the search field.
2. **`count`** - How many results you want to display. When you're starting out, 
    you should set this to 1, and once you've got that working, up it to 10 or 
    more.
3. **`callback`** - This needs to be a function that you will create. It will be 
    called with the results from Instagram. You'll need this function to be able
    to read the object returned and extract the image thumbnails. 

The format of the response object is described here: https://instagram.com/developer/endpoints/tags/#get_tags_media_recent