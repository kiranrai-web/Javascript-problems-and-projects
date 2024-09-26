const questions = [
  {
    id: "1",
    question: "What is a closure?",
    answer:
      "A closure is a function that retains access to its lexical scope, even when executed outside that scope.",
  },
  {
    id: "2",
    question: "Difference between '==' and '==='?",
    answer: "'==' performs type coercion; '===' checks both value and type.",
  },
  {
    id: "3",
    question: "What is 'this'?",
    answer: "'this' refers to the context in which a function is called.",
  },
  {
    id: "4",
    question: "What are promises?",
    answer:
      "Promises represent the eventual completion or failure of an asynchronous operation.",
  },
  {
    id: "5",
    question: "What is event delegation?",
    answer:
      "A technique where a single listener is attached to a parent element for efficient event handling.",
  },
];

let questionContainer = document.querySelector(".boxContainer");
let questionsCollection = [];

const questionBoxes = () => {
  questions.forEach(({ question, answer }) => {
    let box = document.createElement("div");
    box.classList.add("box");
    let questionBox = document.createElement("div");
    questionBox.classList.add("question");
    let answerBox = document.createElement("div");
    answerBox.classList.add("answer");
    answerBox.classList.add("invisible");

    questionBox.innerHTML = `<strong>${question}</strong><span>+</span>`;
    answerBox.innerHTML = `<p> ${answer} </p>`;

    box.appendChild(questionBox);
    box.appendChild(answerBox);
    questionContainer.append(box);
    questionsCollection.push(box);

    // box.addEventListener(('click'),(e)=>{
    //   console.log(e.target)
    // })

    // box.addEventListener(('click'),e=>{
    //   // if (answerBox.classList.contains('invisible')) {
    //   //     answerBox.classList.remove('invisible');
    //   //     answerBox.classList.add('visible');
    //   //     // questionBox.lastChild.innerHTML = '-'
    //   // } else {
    //   //       answerBox.classList.add('invisible');
    //   //       answerBox.classList.remove('visible');
    //   //       // questionBox.lastChild.innerHTML = '+'
    //   //   }
    // questionBox.lastChild.innerHTML = answerBox.classList.contains('visible') ? '+' : '-';
    // answerBox.classList.toggle('invisible');
    // answerBox.classList.toggle('visible', !answerBox.classList.contains('invisible'));
    // })
  });
};


const handleSingleSelection = (e) => {
  const target = e.currentTarget;

  const questionSign = target.querySelector(".question span");
  const answerBox = target.querySelector(".answer");

  questionsCollection.forEach((box) => {
    if (box !== target) {
      const otherAnswer = box.querySelector(".answer");
      const otherSign = box.querySelector("span");
      otherAnswer.classList.add("invisible");
      otherAnswer.classList.remove("visible");
      otherSign.innerHTML = "+";
    }
  });

  answerBox.classList.toggle("invisible");
  answerBox.classList.toggle(
    "visible",
    !answerBox.classList.contains("invisible")
  );
  questionSign.innerHTML = answerBox.classList.contains("invisible")
    ? "+"
    : "-";
};

const handleMultipleSelection = (e) => {
  const target = e.currentTarget;

  const questionSign = target.querySelector(".question span");
  const answerBox = target.querySelector(".answer");

  answerBox.classList.toggle("invisible");
  answerBox.classList.toggle(
    "visible",
    !answerBox.classList.contains("invisible")
  );
  questionSign.innerHTML = answerBox.classList.contains("invisible")
    ? "+"
    : "-";
};

document.addEventListener("DOMContentLoaded", () => {
  questionBoxes();
  let multipleBtn = document.querySelector("button");
  
  const updateQuestionListeners = () => {
    questionsCollection.forEach((question) => {
      question.removeEventListener("click", handleSingleSelection);
      question.removeEventListener("click", handleMultipleSelection);

      if (multipleBtn.classList.contains('active')) {
        question.addEventListener("click", handleMultipleSelection);
      } else {
        question.addEventListener("click", handleSingleSelection);
      }
    });
  };

  multipleBtn.addEventListener("click", (e) => {
    let target = e.currentTarget;

    target.classList.toggle('active');
    
    updateQuestionListeners();
  });

  updateQuestionListeners();
});

