/**
 * Person 클래스
 */

//function Person(name){
//	this.name = name; //this 안쓰면 전역으로 빠져버림.
//}
function Person(name, age){
	if(name === undefined){
		this.name = '홍길동'
	}else{
		this.name = name;
	}
	if(age === undefined){
		this.age = '0'
	}else{
		this.age = age;
	}
	this.name = name; //this 안쓰면 전역으로 빠져버림.
	this.age = age;
}
Person.prototype.setName = function(name){
	this.name = name;
};
Person.prototype.getName = function(){
	return this.name;
};

Person.prototype.setAge = function(age){
	this.age = age;
};
Person.prototype.getAge = function(){
	return this.age;
};

//자바에서 자동완성이랑 비슷 투스트링!!!
Person.prototype.toString = function(){
	return 'name : ' + this.name;
};