//Primitives w ts

let age: number;
age = 12;

let userName: string;
userName = "Max";
//etc...

//More complex types with ts

let hobbies: string[];
hobbies = ["Max", "Cooks"];

type Person = { name: string; age: number };

let person: Person[];

person = [
  {
    name: "Max",
    age: 32,
  },
];
//Type inference

let course = "React - The Complete Guide";
//error : course = 12 without defining.

//union types
let course1: string | number /* | boolean | null etc. */ =
  "React - The Complete Guide";
course1 = 1234; //no error

//Type Aliases = definig unique types, for reusing type setting
type MyType = {
  id1: number;
  id2: string;
};

let ids: MyType[];
let idsObject: MyType;

//Function Types, Parameters with ts
