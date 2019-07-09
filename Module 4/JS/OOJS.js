class Hero {
    constructor(name, side) {
        this.name = name;
        this.side = side;
    }

    speak() {
        return "<p>My name is " + this.name +
            ", I'm with the " + this.side + ".</p>";
    }
}

var darkVador = new Hero("Dark Vador", "empire");
var luke = new Hero("Luke Skywalker", "rebels");
var hanSolo = new Hero("Han Solo", "rebels");
var leiaOrgana = new Hero("Leia Oragana Solo","rebels");
var darthMaul = new Hero("Darth Maul", "empire");
var darthSidious = new Hero("Darth Sidious", "empire");


function makeHeroesSpeak() {
    document.body.innerHTML += darkVador.speak();
    document.body.innerHTML += luke.speak();
    document.body.innerHTML += ianSolo.speak();
    document.body.innerHTML += leiaOrgana.speak();
    document.body.innerHTML += darthMaul.speak();
    document.body.innerHTML += darthSidious.speak();
}
