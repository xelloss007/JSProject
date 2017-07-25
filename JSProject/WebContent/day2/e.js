/**
 * 
 */

//console.log('aaa');
////alert('확인');	//실행시 확인창이 뜸. 확인 누르기전에 bbb실행 안됨
////console.log('bbb');
//
////p.90 4.3.1 콜백함수
//
//window.onload = function(){		//모든게 읽어지고 마지막 확인창이 뜸 
//	alert('확인'); 
//};
//console.log('bbb');
//
//alert('ccc');



// p.92 즉시 실행 함수(immediate 함수)

//function aaa(name){
//	console.log('aaa : ' + name);
//}
//
//aaa('korea'); //누군가에 의해서 부름을 받아야 실행됨.


//(function (name){
//	console.log('aaa : ' + name);
//})('korea');

//aaa('korea');


//p.94 내부함수

//a = 100; //var가 없으면 전역변수처럼 사용됨.
//function parent(){
//	var a = 100;	//var이 있는 것과 없는 것의 차이점 : var가 없으면 전역변수처럼 사용됨.
//	var b = 200;	//변수를 꼭 함수 안에서만 쓰고 싶으면 var를 붙여서 거기서만 사용하자.
//	
//	console.log('a : ' + a);
//	console.log('b : ' + b);
//	//inner함수 : 외부에서 부르는 것은 안된다. 안에서만 호출할 수 있다.
//	function child(){
//		var c = 300;
//		console.log('c : ' + c);
//		console.log('inner a : ' + a);
//	}
//	
//	child();
//}

//function child(){
//	var c = 300;
//	console.log('c : ' + c);
//	console.log('a : ' + a);
//}

//parent(); //하지만 실행을 하지 않으면 a = 100을 읽을 수 가 없어서 child()는 오류뜸
//child();


//--------------------------------------------------------------------------

//p.98 함수를 리턴하는 함수
//function p1(){
//	var name = 'korea';
//	var c1 = function(){
//		console.log(name);
//	}
//	return c1;
//}
////p1으로 리턴받은 함수를 호출
//c1 = p1();
//
//c1(); //inner함수는 함수 밖같에서 호출할 수 없다.


//--------------------------------------------------------------------------

////p.99 	arguments
//
////함수가 인자가 변경되면 자바스트립트는 유연성이 있어서 변경하면 그 값을 사용할 수 있다.
//function sum(){
////	console.log(a, b);
//	console.log(arguments.length);
//	var tot = 0;
//	for(i = 0; i < arguments.length; i++){
//		console.log(arguments[i])
//		tot += arguments[i];
//	}
//	return tot;
//}
//
//sum();
//sum(1);
//sum(1, 2);
//sum(1, 2, 3);
//tot = sum(1, 2, 3,5,6,7,8,9);
//console.log('합계  : ' + tot);



//----------------------------------------------------------------------------

//p.101~ 103

var obj1 = {
	name : 'korea',
	getName : function(){
		return this.name;
	}
	
};

var obj2 = {
	name : 'java',
	address : 'seoul'
};
obj2.getName = obj1.getName;


console.log(obj1.getName());
//console.log(obj1.name);
console.log(obj2.address);

console.log(obj2.getName());