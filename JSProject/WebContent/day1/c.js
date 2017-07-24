/**
 * 
 */

//p.53 배열
var arr = ['orange', 'red', 'green', 'blue']; //arr[] 자바와 다르다.

console.log(arr);

console.log(arr.length);
console.log('arr[0] : ' + arr[0]);
console.log('arr[4] : ' + arr[4]); //arr 4번째는 언디파인드가 나옴.
console.log('arr[3] : ' + arr[3]);

console.log(arr.length);

//자바는 불가능. 읽기 전용속성이기 때문에. 자바스크립트는 읽기전용이 아니야~~~ㄴ
arr.length = 10; //에러가 안남. 랭스가 10이 된 것임.

console.log('arr[3] : ' + arr[3]);

console.log('arr[9] : ' + arr[9]);

arr[20] ='black'; // 배열이 가변적으로 만들어짐. 사이 값은 undefined 만들어짐.

console.log('arr[20] : ' + arr[20]);

console.log(arr.length);


var brr = [2,3];

//var num = brr[0] + brr[1];  //출력값 : 5
//var num = brr[0] + brr[2];	//출력값 : NaN(낫오브넘버)
num = brr[0] + 'korea';	//출력값 : 2korea

console.log(' num : ' + num);

//p.56 예제3-17

var crr = ['zero', 'one', 'two'];

//{0 : 'a', 1 : 'b', 2 : 'c'}

crr.name = 'korea'; //프로퍼티 추가 가능.
for(name in crr){  //in 뒤에는 객체가 들어가야함
	console.log(name + ' : ' + crr[name]);
}
console.log('length : ' + crr.length);  //crr.name = 'korea'; 값은 프로퍼티가 새로 추가되는거지 값하고는 관련 없다.

for(i = 0; i < crr.length; i++){  //in 뒤에는 객체가 들어가야함
	console.log(i + ' : ' + crr[i]);
}

//어레이 리스트랑 많이 비슷함.
//랭스의 프로퍼티 값이 같이 커진다. 랭스에  + 추가 할 떄 쓰임.
crr.push('d');
for(i = 0; i < crr.length; i++){  //in 뒤에는 객체가 들어가야함
	console.log(i + ' : ' + crr[i]);
}


console.log(crr);
console.dir(crr);


//p.65
var drr = new Array(5); 	//length

//갯수를 가르킴
console.log(drr.length);
console.log(drr);


var err = new Array(5,5,5,5); //초기값

//갯수를 가르킴
console.log(err.length);
console.log(err);


//2차원 배열
var frr = [[2,3,4],[5,6,7,8]];

console.log(frr.length);

console.log(frr[0].length);  //3

console.log(frr[1].length);  //4

//frr 배열의 전체 합을 구하여 출력하라.
var sum = 0;

for(i = 0; i < frr.length; i++){
	for(j = 0; j < frr[i].length; j++){
		sum += frr[i][j];
	}
}
console.log(' sum : ' + sum);

//어레이객체를 이용해 생성자를 만들어서 배열 객체를 만듬.
//2차원 배열
var grr = new Array(3);
grr[0] = new Array(5);
grr[1] = new Array(5);
grr[2] = new Array(5);


//p.67
//연산자 함수 두개 다 지원이됨.
console.log(typeof grr);
console.log(typeof (grr));

//같은 데이터 타입을 쓰는게 맞는거다...
var hrr = [1, 't', true, {}];

console.log(typeof hrr[0]);
console.log(typeof hrr[1]);
console.log(typeof hrr[2]);
console.log(typeof hrr[3]);


function aaa(){
	return 'a';
}

console.log(typeof aaa); //함수 입니까? 물어볼 때 aaa 를 써야지 aaa()를 쓰면 안된다.
//console.log(typeof aaa()); // 출력값 : undefined


console.log('-------------------------------------');

var month = 4;

//월의 마지막 날을 구해서 출력하라.

var lastDay = 31;
switch(month){
case 1 :	case 3 :	case 5 :	case 7 :	case 8 :	case 10 :	case 12 :
	lastDay = 31;
	break;

case 2 :
	lastDay = 28;
	break;

default :
	lastDay = 30;
}

console.log('lastDay : ' + lastDay);

console.log('-------------------------------------');

var jumsu = 78;

//점수에 따른 수우미양가 구하기.
var status = '';
switch(Math.floor(jumsu / 10)){
case 10 :	case 9 :
	status = '수';
	break;
case 8 :
	status = '우';
	break;
case 7 :
	status = '미';
	break;
case 6 :
	status = '양';
	break;
default : 
	status = '가';
break;
}

console.log(status);

console.log('-------------------------------------');


//데이터와 데이터 타입 까지 같아야 같은걸로 봄 , 즉 === 개 짜리로 비교한다고 보면 된다.
// 실수 , 문자열, 트루 펄스 비교가 된다.
var num = '100';
//var num = 4.3;
switch( num ){
case '100' : 
	console.log('4.3');
	break;
//	case 4.3 : 
//	console.log('4.3');
//	break;
}