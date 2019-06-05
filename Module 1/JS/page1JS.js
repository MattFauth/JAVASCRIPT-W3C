function changeTitle(){
      var title =
      document.querySelector("#firstPage");
        title.innerHTML += "<br> You changed the <u>title</u> with JavaScript!";
    }

function changeTitleCSS(){
  var title =
  document.querySelector("#firstPage");
  title.style.color = 'black';
  title.style.border = "5px dashed red";
  title.style.backgroundColor = "yellow";
}

function changeTitleCSSBack(){
  var title =
  document.querySelector("#firstPage");
  title.style.color = 'black';
  title.style.border = ".35rem hidden red";
  title.style.backgroundColor = "wheat";
}

paperScript = function() {
  var mousePoint = view.center;
  var amount = 25;
  var colors = ['red', 'white', 'blue', 'white'];
    
  for (var i = 0; i < amount; i++) {
    var rect = new Rectangle([0, 0], [25, 25]);
    rect.center = mousePoint;
    var path = new Path.Rectangle(rect, 6);
    path.fillColor = colors[i % 4];
    var scale = (1 - i / amount) * 20;
    path.scale(scale);   
  }
    
  function onMouseMove(event) {
    mousePoint = event.point;
  }
    
  var children = project.activeLayer.children;
    
  function onFrame(event) {
    for (var i = 0, l = children.length; i < l; i++) {
      var item = children[i];
      var delta = (mousePoint - item.position) / (i + 5);
      item.rotate(Math.sin((event.count + i) / 10) * 7);
      if (delta.length > 0.1)
        item.position += delta;
      }
    }
  }
    
  var a = document.createElement('script')
  a.setAttribute('type', 'text/paperscript');
  a.setAttribute('canvas', 'canvas');
  var src = paperScript.toString();
  a.appendChild(document.createTextNode(src.substring(src.indexOf('\n') + 1, src.lastIndexOf('\n'))));
  document.body.appendChild(a);
