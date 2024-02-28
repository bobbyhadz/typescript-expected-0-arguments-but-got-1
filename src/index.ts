export {};

// Expected 0 arguments, but got 1 error in TypeScript

// EXAMPLE 1 - Type the function's arguments

function greet(name: string) {
  return `Hello ${name}`;
}

// 👇️ "Hello Bobby Hadz"
console.log(greet('Bobby Hadz'));

// ---------------------------------------------------

// // EXAMPLE 2 - Disable type checking for an argument with the `any` type

// function greet(name: any) {
//   return `Hello ${name}`;
// }

// // 👇️ "Hello Bobby Hadz"
// console.log(greet('Bobby Hadz'));

// ---------------------------------------------------

// // EXAMPLE 3 - Typing an object parameter

// function getEmployee({
//   name,
//   age,
//   salary,
// }: {
//   name: string;
//   age: number;
//   salary: number;
// }) {
//   return { name, age, salary };
// }

// const result = getEmployee({
//   name: 'Bobby Hadz',
//   age: 30,
//   salary: 100,
// });

// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type alias or an interface

// type EmployeeProps = {
//   name: string;
//   age: number;
//   salary: number;
// };

// function getEmployee({ name, age, salary }: EmployeeProps) {
//   return { name, age, salary };
// }

// ---------------------------------------------------

// // Expected 1 argument, but got 0 error in TypeScript

// // EXAMPLE 5 - Pass the argument to the function

// function getMessage(message: string) {
//   return message || '';
// }

// // 👇️ call function with parameter
// getMessage('bobbyhadz.com');

// ---------------------------------------------------

// // EXAMPLE 6 - Set a default value for the parameter

// function getMessage(message = 'bobbyhadz.com') {
//   return message || '';
// }

// getMessage();

// ---------------------------------------------------

// // EXAMPLE 7 - Mark the parameter as optional

// function getMessage(message?: string) {
//   return message || '';
// }

// getMessage();

// ---------------------------------------------------

// // EXAMPLE 8 - Providing a default value for an object parameter

// type Person = {
//   name: string;
//   age: number;
// };

// function getPerson(person: Person = { name: '', age: 0 }) {
//   return person;
// }

// getPerson();

// ---------------------------------------------------

// // EXAMPLE 9 - An interface with a function property

// interface Employee {
//   increaseSalary: (salary?: number) => number;
// }

// const emp: Employee = {
//   increaseSalary(salary = 100) {
//     return salary + 123;
//   },
// };

// console.log(emp.increaseSalary()); // 👉️ 246

// ---------------------------------------------------

// // An argument for 'x' was not provided in TypeScript

// // EXAMPLE 10 - Provide a value for all required parameters

// class Employee {
//   constructor(
//     public name: string,
//     public salary: number,
//   ) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// // ✅ No errors
// const employee = new Employee('Bobby Hadz', 100);

// // ------------------------------------------------------------

// function sum(a: number, b: number) {
//   return a + b;
// }

// // ✅ No errors
// console.log(sum(15, 25)); // 👉️ 40

// ------------------------------------------------------------

// // EXAMPLE 11 - Mark the parameter as optional if you want to omit it

// class Employee {
//   // 👇️ mark `salary` as optional
//   constructor(
//     public name: string,
//     public salary?: number,
//   ) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// const employee = new Employee('Bobby Hadz');
// console.log(employee.salary); // 👉️ undefined

// // ------------------------------------------------------------

// // 👇️ mark `b` as optional
// function sum(a: number, b?: number) {
//   return a + (b || 0);
// }

// console.log(sum(15)); // 👉️ 15
