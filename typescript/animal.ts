interface IAnimal{
  name:string;
  species: string;
  age: number;

}

class Animal implements IAnimal{
  name:string;
  species:string;
  age:number;
  
  constructor(name:string, species:string, age:number){
    this.name = name;
    this.species = species;
    this.age = age;
  }
  introduce(){
    return console.log(`Hello, I'm ${this.name}!`)
  }
}

class Dog extends Animal{
  constructor(name:string, species:string, age:number){
    super(name, species, age);
  }
  saying(){
    return console.log(`🐶(${this.name}, ${this.age}세)
    멍멍멍!`)
  }
}

// const mini = new Mouse("mini", "mouse", 3);
// mini.introduce();