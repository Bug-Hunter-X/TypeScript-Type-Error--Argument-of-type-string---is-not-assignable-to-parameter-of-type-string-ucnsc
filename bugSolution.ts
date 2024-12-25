function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); // Works correctly

let userName = user.join(" ");
console.log(greeter(userName));// Works correctly after string conversion