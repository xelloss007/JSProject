/**
 * C 클래스
 */

var arr = [3,4,5,6,7,8,9,3,4,5,5,6,7,6];

arr.sort(function(a,b){return b - a});
var brr = arr.slice(2, 5); //5개 중 2개 스킵후 3개 나오게 됨.
console.log(brr);


//arr.sort(function(a,b){return b - a});
//var brr = arr.sort(function(a,b){return b - a}).slice(0,5);
//console.log(arr.sort(function(a,b){return b - a}).slice(0,5));



//arr.sort();
//arr.forEach(); //괄호에 함수넣어야함

//어레이리스트에 add~ 랑 같음.
//arr.push(10);
//arr.push(11);
//arr.push(12);
//console.log(arr);

//어레이리스트에 마이너스~ 빼는 것
//arr.pop();
//arr.pop();
//console.log(arr);

//arr.reverse();
//console.log(arr);

//var s = arr.join('-'); //배열 기본은 , 바꾸려면 join()안에 바꾸고 싶은 거 넣으면됨.
//console.log(s);

//console.log(arr[0]);