# WEB_20221007
웹프로그래밍 (1) 소스코드
## 2023년 5월 31일 13주차 홈페이지 수정 완료

## 문제 풀기
[문제1](https://github.com/dbals4003/WEB_20221007/blob/main/screen_shot/3%20Quiz.PNG, "3주차 문제")
```
<table style="margin-left: auto; margin-right: auto;" border="1" width="500">
			<! 테이블을 정의합니다.>
			<caption align="top">인기 검색어</caption> <! 테이블 제목>
			<tbody>
				<tr><td bgcolor="green" width="50"><b>영화</b></td><td width="80" bgcolor="blue">아저씨</td><td width="80" bgcolor="blue">아저씨</td><td width="100">어머니</td><td width="100">헬머니</td><td>할부지</td></tr> <! 1행 추가.>
				<tr bgcolor="red"><td width="50">음악</td><td>KPOP</td><td>JPOP</td><td>ROCK1<td>ROCK2</td><td rowspan="2">EUROBEAT</td></tr> <! 2행 추가.>
				<tr bgcolor="red"><td colspan="2" width="50">게임</td><td>LOL</td><td>WOW</td><td>SUDDEN</td></tr> <! 3행 추가.>
				<tr><td colspan="6"><b>외부 사이트 링크</b></td></tr>
				<tr><td colspan="2"><a href="https://www.naver.com/index.html" target="_blank">네이버</a></td><td bgcolor="Yellow" colspan="2"><a href="https://www.daum.net/" target="_blank">다음</a></td><td bgcolor="#7206E0" colspan="2"><a href="https://www.nate.com/" target="_blank"><font color="#ffffff">네이트</font></a></td></tr>
			</tbody>
		</table>
```

[문제2](https://github.com/dbals4003/WEB_20221007/blob/main/screen_shot/6%20Quiz.PNG, "6주차 문제")
```
document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];
var bad_word_list = ["바보", "멍청이", "나쁜놈"];

console.log(ban_word_list.length);

function search_message() {
    let search_str = document.querySelector("#search_txt"); // 변수에 저장

    if (search_str.value.length === 0) {
        alert("검색어가 비었습니다. 입력해주세요");
    }

    var isFiltered = false;

    for (var i = 0; i < bad_word_list.length; i++) {
        if (search_str.value === bad_word_list[i]) {
            alert("비속어가 포함되어있습니다. 검색어를 다시 입력하세요.");
            isFiltered = true;
            break;
        }
    }

    if (!isFiltered) {
        alert("검색을 수행합니다!");
        search_array.push(search_str.value);
        if (search_array.length > 2) {
            search_array.shift();
        }
        let text = document.getElementById("search_message").innerHTML = search_array.toString(); //값 변환
        document.querySelector("#form_main").submit();
        console.log(search_str.value);
    }
    console.log(search_array.length);
}
```

[문제3](https://github.com/dbals4003/WEB_20221007/blob/main/screen_shot/7%20Quiz.PNG, "7주차 문제")
```
var close_time; //시간 정보
var close_time2 = 10; // 10초 설정

clearTimeout(close_time); // 재호출 정지
close_time = setTimeout("close_window()", 10000); // 1/1000 초 지정, 바로 시작
show_time(); // 실시간 시간 보여주기

function show_time(){
	let divClock = document.getElementById('Time');
	divClock.innerText = "남은 시간은" + close_time2 + "초 입니다."; //10초 삽입 시작 
	close_time2--; // 1초씩 감소
	setTimeout(show_time, 1000); // 1초마다 갱신
}

function close_window(){ // 함수 정의
	window.close(); // 윈도우 닫기
}

//window.onload = showWindow;
```

[문제4](https://github.com/dbals4003/WEB_20221007/blob/main/screen_shot/9%20Quiz.PNG, "9주차 문제")
```
// 아이디 패스워드 정규식필터링
function login_check(email, password){
	const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/;
	if (!emailRegex.test(email)){
		return false;
	}
	if (!passwordRegex.test(password)){
		return false;
	}
	return true;
}
```