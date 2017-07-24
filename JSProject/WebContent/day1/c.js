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

// {0 : 'a', 1 : 'b', 2 : 'c'}

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

// 갯수를 가르킴
console.log(drr.length);
console.log(drr);


var err = new Array(5,5,5,5); //초기값

// 갯수를 가르킴
console.log(err.length);
console.log(err);
