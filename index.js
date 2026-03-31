const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const inputEl = document.getElementById("input");
const submitEl = document.getElementById('submit');
const formEl = document.getElementById("form");

const num1 = Math.ceil(Math.random()* 10);
const num2 = Math.ceil(Math.random()* 10);
const correctAns = num1 * num2; 

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
   score = 0;
};

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiply ${num2}`;

if (score < 0) {
   scoreEl.style.color = "red";
}


formEl.addEventListener('submit', function() {
   // event.preventDefault();
   const userAns = +inputEl.value;
   

   if (correctAns === userAns){
      score++;
      updateLocalStorage ();
   } else {
      score--;
      updateLocalStorage ();
   }

   
})



function updateLocalStorage (){
   localStorage.setItem("score", JSON.stringify(score));
}

if(!score){
   localStorage.clear("score")
}