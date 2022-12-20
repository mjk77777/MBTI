// const : 상수로서 변수선언 cf) var
// querySelector : css 선택자
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result")
const endPoint = 12; // 총 질문 개수
const select = [0,0,0,0,0,0,0,0,0,0,0,0];  // value 값들

function calResult(){ // 결과 계산 => 가장 많이 선택된 type을 보여줌
    /**var pointArray = [
        { name : 'mouse', value: 0, key : 0},
        { name : 'cow', value: 0, key : 1},
        { name : 'tiger', value: 0, key : 2},
        { name : 'rabbit', value: 0, key : 3},
        { name : 'dragon', value: 0, key : 4},
        { name : 'snake', value: 0, key : 5},
        { name : 'horse', value: 0, key : 6},
        { name : 'sheep', value: 0, key : 7},
        { name : 'monkey', value: 0, key : 8},
        { name : 'chick', value: 0, key : 9},
        { name : 'dog', value: 0, key : 10},
        { name : 'pig', value: 0, key : 11}
    ]
     for(let i=0; i<endPoint; i++){
       var target = qnaList[i].a[select[i]];
       for ( let j=0; j < target.type.length; j++){
         for( let k=0; k < pointArray.length; k++){
            if(target.type[j] === pointArray[k].name){
                pointArray[k].value += 1;  // value 값이 가장 높은 게 결과야
            }
         }
       }
     }
     var resultArray = pointArray.sort(function(a,b){  // pointArray에서 value 값을 기준으로 높은 순으로 "정렬" 해서 새로운 resultArray를 정립하겠다!
       if(a.value > b.value){
         return -1;   // -1을 반환하면 a 를 b 보다 낮은 색인(인덱스)으로 정렬. 즉, a 가 먼저 나옴
       }
       if(a.value < b.value){
         return 1;  // 1을 반환하면 b를 a 보다 낮은 색인으로 정렬.
       }
        return 0;
     });  */

     var result = select.indexOf(Math.max(...select)); // indexOf 는 index 값을 반환 // ...select => 전개구문 (선택한 배열을 펼쳐)
     return result;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid'); // class 추가하기
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {  // 메인 애니메이션이 끝났을때
      qna.style.display = "none";
      result.style.display = "block";
    }, 450)})

    console.log(select);
    setResult();
}
function addAnswer(answerText,qIdx,idx) {
   var a = document.querySelector(".answerBox");
   var answer = document.createElement('button'); //button 태그에 class나 id 값이 없어 querySelector 로 불러올수 없음
   answer.classList.add('answerList'); // 클래스 이름 주기
    answer.classList.add('my-3'); // margin과 padding에 대한 속성값도 html이 아닌 여기서 주어야 함
     answer.classList.add('py-3');
      answer.classList.add('mx-auto');
        answer.classList.add('fadeIn');

   a.appendChild(answer); // button이 a에 종속될 수 있도록 관계정의 // <div>   <button>  </div>
   answer.innerHTML = answerText;
   answer.addEventListener("click",function(){
      var children = document.querySelectorAll('.answerList'); // 모든 버튼을 변수에 담아줌
      for(let i=0; i < children.length; i++){
        children[i].disabled = true; // 버튼을 비활성화
        children[i].style.WebkitAnimation = "fadeOut 0.5s"; // 크롬 버전
        children[i].style.animation = "fadeOut 0.5s";

      }
      setTimeout(() => {  // 버튼 누르는 순간에 select[] 배열의 값들 증가시켜줄거야
        var target = qnaList[qIdx].a[idx].type;
        for ( let i=0; i < target.length; i++){
          select[target[i]] += 1;
        }
        for(let i=0; i < children.length; i++){
          children[i].style.display = 'none';
        }
          goNext(++qIdx); // 위의 반복문이 끝나면  qIdx 값을 1 증가시켜
      },450 ) //0.95 초 쯤 fadeOUt이 진행됐을 때 display none 반복

   },false);
}

function goNext(qIdx){
  if(qIdx === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i); // 버튼 만들어주기 // qIdx 도  변수로 넘겨주기 => 다음 질문으로 넘어가기위해
  }
  var status = document.querySelector('.statusBar');
  status.style.width= (100/endPoint) * (qIdx + 1) + '%'; // 진행 바 %구하기

}


function begin(){

  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {  // 메인 애니메이션이 끝났을때
      main.style.display = "none";
      qna.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);



  //main.style.display = "none";
  //qna.style.display = "block";
}
