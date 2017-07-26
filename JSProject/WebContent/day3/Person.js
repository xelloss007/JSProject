/**
 * Person 클래스
 */

function Person(name){
	this.name = name; //this 안쓰면 전역으로 빠져버림.
	this.setName = function(name){
		this.name = name;
	}	
	this.getName = function(name){
		return this.name;
	}
}