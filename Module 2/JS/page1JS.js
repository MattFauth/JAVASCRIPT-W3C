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
      if (name.charAt(i) === "!" || name.charAt(i) === "?"){{
        output.innerHTML = "This name has invalid characters(! or ?)";
      }}
      i += 1;
    }
    if(name.length < 4) {
      output.innerHTML = "This name is too short (at least 4 chars)";
    }
  }

  function calc(){
    var n1 = 0, n2 = 0, result = 0;
  var output = document.querySelector('#result')
    if (document.querySelector('#sum').onclick = function(evt) {
      alert('Sum');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1 + n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#multi').onclick = function(evt) {
      alert('Multiply');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1 * n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#div').onclick = function(evt){
      alert('Divide');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1/n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#sub').onclick = function(evt){
      alert('Subtract');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1-n2;
      output.innerHTML = "Result: " + result;
    }){
    }
  }

  function add() {
    var val = document.querySelector('#newItem').value;
    if((val !== undefined) && (val !== "")) {
      var ul = document.querySelector("#items");
      var newItem = document.createElement("li");
      newItem.textContent = val;
      ul.append(newItem);
    }
  }

  function reset() {
    var ul = document.querySelector("#items");
    ul.innerHTML = ""; 
  }