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
function parent(){
	var a = 100;	//var이 있는 것과 없는 것의 차이점 : var가 없으면 전역변수처럼 사용됨.
	var b = 200;	//변수를 꼭 함수 안에서만 쓰고 싶으면 var를 붙여서 거기서만 사용하자.
	
	console.log('a : ' + a);
	console.log('b : ' + b);
}

function child(){
	var c = 300;
	console.log('c : ' + c);
//	console.log('a : ' + a);
}

//parent(); //하지만 실행을 하지 않으면 a = 100을 읽을 수 가 없어서 child()는 오류뜸
child();