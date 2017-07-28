/**
 * d 클래스
 */

//빽틱!! 있는 그대로의 문자열!!!
// 크레이브 엑센트! ````````````` ~문결표시 있는 것
var str = 
`korea
japan
test`
;

console.log(str);

var name = '홍길동';
var age = 30;
var address = '서울';

//이름 : 홍길동 나이 : 30 주소 : 서울 

//console.log('이름  : ' + name + '나이 : ' + age + '주소 : ' + address);

//달러 표현식
console.log(`이름 : ${name} 나이 : ${age} 주소 : ${address} `);



//메소드체인으로 축약 시험에 나옴~~!!@~!~!~
function func(f){
	console.log('f1');
	f();
	console.log('f2');
}

func(/*function 삭제*/() => {  //=>를 써줌
	console.log('어쩌구 저쩌구');
});


//배열은 push로 추가하자..!!!
var arr = [];
arr.push(3);
arr.push(5);
arr.push(7);
arr.push(2);
arr.push(9);

//배열 전체 출력
arr.forEach(/*function*/(v) => {
	console.log(v);
});



//multi = /*function삭제*/(x, y) => {
//	return x * y;
//}

//한줄짜리면 {}와 return도 생략가능
multi = (x, y) => x * y;


console.log(multi(3,4));



function add(a, b = 0){//함수 초기화 값
	return a + b;
}

console.log('----------------------------------');
console.log(add());
console.log(add(3));
console.log(add(3,5));


var obj = {
		name : '홍길동',
		age : 30
}