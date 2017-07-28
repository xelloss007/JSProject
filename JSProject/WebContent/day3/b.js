/**
 *p.65 파워포인트 오류 잡기 ~ try catch~~
 */

function foo(){
	num= 10;	//전역에 만들어짐.
//	var num = 10; //함수 내에서만 사용.
	console.log('a');
	console.log('b');
	console.log('c');
}

function bar(){
	try{
	console.log('num : ' + num);
	console.log('정상 실행');
	}catch(e){
		console.log('오류 발생 : ' + e.message);
		
	}
	console.log('korea');
}

//foo();
//bar();

// ---------------------------------------------

//var arr = [8,5,3,7,1];
//
//arr.sort();
//console.log(arr);

var arr = [8,5,3,7,1];

// forEach(func){} //전체만큼  내 함수가 호출

//포이치함수안에 함수를 넣어서 많이 쓰임.
//많이 쓰임...자주사용되니깐 읽혀놓자...
arr.forEach(function(num){
	console.log('ab function : ' + num);
});

//ab = function(num){
//	console.log('ab function : ' + num);
//}

//for(i = 0; i < arr.length; i++){
//	ab(arr[i]);
//}
//
//
//console.log(arr);



function aaa(){
	var num = 30;
	console.log('num : ' + num);
	return;
	//리턴뒤에 명령문은 실행되지 않으니 쓰지말자!!
	num = 40;
	console.log('num : ' + num);
}

aaa();


var num1 = '100koreajapan200';
var num2 = '200.123';

//var num3 = num1 + num2;
//parseInt 소수점이하를 버린다. ex)'100.234.8.8.8';
//자바스크립트에선 숫자 이외에 다른 아무것이 오든지 버려버림. ex)숫자 뒤에  콤마나 문자 등등
var num3 = parseInt(num1) + parseInt(num2);

console.log(num3);

var str = '3 * 2 + 6'


console.log(str); //그대로 문자열이 나옴.
console.log(eval(str)); // 수식의 연산값이 나옴


var su1 = '34';
var opt = '*'; //연산기호만 바꿔서 쓰면 됨
var su2 = '21';

var su3 = eval(su1 + opt + su2);
console.log('su3 : ' + su3);


var su4 = 4;  // 0    4
var su5;  // 4    0
		      //값0     값 Infinity
var su6 = su4 / su5;
if(isNaN(su6)){
	console.log('su6 : NaN' + su6);
	su6 = 0;
}else{
	console.log('su6 : ' + su6);
}
//if(isFinite(su6)){
//	console.log('su6 무한대 수');
//}else{
//	console.log('su6 : ' + su6);
//}





