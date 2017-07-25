/**
 * 
 */

//-----------1교시 복습-----------------------

// 함수는 값으로 사용한다.
//매개변수로 전달 될 수 있다.

var foo = function(a){
	console.log('foo1');
	a(); //함수를 실행하기 위해서 ()를 써서 값으로 활용한다.
	console.log('foo2');
//	var sum = 0;
//	sum = a + b;
}

// 1. 함수 변수를 선언한다.
var num = function(){
	console.log('aaa');
};
//2. 함수를 호출한다.
//foo(num);	//실행은 여기서부터 실행한다.


//위에 줄을 한줄로 합침
foo(function(){
	console.log('aaa');
}); 




//함수가 반환값으로 사용될 수 있다.

var foo1 = function(){
	console.log('t1');
	var f = function(){ //펑션은 값도 되니깐 넣을 수 있다.
		console.log('fff');
	};
	console.log('t2');
	return f;
}

//매소드나 함수가 리턴 값이 있으면 앞에서 받는다.
var foo2 = foo1();

foo2(); //이것이 있어야 내부적으로 반환된 함수가 실행된다!!!!
//console.log(foo2);




// 예제!
var arr = [2,5,8,7,9];

//소트메소드에 메소드를 추가해서  레프트 라이트를 바꿔주면 오름차순(기본) 내림차순 만들 수 있다.
arr.sort(function(left, right){return right - left});

console.log(arr);
//console.dir(arr);
