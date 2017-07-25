/**
 * 
 */

console.log('test');

//json리터럴 있때만 :(콜론)이 들어간다.
var obj = {
	name : 'korea',	//프로퍼티는 문자열도 가능하지만,
	setName : function(name){	// 함수도 가능
		name = name; //인자 변수를 가르킴.
		this.name = name; //함수내에 지역변수를 가르킴.
	}
};


//함수 리터럴
//무기명함수 = 어노미어스함수 (fna 생략시)
var fna = function /*fna생략*/(){
	
}

fna();


//함수는 객체로도 취급, 값으로도 취급이 된다.
var foo = function(a){
	a();
	//	console.log(a + 1);
}

//var num = 10;
var num = function(){
	console.log('aaaa');
};
//foo(num);

//함수의 이름없이 전달하는것을 어노미어스 펑션이라고 한다.
foo(function(){
	console.log('aaaa');
});



//p.83 4.2.2.3 리턴값으로 활용
//json리터럴 있때만 :(콜론)이 들어간다. 즉, 이건 = 사용가능.
var foo1 = function(){
//	var fn = function(){ //함수는 값(밸류)으로 처리가 가능하다.
//		console.log('fn');
//	};
	return function(){ 
		console.log('fn');
	};
}

//리턴값이 있으니깐  앞에 foo2로 받을 수 있다.
var foo2 = foo1();

foo2();	//foo2도 함수 이니깐 호출 가능.



//p.85
var foo3 = function(a, b, c){
	return 3 + 2;
}

console.dir(foo3);

