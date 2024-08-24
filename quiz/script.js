const questions = [
    {
        question: "Who is known as the Copy Ninja in the Naruto series?",
        answers:[
            {text: "Iruka Umino", correct:false},
            {text: "Kakashi Hatake", correct:true},
            {text: "Jiraiya", correct:false},
            {text: "Minato Namikaze", correct:false},
        ],
        image: "./images/question1.jpg"
    },
    {
        question: "What is the name of Naruto Uzumaki's ultimate jutsu?",
        answers:[
            {text: "Rasengan", correct:true},
            {text: "Shadow Clone", correct:false},
            {text: "Rasenshuriken", correct:false},
            {text: "Chidori", correct:false},
        ],
        image: "./images/question2.jpg"
    },
    {
        question: "Which of these characters is known for their ability to control sand in battles?",
        answers:[
            {text: "Rock Lee", correct:false},
            {text: "Shikamaru Nara", correct:false},
            {text: "Neji Hyuga", correct:false},
            {text: "Gaara", correct:true},
        ],
        image: "./images/question3.jpg"
    },
    {
        question: "What is the name of the Nine-Tailed Fox sealed within Naruto Uzumaki?",
        answers:[
            {text: "Kurama", correct:true},
            {text: "Shukaku", correct:false},
            {text: "Matatabi", correct:false},
            {text: "Isobu", correct:false},
        ],
        image: "./images/question4.jpg"
    },
    {
        question: "Which ninja village does Sasuke Uchiha initially belong to?",
        answers:[
            {text: "Hidden Mist Village", correct:false},
            {text: "Hidden Sand Village", correct:false},
            {text: "Hidden Leaf Village", correct:true},
            {text: "Hidden Cloud Village", correct:false},
        ],
        image: "./images/question5.jpg"
    },
    {
        question: "What is the name of the sword wielded by Zabuza Momochi?",
        answers:[
            {text: "Kubikiribōchō", correct:true},
            {text: "Hiramekarei", correct:false},
            {text: "Samehada", correct:false},
            {text: "Nuibari", correct:false},
        ],
        image: "./images/question6.jpg"
    },
    {
        question: "Who is Naruto's father and the Fourth Hokage of the Hidden Leaf Village?",
        answers:[
            {text: "Jiraiya", correct:false},
            {text: "Minato Namikaze", correct:true},
            {text: "Kakashi Hatake", correct:false},
            {text: "Hiruzen Sarutobi", correct:false},
        ],
        image: "./images/question7.jpg"
    },
    {
        question: "Who is the leader of the Akatsuki organization in Naruto?",
        answers:[
            {text: "Itachi Uchiha", correct:false},
            {text: "Deidara", correct:false},
            {text: "Kisame Hoshigaki", correct:false},
            {text: "Nagato", correct:true},
        ],
        image: "./images/question8.jpg"
    },
    {
        question: "What clan does Itachi Uchiha belong to?",
        answers:[
            {text: "Uzumaki Clan", correct:false},
            {text: "Uchiha Clan", correct:true},
            {text: "Hyuga Clan", correct:false},
            {text: "Senju Clan", correct:false},
        ],
        image: "./images/question9.jpg"
    },
    {
        question: "Who is Naruto's main rival throughout the series?",
        answers:[
            {text: "Sakura Haruno", correct:false},
            {text: "Kiba Inuzuka", correct:false},
            {text: "Sasuke Uchiha", correct:true},
            {text: "Rock Lee", correct:false},
        ],
        image: "./images/question10.jpg"
    },
];

const questionDisplay = document.querySelector(".question");
const answerList = document.querySelector(".ansList");
const nextBtn = document.querySelector(".nextBtn");
const images = document.querySelector(".image");
const questionNum = document.querySelector(".questionNum")
let questionIndex = 0;
let score =0;

const main =()=>{
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = ">";
    showQuestion();
}

const resetState=()=>{
    nextBtn.style.display ="none"
    while(answerList.firstChild){
        answerList.removeChild(answerList.firstChild);
    }
}

const showQuestion =()=>{
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionNum.innerHTML = `Question ${questionNo}/${questions.length}`
    questionDisplay.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer");
        answerList.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns)
    })

    images.src = currentQuestion.image;

}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerList.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}

const handleNextBtn=()=>{
    questionIndex++;
    if(questionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click",e=>{
    if(questionIndex < questions.length){
        handleNextBtn()
    }else{
        main();
    }
})

const showScore =()=>{
    resetState();
    questionDisplay.innerHTML = `You Score ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
    images.src = "";
}

main();