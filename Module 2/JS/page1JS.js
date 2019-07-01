function changeTitle(){
      var title =
      document.querySelector("#firstPage");
        title.innerHTML += "<br> You changed the <u>title</u> with JavaScript!";
    }

function changeTitleBack(){
  var title = 
  document.querySelector("#firstPage");
    title.innerHTML = "My first page ever"; 
}

function changeTitleCSS(){
  var title =
  document.querySelector("#firstPage");
  title.style.color = 'black';
  title.style.border = "5px dashed red";
  title.style.backgroundColor = "yellow";
  return title;
}

function changeTitleCSSBack(){
  var title =
  document.querySelector("#firstPage");
  title.style.color = 'black';
  title.style.border = ".35rem hidden red";
  title.style.backgroundColor = "wheat";
  return title;
}

  function changePageBackgroundColor(color){
    document.body.style.backgroundColor = color;
    var output = document.querySelector('#chosenColor');
    output.innerHTML = "The color selected is: " + color;
  }

  function validateName(field) {
    var name = field.value;  
    var output = document.querySelector('#nameTyped');
    output.innerHTML = "Valid name: " + name;
    var i = 0
    while(i < name.length){
      if (name.charAt(i) === "!" || name.charAt(i) === "?"){
        output.innerHTML = "This name has invalid characters(! or ?)";
      }
      i += 1;
    }
    if(name.length < 4) {
      output.innerHTML = "This name is too short (at least 4 chars)";
    }
  }