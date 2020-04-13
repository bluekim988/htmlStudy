// w3.css에서 정의된 칼라 클래스를 배열에 담는다.
var arr = ['w3-text-deep-orange', 'w3-text-orange','w3-text-amber', 'w3-text-yellow', 'w3-text-khaki', 'w3-text-lime', 'w3-text-light-green',
		'w3-text-green', 'w3-text-teal', 'w3-text-blue'];


// 문자열 담을 변수를 만든다
var str = '';

// 열번 반복해서 태그를 채워준다.

for(var i = 0; i < 10; i++) {
	str += 
		'<div class="w3-button m2 w3-center w3-border '+
		arr[i]	+
		'" style=" background-color: rgb(0, 0, 0, 0.'
		+ i +' )">'+
		(i+1) + ' 번 버튼</div>';
}

// 태그 찾아서 채워준다
document.getElementById('cont').innerHTML = str;


var no;
alert(typeof no);

var no1 = null;
alert(typeof no1);

/*
	자바스크립트에서의 변수 활용
	
		조건식에 변수만 사용하는 경우는
			예]
				var no = 10;
				if(no) {
				}
		변수에 데이터가 채워져 있는 경우는 True
		null, undefined 상태이면 False 를 반환한다.
		
*/

var no = prompt('숫자를 입력하세요!');
if(!no) {
	//이 경우는 no 변수의 데이터가 없거나 아직 정해지지 않은 상태이면 실행한다.
	no = '입력값이 없습니다.';
}

alert(no);