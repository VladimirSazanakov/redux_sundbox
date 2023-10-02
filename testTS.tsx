let arr = [];
let arr1: string[]= [];
let arr2: Array<number>; 
let arr3: number[][] = [];
arr3[0][0]=1;
arr3[0][1] = 1;
arr3.push([1,3]);
arr3.push([2]);

// Кортежи

const tuple1: [string, boolean, number] = ['hello', true, 5];
let tuple2: [string, string, boolean, number];
tuple2 = ['hello', 'world', false, 150];
let tuple3 = ['hello', 'world', 45];

//Objects

const obj = {
  a: 1, b: 2, c: 'sds'
};

 type Myobj = {
  a: number;
  b: number;
  c: string;
 }

 let obj1: Myobj;

 interface MyInterfaceObj {
  a: number;
  b: number;
  c: string;
 };

 let obj2: Myobj = {
  a: 1,
  b: 2,
  c: 'hello',
 }

 let obj3: MyInterfaceObj = {
  a: 1,
  b: 2,
  c: 'hello',
 }

 interface MyObj2 {
  readonly a: number;
  b: number;
  c?: string;
 }

 let obj4: MyObj2 = {
  a: 4,
  b: 5,
 };

//  obj4.a = 6;
 obj4.b = 8;

 interface MyObj3 {
  a: number;
  print?: ()=> void;
 }

 interface MyObj4 {
  a: number;
  [key: string]: number;
 }

 let obj5: MyObj4 = {
  a: 4,
  b: 6,
  c: 7,
 }

 obj5.c = 9;

 interface Person {
  name: string
 }

 interface Person {
  age: number; 
 }

 const john: Person = {
  name: 'John',
  age: 38,
 }

 interface IAccount {
  email: string;
  login: string;
  active: boolean;
 }

 interface IDeveloper extends Person, IAccount {
  skills: string[];
  level: string;
 }

 let petr: IDeveloper= {
  name: 'Petr',
  age: 38,
  active: true,
  email: '',
  login: 'petro',
  skills: ['carpenter', 'ingeneer'],
  level: 'junior',
 }

 type TPerson = {
  name: string;
 }

 type TLogin = {
  name: string;
  login: string;
  print?: ()=>void;
 }

 type TMyPerson = TPerson & TLogin;

 let ivan: TMyPerson= {
  name: 'Ivan',
  login: 'ivan123',

 } 

 let a: any = 1;
 let b: number = a;

 let c : unknown = 1;
//  let d: number = c;

//  let e: number = <number>c;

 let n: number = c as number;

 let f: any = 'Hello';
//  let g: number = (<string>f).length;

type TJ = 1|2|3;

let j: TJ;
j = 1;
j = 2;
//  j = 4;

interface MyPhone {
  tel: number;
}

const PrintPhone = (num: MyPhone): void => {
  console.log(num);
}

const number = {tel:8, name: 'my'};

PrintPhone(number);

function PrintAny (x: number): number;

function PrintAny (x: string): string;

function PrintAny (x): any{
  if(typeof x === 'number'){
    return x*x;
  } else {
    return x + x;
  }
} 

interface SumA {
  (a: number, b: number): number;
}

const sum: SumA = (a, b) =>{
  return a+b;
}

type SumB = (a: number, b:number) =>number;

const sumB: SumB = (a, b) => a+b;




  









 
