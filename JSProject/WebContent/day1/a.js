/**
 * 
 */

console.log('hello'); //자바스크립트는 문자 문자열 구분 없음.'',"" 같음.

var num = 5;
var num1 = 2;

var num2 = num / num1;

console.log('num2 : ' + num2);  // 그대로 실수연산
console.log('num2 : ' + Math.floor(num2)); //소수점 이하 버림.
console.log('num2 : ' + Math.round(num2)); //소수점 이하 반올림.

var str = 'korea';
num2 = str;
console.log('num2 : ' + num2);

console.log('num2 0번째 문자 : ' + num2[0]); //문자열을 기본적으로 배열이다.

str[4] = 'A';
console.log('num2 : ' + num2);

num2 = 3;  //3을 넣음 선생님은 음성에서 2라고 하심.

if(num2){	//semiboolean 때문에 0,unll,undefined는 거짓, 나머지는 전부다 참이 된다!!!!
	console.log('맞음');
}else{
	console.log('틀림');
}


//var a; // 널과 언디파인드라 다름
var a = null;


console.log('a : ' + a);


//p.40 예제
//이 방법은 잘 사용하지 않는다.
var foo = new Object();// 자바스크립트에서는 중괄호 열고 닫고를 {} 문자열을 객체라고 한다. 즉, 이것이 제이슨이다... 자바스크립트 오브젝트 로테이션 : JSON
console.log(foo); //출력값 : Object {}  

// foo 객체 프로퍼티 생성
foo.name = 'korea';
foo.age = 30;
//foo.gender = 'male';
console.log(foo); //중괄호 열고 닫고 객체를 json이라고 한다.

console.log(foo.age);
console.log(foo.sex); //출력값 : undefined  , 오류가 나지 않고 내부적인 프로퍼티가 추가가 된다.


//p.41
//위 40페이지보다 이 방법을 많이 사용함.
var bar = {
		name : 'japan',   //여기서 다른점은 = 이 아닌, : 이 된다!!!! 중요하다...
		age : 40,
		sex : true
};

//한줄로 써도 무방하다.
//var bar = {name : 'japan', age : 40, sex : true};

//변수명 .(쩜) 접근을 하면 된다.
console.log(bar.name);

bar.age = 90; //자바스크립트에서 그냥 사용할땐 =을 사용함.
console.log(bar);


//p.42 예제

var foo = {name : 'foo', major : 'computer science'};

//객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

//객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

//객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

//대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
console.log(foo.full-name);
console.log(foo.full);
console.log(name);