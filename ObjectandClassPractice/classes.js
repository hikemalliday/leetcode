class Vehicle
{
    constructor(type, color, size, mpg)
    {
        this.type = type;
        this.color = color;
        this.size = size;
        this.mpg = mpg;
   }
   get description()
   {
    console.log(`The wheel type is ${this.type}, the color is ${this.color}, the egine size is ${this.size}, and it gets ${this.mpg}miles per gallon.`)
   }
   set color(newColor)
   {
    this.type = newColor;
   }
}

let MikeSubaru = new Vehicle('awd', 'blue', 'v4', '25')
MikeSubaru.color = 'green'


////////////////////
class Square
{
    constructor (width)
    {
    this.width = width;
    this.height = width;
    this.numOfRequestsForArea = 0;
    }

    get area()
    {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area(area)
    {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let square1 = new Square(4);

////////////////////

class Person
{
    //Parent and Child Class
    constructor (name, age)
    {
        this.name = name;
        this.age = age;
    }

    describe()
    {
        console.log(`I am a dickhead and my name is ${this.name}`)
    }

}

class Programmer extends Person
{
    constructor(name, age, yearsOfExperience)
    {
        super(name, age);

        //Custom behavior of the programmer
        this.yearOfExperience = yearOfExperience;
    }
}

////

class Animal
{
    constructor(name)
    {
        this.name = name;
    }

    makeSound() 
    {
        console.log('Generic animal sound');
    }
}

class Dog extends Animal
{
    constructor (name)
    {
        super(name);
    }

    makeSound()
    {
        console.log('Woof woof')
    }
}

const a1 = new Animal('Dom');
const a2 = new Dog('Fido');

a1.makeSound();
a2.makeSound();


//////////







