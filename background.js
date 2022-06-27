var intervalId = window.setInterval(function(){

var images = document.getElementsByTagName('img')

for (elt of images){
   elt.src = `${chrome.runtime.getURL("blackLord.jpg")}`
}

}, 500);