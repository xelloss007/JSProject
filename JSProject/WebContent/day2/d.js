/**
 * 
 */

// 자바스크립트의 객체!!!!!
var car1 = {
	model : '아반떼',
	speed : 10,
	color : 'red',
	break : function(){
//		this.speed = this.speed - 10;
		this.speed -= 10;
	},
	accel : function(){
		this.speed += 10;
	}
};



//객체생성 클래스로 쓰고 싶을 때 함수의 이름을 대문자로 쓴다!!!
//1.함수를 만들고,
function Car(model, speed, color){
//	this.model = '아반떼'; //제이슨과의 차이는 : 과 = 과 , 과 ; 이다!!
	this.model = model; 	
	this.speed = speed; 
	this.color = color; 	
}

//2.객체생성을 new를 붙이면 된다.
var car01 = new Car('아반떼', 50, 'red');
var car02 = new Car('쏘나타', 70, 'black');
var car03 = new Car('에쿠스', 100, 'blue');
//car01.model = '쏘나타'; //있으면 그놈 접근, 없으면 추가가 된다!!


//console.log(model);
console.log(car01.model);
console.log(car02.model);
console.log(car03.model);
console.log(car01.speed);
console.log(car02.speed);
console.log(car03.speed);
console.log(car01.color);
console.log(car02.color);
console.log(car03.color);

//var car02 = new Car();
//var car03 = new Car();
//var car2 = car1;