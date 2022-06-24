//Replace all the corresponding attritube with the appropriate html file.
function includeHTML() {
    var targetAttritube = "include-html";
    var elements = document.getElementsByTagName("*");

    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];
      var file = element.getAttribute(targetAttritube);

      if (file) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            element.removeAttribute(targetAttritube);
            includeHTML();
          }
        }
        
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }

  window.onload = includeHTML();