/**
 * 
 */

var foo = {
	name :'foo',
	age : 30,
	major : 'computer science'
};
// foo.name
// foo['name']


// for in 문을 이용한 객체 프로퍼티 출력

for(var name in foo){	// 뒤에 객체 변수명
//	console.log(name + " : " + foo.name); //출력값 : foo
	console.log(name + " : " + foo[name]); //출력값 : computer science
}


console.log(document);

// 도큐먼트라는 객체가 name으로 빼주세요~~라고 함.
for(var name in document){
	console.log(name + " : " + document[name]); // . 말고 []로 뽑아야함.
}


//p.47 예제 3-10

var a = 100;
var b = 100;

//json 리터럴
var obja = { value : 100 };
var objb = { value : 100 };
var objc = objb

console.log(a == b);
console.log(obja == objb); //출력값 : false
console.log(objb == objc);



// ==, === 연산자
var num1 = 10;
var num2 = '10';

//출력값 : 같음 (내용적으로 같으면 true)
if(num1 == num2){
	console.log('같음');
}else{
	console.log('다름');
}

//출력값 : 다름 (type까지 같으면 true 아니면 false)
if(num1 === num2){
	console.log('같음');
}else{
	console.log('다름');
}


//p.48

var a = 100;
var objd = { value : 100 };

console.log('a : ' + a);
console.log('objd.value : ' + objd.value);

//메소드라고 안하고 함수라고 함. 하지만 , 함수 선언후 밑에서 쓰자!!!
//aaa();

//함수 만들기
function aaa(b, objt){
	b = 90;
	objt.value = 80;
	console.log('aaa');
}
aaa(a,objd);
console.log('a : ' + a);
console.log('objd.value : ' + objd.value);

//함수 선언하고 밑에서 사용하자!!!
//aaa();