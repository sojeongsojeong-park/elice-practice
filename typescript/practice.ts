// const person = {
// 	name: "John",
// 	age: 30,
// 	gender: "male",
// 	greeting: function () {
// 		alert(`Hi, I'm ${this.name}.`);
// 	},
// 	setName: function (newName) {
// 		this.name = newName;
// 	}
// }

// console.log(person);
// console.log(person.name);
// person.setName("ABC");
// console.log(person.name);
// person.greeting();

interface IPerson {
  name:{
    first: string;
    last: string
  },
  getName:() => string;
}

const person: IPerson = {
	name: {
        first: "John",
        last: "Park"
    },
    getName: function () {
        return this.name.first + " " + this.name.last;
    }
}

console.log(person);
console.log(person.name.first);
console.log(person.name.last);
console.log(person.getName());