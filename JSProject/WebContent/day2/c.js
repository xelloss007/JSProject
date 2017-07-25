/**
 * 
 */

//p.87 함수의 length : 매개변수의 갯수.
function f1(){
	
}

function f2(x){
	return x;
}

function f3(x, y){
	return x+y;
}

function f4(x,y,z){
	console.log('f4 매개변수 갯수 : ' + f4.length);
	return x+y+z;
}

f4(1,2,3);

console.log(f1.length);
console.log(f2.length);
console.log(f3.length);
console.log(f4.length);




//p.89 예제

function Foo(){
//	return x + y;
}

var foo1 = new foo();
console.log(foo.name); //name 이라는 프로퍼티(속성)이 있다.
console.log(foo.prototype);
console.log(foo.prototype.constructor);