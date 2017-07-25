/**
 * 
 */

////p.104

//var a = 10;
////var obj = {}
////obj.a = 20;

//function foo(){
////a = 20;
////var a = 20; //var이 있으면 출력값 10, 없으면 출력값 20.
//this.a = 20; //밖같의 전역변수를 가리키고 있음.
//}

//foo();
//console.log('a : ' + a);
//console.log('window.a : ' + window.a); //앞으론 window말고 global이 사용될 것임.
//console.log('this.a : ' + this.a);	//this는 윈도우를 가리킴.




//var value = 100;
//
//var obj = {
//		value : 1,
//		func1 : function(){	//자기 자신의 것 value : 1 가 +1되서 value : 2가됨.
//			this.value += 1;
//			console.log('func1 value : ' + this.value);
//			
//			func2 = function(){
//				this.value += 1;
//				console.log('func2 value : ' + this.value); //전역객체 : var value = 100을 가르킴.
//				
//				func3 = function(){
//					this.value += 1;
//					console.log('func3 value : ' + this.value);
//				}
//				func3();
//			}
//			func2();
//		}
//
//}


var value = 100;

var obj = {
		value : 1,
		func1 : function(){	
			this.value += 1;
			mythis = this;	//this를 바인딩 시킴.
			console.log('func1 value : ' + this.value);

			func2 = function(){
				mythis.value += 1;
				console.log('func2 value : ' + mythis.value); 

				func3 = function(){
					mythis.value += 1;
					console.log('func3 value : ' + mythis.value);
				}
				func3();
			}
			func2();
		}

}

obj.func1();