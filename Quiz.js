const questions = [
  {
    question: "What does budgeting mean for teenagers?",
    answers: [
      {text: "Learning to wisely manage the money they earn or receive", correct: true},
      {text: "Making impulsive decisions about spending", correct: false},
      {text: "Setting unrealistic savings goals", correct: false},
      {text: "Ignoring income and expenses altogether", correct: false}
    ]
  },
  {
    question: "How can teenagers track their income?",
    answers: [
      {text: "By ignoring any money they receive", correct: false},
      {text: "By keeping a record of any money they receive", correct: true},
      {text: "By spending all their income immediately", correct: false},
      {text: "By asking their parents for money", correct: false}
    ]
  },
  {
    question: "What is a key step in smart spending?",
    answers: [
      {text: "Impulse buying", correct: false},
      {text: "Delaying gratification", correct: true},
      {text: "Ignoring needs and wants", correct: false},
      {text: "Spending without comparison shopping", correct: false}
    ]
  },
  {
    question: "What does comparison shopping involve?",
    answers: [
      {text: "Purchasing items without considering their value", correct: false},
      {text: "Researching prices and options before making a purchase", correct: true},
      {text: "Ignoring sales and discounts", correct: false},
      {text: "Only buying from the most expensive retailer", correct: false}
    ]
  },
  {
    question: "What is a way teenagers can earn money?",
    answers: [
      {text: "Participating in illegal activities", correct: false},
      {text: "Taking on part-time jobs or freelance work", correct: true},
      {text: "Borrowing money from friends", correct: false},
      {text: "Ignoring opportunities to earn money", correct: false}
    ]
  },
  {
    question: "What should teenagers prioritize in spending?",
    answers: [
      {text: "Non-essential wants over essential needs", correct: false},
      {text: "Understanding the difference between needs and wants", correct: true},
      {text: "Spending impulsively without considering their financial situation", correct: false},
      {text: "Ignoring their future goals", correct: false}
    ]
  },
  {
    question: "What is a recommended step in investing for teenagers?",
    answers: [
      {text: "Avoiding learning about investing concepts", correct: false},
      {text: "Ignoring the advice of financial advisors", correct: false},
      {text: "Taking the time to educate themselves about basic investing concepts", correct: true},
      {text: "Relying solely on luck for investment success", correct: false}
    ]
  },
  {
    question: "Why is guidance important in investing?",
    answers: [
      {text: "It limits potential investment opportunities", correct: false},
      {text: "It helps in making impulsive investment decisions", correct: false},
      {text: "It aligns with financial goals and risk tolerance", correct: false},
      {text: "It provides personalized advice and helps develop a strategy", correct: true}
    ]
  },
  {
    question: "What is a way teenagers can save money?",
    answers: [
      {text: "Delaying gratification", correct: true},
      {text: "Spending all income immediately", correct: false},
      {text: "Ignoring expenses altogether", correct: false},
      {text: "Not setting any savings goals", correct: false}
    ]
  },
  {
    question: "What is an example of non-essential spending?",
    answers: [
      {text: "Savings for future goals", correct: false},
      {text: "Buying gadgets or trendy clothes", correct: true},
      {text: "Investing in education", correct: false},
      {text: "Setting aside money for necessities", correct: false}
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('btn');  
    answerButtons.appendChild(button);
    if (answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("Incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct == "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = 'You Scored ' + score + ' out of ' + questions.length + '!';
  nextButton.innerHTML = "Feedback!";
  nextButton.style.display = "block";
}

function startQuizAgain(){
  window.location.href = "Feedback.html"; // Change "Introduction.html" to the desired HTML file
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else {
    startQuizAgain();
  }
});

startQuiz();
