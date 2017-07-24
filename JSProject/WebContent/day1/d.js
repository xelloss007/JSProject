/**
 * 
 */

////p.74
//
////함수의 선언, 함수의 생성, 펑션 리터럴
////함수리터럴을 이용했다!!
//function sum(x, y){
//	var tot = x + y;
//	return tot;
////	console.log('tot : ' + tot);
//}
//
//
//var obj = {}; // 객체!!!!!!
//
////객체 메소드는 = 대신 : 를 사용한다.
//var obj = {	// 이렇게 쓸 수도 있다!
//		name : 'korea',
//		sum1 : function (x,y){	//객체 내부에 만들어진 것은 함수라고 하기보다는 메소드라고 한다.
//			var tot = x + y;
//			return tot;
//		}
//}; 
//
//var num = obj.sum1(3,4);
//obj.name = 'korea'; //프로퍼티로 맴버변수 만듬.
//
//obj.sum1 =  function (x,y){
//	var tot = x + y;
//	return tot;
//}; // 함수도 값이 된다.
//
//
//
////어노미어스 펑션!! 이름이 없음.
////함수 자체를 대입함.
////이 함수가 익숙해 져야됨.
//var sum1 = function (x,y){
//	var tot = x + y;
//	return tot;
//}
//
////var sum2 = function (x,y){
////var tot = x + y;
////return tot;
////}
//var sum2 = sum1;
//
////var sum3 = function (x,y){
////var tot = x + y;
////return tot;
////}
//var sum3 = num2;
//
//
////{} 객체리터럴	new Object();
////[] 어레이를 만드는 리터럴	new Array();
//
////함수의 값을 반환받을 수 있다.
//var num = sum(3, 4);
//
////sum(3, 4);
//
//console.log('num : ' + num);






//p. 78  4.1.4 Funtion()

//function aaa(x, y, z){
//	return x + y + z;
//}

//var aaa = function (x, y, z){
//return x + y + z;
//}

//F 대문자임!
//var aaa = new Function ('x', 'y', 'z', 'return x + y + z;' );
//
//var x = aaa(2,3,4);
//
//console.log('x : ' + x);
	


//p.80 4.2 함수 객체 : 함수도 객체다

//function abc(x, y){
//	return x + y;
//}
//abc.iname = 'korea';  //함수도 객체다!!!!! 이런식으로 프로퍼티 같은 것이 있다!!
//console.log(abc);
//console.log(abc.iname);


//p.82
var name1 = 'tacademy'; 
var obj1 = {
		name1 :'korea', 
		doprint : function(name1){ 
			console.log('this.name1 : ' + this.name1); 
			console.log('name1 : ' + name1); 

			
			//			name1 :'korea', //korea를 밸류라고 함
//			doprint : function(){ // 펑션이 값으로도 취급이 된다.
////			var name1 = 'japan';  //1순위!!!
//				console.log(this.name1); //자기 자신의 객체가 나옴. 즉, korea 가 나옴. 맴버객체를 가르키고 싶을때!!
////			console.log(name1); // 1등 : japan, 2등 : tacademy
		}
}
console.log(obj1.name1);

obj1.doprint('japan');

//이름이 Data 프로퍼티 x,y 메소드 doSum()값 합구하기
//x, y 값을 할당 메소드와 얻어오는 메소드를 객체 리터럴로  만드시오.

// 제이슨 문자열로 만들떄는 콜론 뒤에 반드시 값이 있어야한다.
var Data = {
	x : 0,
	y : 0,
	setX : function(x){
		this.x = x;
	},
	setY : function(y){
		this.y = y;
	},
	getX : function(){
		return this.x;
	},
	getY : function(){
		return this.y;
	},
	doSum : function(){
		return this.x + this.y; //자바랑 다름. this.으로 지역변수를 나타내 줘야함.
//		return this.getX() + this.getY(); //자바랑 다름. this.으로 지역변수를 나타내 줘야함.
	}
}
Data.setX(20);
Data.setY(30);
var tot = Data.doSum();

console.log('x : ' + Data.getX() + ', y : ' + Data.getY() + ', tot : ' + tot);