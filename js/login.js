function login(){ // 로그인
	let form = document.querySelector("#form_main");
	let id = document.querySelector("#floatingInput");
	let password = document.querySelector("#floatingPassword");
	let check = document.querySelector("#idSaveCheck");
	
	form.action = "index_login.html";
	form.method = "get";
	
	if(check.checked == true){ // 아이디 체크 O
		alert("쿠키를 저장합니다.");
		setCookie("id", id.value, 1); // 1일 저장
		alert("쿠키 값:" + id.value);
	}
	else{ // 아이디 체크 X
		setCookie("id", id.value, 0); // 날짜를 0 - 쿠키 삭제
	}
	
	if(id.value.length === 0 || password.value.length === 0){
		alert("아이디와 비밀번호를 모두 입력해주세요.");
	}else if(!login_check(id.value, password.value)) {
		alert("올바른 이메일과 패스워드 형식을 입력해주세요.");
	}else {
		form.action = "../index_login.html";
		form.method = "get";
		session_set(); // 세션 생성
		form.submit();
		login_count();
	}
}

function logout(){
	session_del(); // 세션 삭제
	location.href='../index.html';
}

function get_id(){
	if (true){
		decrypt_text();
	}
	else{
	var getParameters = function(paramName){ // 변수 = 함수(이름)
	var returnValue; // 리턴값을 위한 변수 선언
		var url = location.href; // 현재 접속 중인 주소 정보 저장
		var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&'); // ?기준 slice 한 후 split 으로 나눔
		for(var i = 0; i < parameters.length; i++){
			var varName = parameters[i].split('=')[0];
			
			if (varName.toUpperCase() == paramName.toUpperCase()){
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue); // 나누어진 값의 비교를 통해 paramName으로 요청된 데이터의 값만 return
			}
		} // 2중 for문 끝
	} // 함수 끝
	alert(getParameters('id') + '님 방갑습니다!'); // 메세지 창 출력
	}
}

function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
    let id = document.querySelector("#floatingInput");
    let check = document.querySelector("#idSaveCheck");
    let get_id = getCookie("id");
    
    if(get_id) { 
    id.value = get_id; 
    check.checked = true;
    }
	session_check(); // 세션 유무 검사
}

function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName("head")[0];
	var s = document.createElement("script");
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수

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