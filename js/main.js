
function updateElement() {
  if ("serviceWorker" in navigator) {
     navigator.serviceWorker
     .register("/sw.js")
     .then(function (registration) {
        var Element = document.getElementById("heading-text");
        console.log("You have successfully registered your service worker");
        Element.style.color = "Black";
        Element.style.fontFamily = "Helvetica";
        Element.innerHTML = "Test has been changed";

     })
     .catch(function (error) {
        console.log("Your service worker registration failed");
     });
  }
}