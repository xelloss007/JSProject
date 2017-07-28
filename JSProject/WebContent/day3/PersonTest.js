/**
 * Person 테스트
 */


var person1 = new Person('홍길동');
var person2 = new Person('장나라');
var person3 = new Person('박찬호');

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
console.log(person1.name);


person1.setName('김호국');
console.log(person1.getName());
console.log(person1);
console.log(person1.toString());


var student1 = new Student('t001');

console.log(student1.getHakbun());

var student2 = new Student('김명호','t002');
console.log(student2.getName());
console.log(student2.getHakbun());

var student3 = new Student('김명호', 33, 't003');
console.log(student3.getName());
console.log(student3.getAge());
console.log(student3.getHakbun());
console.log(student3.toString());