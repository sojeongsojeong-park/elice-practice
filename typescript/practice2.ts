// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];   // spread 사용
// console.log(newArr);

// let [a, b, c, d, e] = newArr;

// let [first, second, ...tmp] = newArr; // rest 사용
// console.log(tmp);
interface IPerson3{
  name:{
    first:string;
    last: string;
  }
  getName:() => string
}

let person2:IPerson3 = {
	name: {
        first: "John",
        last: "Park"
    },
    getName: function () {
        return this.name.first + " " + this.name.last;
    }
}

console.log(person2);
interface IPerson4 extends IPerson3{
  setFirstName:(firstName:string) => void;
}

let person3:IPerson4=  {
    ...person2,
    setFirstName: function (firstName) {
        this.name.first = firstName
    }
}
//메소드 오버로딩
function abc(name:string):void;
function abc(name:string, age:number):void;
function abc(...args:any) {
    let name = "";
    let age = 0;

    if (args.length == 1) {
        name = args[0]
    }
    if (args.length == 2) {
      name = args[0];
      age = args[1];
  }
}

person3.setFirstName("Lambo");
console.log(person3.getName());

interface IPerson5 extends IPerson4{
  setName:(name:string) => void;
}

let person4:IPerson5 = {
    ...person3,
    setName: function (name: string) {
      this.name.first = name;
    }
}

person4.setName("A");
console.log(person.getName());

person4.setName("B");
console.log(person.getName());

interface IState{
  isDownload:boolean;
  a:boolean;
  b:boolean;
}
let state :IState= {
    isDownload: false,
    a: true,
    b: true
}

console.log(state)

state = {
    ...state,
    isDownload: true
}

console.log(state)
