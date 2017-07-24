/**
 * 
 */

// 

for(i = 0; i < 9; i++){
	for(j = 0; j < 9; j++){
		if(i!= 0){
			console.log((i + 1) + 'x' + (j + 1) + '=' + ((i + 1) * (j + 1)));
		}
	}
}
//
//
console.log('------------------------------------------------------------');

var student = new Array(5);
for(i = 0; i < 5; i++){
	student[ i ]= {
			hakbun :'',
			name : '',
			age : 0,
			kor : 0,
			eng : 0,
			math : 0,
			tot : 0,
			avg : 0,
			grade : '',

			setHakbun : function(hakbun){
				this.hakbun = hakbun;
			},
			setName : function(name){
				this.name = name;
			},
			setAge : function(age){
				this.age = age;
			},
			setName : function(name){
				this.name = name;
			},
			setKor : function(kor){
				this.kor = kor;
			},
			setEng : function(eng){
				this.eng = eng;
			},
			setMath : function(math){
				this.math = math;
			},
			setTot : function(tot){
				this.tot = tot;
			},
			setAvg : function(avg){
				this.avg = avg;
			},
			setGrade : function(grade){
				this.grade = grade;
			},
			getHakbun : function(){
				return this.hakbun;
			},
			getName : function(){
				return this.name;
			},
			getAge : function(){
				return this.age;
			},
			getKor : function(){
				return this.kor;
			},
			getEng : function(){
				return this.eng;
			},
			getMath : function(){
				return this.math;
			},
			getTot: function(){
				return this.tot;
			},
			getAvg: function(){
				return this.avg;
			},
			getGrade : function(){
				return this.grade;
			},

			doTot : function(){
				return this.tot = this.kor + this.eng + this.math;
//				return this.tot;
			},
			doAvg : function(){
				return this.avg = (Math.floor((this.tot) / 3));
			},
			doGrade : function(){
				switch(Math.floor(this.doAvg() / 10)){
				case 10 :	case 9 :
					this.grade = 'A';
					break;
				case 8 :
					this.grade = 'B';
					break;
				case 7 :
					this.grade = 'C';
					break;
				case 6 :
					this.grade = 'D';
					break;
				default : 
					this.grade = 'F';
					break;
				}
				return this.grade;
			},
			Info : function(){
				return 'hakbun : '+ this.hakbun + ' name : ' + this.name + ' age : '+ this.age 
				+ ' kor : '+ this.kor + ' eng : ' + this.eng + ' math : ' + this.math
				+ ' tot : '+ this.tot  +' avg : ' + this.avg + ' grade : ' + this.grade
			}
	};


}

console.log(student.length);
student[0].setHakbun('11111');
student[0].setName('이문규');
student[0].setAge(31);
student[0].setKor(100);
student[0].setEng(100);
student[0].setMath(69);
student[0].doTot();
student[0].doAvg();
student[0].doGrade();

console.log(student[0].Info());

console.log(student.length);
student[1].setHakbun('22222');
student[1].setName('안성호');
student[1].setAge(20);
student[1].setKor(60);
student[1].setEng(70);
student[1].setMath(70);
student[1].doTot();
student[1].doAvg();
student[1].doGrade();

console.log(student[1].Info());

console.log(student.length);
student[2].setHakbun('33333');
student[2].setName('김민주');
student[2].setAge(26);
student[2].setKor(90);
student[2].setEng(80);
student[2].setMath(65);
student[2].doTot();
student[2].doAvg();
student[2].doGrade();

console.log(student[2].Info());

console.log(student.length);
student[3].setHakbun('44444');
student[3].setName('이요한');
student[3].setAge(23);
student[3].setKor(10);
student[3].setEng(10);
student[3].setMath(70);
student[3].doTot();
student[3].doAvg();
student[3].doGrade();

console.log(student[3].Info());

console.log(student.length);
student[4].setHakbun('55555');
student[4].setName('원상진');
student[4].setAge(34);
student[4].setKor(100);
student[4].setEng(100);
student[4].setMath(100);
student[4].doTot();
student[4].doAvg();
student[4].doGrade();

console.log(student[4].Info());


