/**
 * 
 */

//var obj = new object();
// 자바스크립트의 객체!!!!!
var car1 = {
	model : '아반떼',
	speed : 10,
	color : 'red',
	break1 : function(){
//		this.speed = this.speed - 10;
		this.speed -= 10;
	},
	accel : function(){
		this.speed += 10;
	}
};



////객체생성 클래스로 쓰고 싶을 때 함수의 이름을 대문자로 쓴다!!!
////1.함수를 만들고,
//function Car(model, speed, color){
////	this.model = '아반떼'; //제이슨과의 차이는 : 과 = 과 , 과 ; 이다!!
//	this.model = model; 	
//	this.speed = speed; 
//	this.color = color; 	
//	this.break1 = function(){
//		this.speed -= 10;
//	};
//	this.accel = function(){
//		this.speed += 10;
//	};
//}



function Car(model, speed, color){
	this.model = model; 	
	this.speed = speed; 
	this.color = color; 	
}

//메소드는 프로토타입에 집어넣는다!!
//객체에 프로토타입에 break1를 추가
Car.prototype.break1 = function(){
	this.speed -= 10;
};

Car.prototype.accel = function(){
	this.speed += 10;
};

//2.객체생성을 new를 붙이면 된다.
var car01 = new Car('아반떼', 50, 'red');
car01.break1();
console.log(car01.speed);

var car02 = new Car('쏘나타', 70, 'black');
car02.accel();
console.log(car02.speed);
var car03 = new Car('에쿠스', 100, 'blue');
//car01.model = '쏘나타'; //있으면 그놈 접근, 없으면 추가가 된다!!


console.log(car03.toString());



//console.log(model);
console.log(car01.model);
console.log(car02.model);
console.log(car03.model);

//var car02 = new Car();
//var car03 = new Car();
//var car2 = car1;

