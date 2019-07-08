var people = [
    {name:'Michel', age:51},
    {name:'Henri', age:20},
    {name:'Francois', age:29}
  ];
  function callThis(){
  for (var i = 0; i < people.length; i++){
      var p = people[i];
      document.body.innerHTML += p.name + "<br>";
  }
}
  