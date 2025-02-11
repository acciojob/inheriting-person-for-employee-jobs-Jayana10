// complete this js code
function Person(name, age) {
	this.name = name;
	thks.age = age;
}
greet(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	person.call(this,name,age);
	this.jobtitle=jobTitle
}
jobGreet(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`);
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
