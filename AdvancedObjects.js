const array = [1, 2, 13, 17];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Weeee I'm a ${this.type}`)
    }
}


//Evaluate these:
//#1
[2] === [2] //true
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4; //4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name,type,color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`Moo I'm $(this.name) and I $(this.color) $(this.type) `);
    }
}

const cow = new.Mamal('cow', 'Teresa', 'brown');