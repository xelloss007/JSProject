/**
 * 
 */

// p.74

//함수의 선언, 함수의 생성, 펑션 리터럴
//함수리터럴을 이용했다!!
function sum(x, y){
	var tot = x + y;
	return tot;
//	console.log('tot : ' + tot);
}


var obj = {}; // 객체!!!!!!

//객체 메소드는 = 대신 : 를 사용한다.
var obj = {	// 이렇게 쓸 수도 있다!
	name : 'korea',
	sum1 : function (x,y){	//객체 내부에 만들어진 것은 함수라고 하기보다는 메소드라고 한다.
		var tot = x + y;
		return tot;
	}
}; 

var num = obj.sum1(3,4);
obj.name = 'korea'; //프로퍼티로 맴버변수 만듬.

obj.sum1 =  function (x,y){
	var tot = x + y;
	return tot;
}; // 함수도 값이 된다.



//어노미어스 펑션!! 이름이 없음.
// 함수 자체를 대입함.
//이 함수가 익숙해 져야됨.
var sum1 = function (x,y){
	var tot = x + y;
	return tot;
}

//var sum2 = function (x,y){
//	var tot = x + y;
//	return tot;
//}
var sum2 = sum1;

//var sum3 = function (x,y){
//	var tot = x + y;
//	return tot;
//}
var sum3 = num2;


//{} 객체리터럴	new Object();
//[] 어레이를 만드는 리터럴	new Array();

//함수의 값을 반환받을 수 있다.
var num = sum(3, 4);

//sum(3, 4);

console.log('num : ' + num);