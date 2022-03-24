(
  function() {
    document.write("hi"); 
    var x = document.createElement("METER");
    x.setAttribute("min", "0");
    x.setAttribute("max", "100"); 
    x.setAttribute("value", "65");
    document.body.appendChild(x);
  }
)
();
