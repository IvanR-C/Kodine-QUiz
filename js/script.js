//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const answerHeader = quiz_box.querySelector(".answered");

//If start Quiz Button Clicked
start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo"); //show info box
}

//If Exit Button Clicked
exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
}

//If Continue Button Clicked
continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuestions(0);
  queCounter(1);
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let answeredQuestions = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  answeredQuestions = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  next_btn.style.display = "none";
}

quit_quiz.onclick = ()=>{
  window.location.reload();
}

//IF Next Button Clicked
next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){
  que_count++;
  que_numb++;
  showQuestions(que_count);
  queCounter(que_numb);
  next_btn.style.display = "none";
  }else{
    console.log("Quiz Completed!");
    showResultBox();
  }
}

//getting questions and options from the array
function showQuestions(index){
  const que_text = document.querySelector(".que_text");
  
  let que_tag = '<span>'+ questions[index].numb + ". " +questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                  +'<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                  +'<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                  +'<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option")
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");    
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer){
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if(userAns == correctAns){
    userScore ++;
    answeredQuestions ++;
    answerHeaderTag = '<div class="correctOnes">Correct Answers:<p>'+ userScore +'</p>/<p>'+ answeredQuestions +'</p></div>';
    answerHeader.innerHTML = answerHeaderTag;
    answer.classList.add("correct")
    console.log("Answer is Correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  }else{
    answeredQuestions ++;
    answerHeaderTag = '<div class="correctOnes">Correct Answers:<p>'+ userScore +'</p>/<p>'+ answeredQuestions +'</p></div>';
    answerHeader.innerHTML = answerHeaderTag;
    answer.classList.add("incorrect")
    console.log("Answer is Wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);
    //if answer is incorrect automatically select the correct answer
    for (let i = 0; i < allOptions; i++) {
      if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }  
  //once user selects disable all options
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");    
  }
  next_btn.style.display = "block";

}

function queCounter(index){
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function showResultBox(){
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //show quiz box
  result_box.classList.add("activeResult");//show result box
  const scoreText = result_box.querySelector(".score_text");
  scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
  scoreText.innerHTML =scoreTag;
}

 answerHeaderTag = '<div class="correctOnes">Correct Answers:<p>'+ userScore +'</p>/<p>'+ answeredQuestions +'</p></div>';
 answerHeader.innerHTML = answerHeaderTag;
