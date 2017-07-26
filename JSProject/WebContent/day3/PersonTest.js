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