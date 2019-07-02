window.onload = init;

function init() {
  var listImages = document.querySelectorAll("img");
  listImages.forEach(function(img) {
    img.style.boxShadow = "5px 5px 15px 5px black";
    img.style.margin = "10px";
  });  
  
}

function addBorderToFirstImage() {
  var img1 = document.querySelector('#img1');
  img1.style.border = '5px dotted green';  
}

function resizeAllImages() {
  var listImages = document.querySelectorAll("img");
  listImages.forEach(function(img) {
    img.width = 25*0;
  });
}

function firstLiClassRedInUl() {
    var elm = document.querySelector("ul li.red");
    elm.style.color = 'red';
  }
  
  function allLisInUlOfClassNav() {
    var list = document.querySelectorAll("ul.nav > li");
    
    list.forEach(function(elm) {
      elm.style.textDecoration = "underline";
    })
  }

  function displayListOfCheckedItems() {
    var listOfSelectedValues="";
    var output = document.querySelector('#output')
    var list = document.querySelectorAll("#fruits input:checked");  
    list.forEach(function(elm) {
      listOfSelectedValues += elm.value + ", ";
      elm.parentNode.style.color = 'gold';
    });
    output.innerHTML = "You selected: " + listOfSelectedValues;
  }