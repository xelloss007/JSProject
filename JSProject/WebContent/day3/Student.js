/**
 * 
 */

////생성자 오버로딩 : 학번만 or 이름과 학번
//function Student(hakbun){
//	this.hakbun = hakbun;
//}
//function Student(name, hakbun){
//	//퍼슨이라는 함수를 호출해줘라!!
//	Person.call(this, name);
////	this.name = name;
//	this.hakbun = hakbun;
//}

//가장 많은 인자가 있는 함수를 사용하자!!
function Student(name, age, hakbun){
	//자바에서 슈퍼와 같음.
	Person.call(this, name, age);
	this.hakbun = hakbun;
}


//프로토타입에 추가, porson의 객체와 name 을 가져옴.
//자바에서 익스텐드와 같음
//순서가 중요하다!!!!!!
Student.prototype = new Person();
Student.prototype.setHakbun = function(hakbun){
	this.hakbun = hakbun;
};
Student.prototype.getHakbun = function(){
	return this.hakbun;
};

Student.prototype.toString = function(){
	return 'name : ' + this.name
	+', age : ' + this.age + ', hakbun : ' + this.hakbun;
};