/*        달력을 위한 변수선언--전 쌤        */
//var dt=0;//요일을 돌려줄놈
var  monthdays="312831303130313130313031" //각월의 마지막날 

var  now=new Date();             // 현재 일자, 시간
var  day=now.getDate();          // 일자
var  wkdy=now.getDay();          // 요일 (0=일요일, 1=월요일, ...)
// 월   (0=1월, 2월=1, ....)
var  year=now.getFullYear();         // 년
var yy=year
// 현재 일자, 시간 복사
var month=now.getMonth();       // 월   (0=1월, 2월=1, ....)
var originM=month
var mm=month

var	  startday=now   
startday.setDate(1);        // 복사된 일자, 시간에 일자를 1일로 설정
var	  wkdy1=startday.getDay();    // 현재 달 1일의 요일을 얻음
var monthEnd=monthdays.substring((month*2),(month*2+2));   //실제 해당 개월의 일수	
if ((month==1)&&                     // 월이 2월(1)이며,
    (((year %4==0)&&(year %100 !=0))    // (4와 100으로 나눠 나머지가 없거나 
    || (year % 400 ==0 ))) monthEnd="29";				  
	
var now2=new Date();             // 현재 일자, 시간
var month2=now2.getMonth();
var nowMonth=month; //
var nowY=0
var nowM=0
/* 여기까지 달력을 위한 변수선언 */

/* 달력표 그리기 시작 -전 쌤*/
function test() { 
    var aaa = document.getElementById("aaa");
            
    var dal = "<table border=1 width=100%>"
    for (var i = 1; i < 7; i++) {
        dal=dal+"<tr>";
        for (var j = 1; j < 8; j++) {
            dal = dal + "<td  id='day" + (j - 7 + (7 * i)) + "' onclick='clickDay("+ (j - 7 + (7 * i)) +")' class='btn'>_</td>"; //달력 한칸 한칸 아이디 부여하고, 이벤트 설정하기
        }
        dal=dal+"</tr>";
    }
    dal=dal+"</table>"
    aaa.innerHTML = dal;
    getM()
}
/* 달력표 그리기 끝 -전 쌤*/

/* 날짜 칸누르면 해당 날짜 반환해주는 함수 시작-전 쌤 */
function clickDay(idNum) {
    var dayCell = document.getElementById("day" + idNum);
    if(dayCell.innerHTML != "_") //날짜가 있는 칸만 날짜 반환하기
        alert(nowY+"년 "+nowM+"월 "+dayCell.innerHTML+"일");
}
/* 날짜 칸누르면 해당 날짜 반환해주는 함수 끝-전 쌤 */


/* 해당 달의 날짜 그려주는 함수 시작- 전 쌤 */
function getM(){  	
    for(var i=1;i<43;i++){
        var dayCell=document.getElementById("day"+i);
        dayCell.style.visibility = "hidden"; //일단 안보이게 하기(전 쌤)
    }

    //달력로직(전 쌤)
    var monthdays = "312831303130313130313031" //각월의 마지막날 (전 쌤)
    var now = new Date();             // 현재 일자, 시간(전 쌤)
            
    month=now.setMonth(month); 
    var day = now.getDate();          // 일자(전 쌤)
    var wkdy = now.getDay();          // 요일 (0=일요일, 1=월요일, ...)(전 쌤)
    // 월   (0=1월, 2월=1, ....)
    // 년
    // 현재 일자, 시간 복사
            
    month=now.setMonth(nowMonth)
    month = now.getMonth();       // 월   (0=1월, 2월=1, ....)(전 쌤)
    var  year=now.getFullYear();      
    var	  startday=now   
    startday.setDate(1);        // 복사된 일자, 시간에 일자를 1일로 설정(전 쌤)
    var wkdy1 = startday.getDay();    // 현재 달 1일의 요일을 얻음(전 쌤)
    var monthEnd = monthdays.substring((month * 2), (month * 2 + 2));   //실제 해당 개월의 일수	(전 쌤)
    if ((month == 1) &&                     // 월이 2월(1)이며,(전 쌤)
        (((year % 4 == 0) && (year % 100 != 0))    // (4와 100으로 나눠 나머지가 없거나 (전 쌤)
        || (year % 400 ==0 ))) monthEnd="29";	
          
    var now2 = new Date();             // 현재 일자, 시간	(전 쌤)
    var month2=now2.getMonth();
    var year2 = now2.getFullYear();	           

    for (i = 1; i < 43; i++) {
        var dayCell = document.getElementById("day" + i);
        if(i==1 || i==8 || i==15||i==22||i==29||i==36){                   
            dayCell.style.backgroundColor = "#ffcccc"; //일요일 배경색(전 쌤)       
        } else if (i == 7 || i == 14 || i == 21 || i == 28 || i == 35 || i == 42) {
            dayCell.style.backgroundColor = "#eeffcc"; //토요일 배경색(전 쌤)    
        }else{                   
            dayCell.style.backgroundColor="#ffffff"; //나머지 배경색(전 쌤) 
        }
    }
	
    for (i = 1; i <= Number(monthEnd) ; i++) {   // 일자 칸 1 부터 월 길이까지 반복(전 쌤) 
        var j = i + wkdy1;  //빈 날짜만큼 더해줘서 변수값에 집어넣기(전 쌤) 	
        var dayCell = document.getElementById("day" + j);
        dayCell.innerHTML = i;//각 표칸에 날짜 넣기(전 쌤) 
        dayCell.style.visibility = "visible"; //날짜 있는 칸은 보이게 하기(전 쌤)
        if (yy == year && i == day && month + 1 == (month2 + 1)) {  //만약 오늘날짜와 만나면  (전 쌤)                 
            dayCell.style.fontWeight = "bold";
            dayCell.style.textDecoration = "underline";
        } else {// 나머지것들은 디폴트로	(전 쌤) 	  
	
	
        }// 일자 넣고 칸마감(전 쌤) 
    }
    nowY = year
    nowM = month + 1

    var monthCell = document.getElementById("monthCell");
    monthCell.innerHTML = month + 1 + " 월";

    var yearCell = document.getElementById("yearCell");
    yearCell.innerHTML = nowY + "년";
}

function prevMonth(){
	
    nowMonth-=1

    getM()
    trace(nowMonth)
}

function nextMonth(){
    nowMonth+=1
	
	
	
    getM()
    trace(nowMonth)
}