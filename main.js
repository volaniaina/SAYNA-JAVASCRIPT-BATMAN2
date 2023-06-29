const questions = [
    {
        question: "Quel est l’autre nom de l’Homme-Mystère ?",
        response: [
          {
            text: "Le Sphinx",
            isGood: true
          },
          {
            text: "Le Saphir",
            isGood: false
          },
          {
            text: "Le Joker",
            isGood: false
          }
        ]
      },
      {
        question: "Quelle est l’ancienne profession de Harley Quinn ?",
        response: [
          {
            text: "Infimière",
            isGood: false
          },
          {
            text: "Psychiatre",
            isGood: true
          },
          {
            text: "Dentiste",
            isGood: false
          }
        ]
      },
      {
        question: "Quel est l’objet fétiche de Double Face ?",
        response: [
          {
            text: "Une pièce",
            isGood: true
          },
          {
            text: "Un livre",
            isGood: false
          },
          {
            text: "Un couteau",
            isGood: false
          }
        ]
      },
      {
        question: "Quelle ville Batman défend-il ?",
        response: [
          {
            text: "Gotham City",
            isGood: true
          },
          {
            text: "Starling City",
            isGood: false
          },
          {
            text: "Tananarive",
            isGood: false
          }
        ]
      },
      {
        question: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        response: [
          {
            text: "Georges Clooney",
            isGood: false
          },
          {
            text: "Val Kilmer",
            isGood: false
          },
          {
            text: "Mickael Keaton",
            isGood: true
          }
        ]
      },
      {
        question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
        response: [
          {
            text: "Matina et Adam",
            isGood: false
          },
          {
            text: "Elaine et Georges",
            isGood: true
          },
          {
            text: "Martha et James",
            isGood: false
          }
        ]
      },
      {
        question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
        response: [
          {
            text: "Le Pingouin",
            isGood: false
          },
          {
            text: "L'Homme mystère",
            isGood: true
          },
          {
            text: "Le Geek",
            isGood: false
          }
        ]
      },
      {
        question: " Qui interprète le Joker en 2008 ?",
        response: [
          {
            text: "Heath Legder",
            isGood: false
          },
          {
            text: "Haeth Ledger",
            isGood: false
          },
          {
            text: "Heath Ledger",
            isGood: true
          }
        ]
      },
      {
        question: "En quelle année Robin fait il sa première apparition ?",
        response: [
          {
            text: "1940",
            isGood: true
          },
          {
            text: "1936",
            isGood: false
          },
          {
            text: "1941",
            isGood: false
          }
        ]
      },
      {
        question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        response: [
          {
            text: "Oracle Huntress",
            isGood: true
          },
          {
            text: "Black Canary",
            isGood: false
          },
          {
            text: "L'Epouvantail",
            isGood: false
          }
        ]
      },
      {
        question: "Batman c’est aussi le nom d’une ville en...",
        response: [
          {
            text: "Islande",
            isGood: false
          },
          {
            text: "Turquie",
            isGood: true
          },
          {
            text: "Allemagne",
            isGood: false
          }
        ]
      },
      {
        question: "Qui a realisé Batman en 1966 ?",
        response: [
          {
            text: "Stanley Kubrick",
            isGood: false
          },
          {
            text: "Andy Warhol",
            isGood: false
          },
          {
            text: "Leslie Martinson",
            isGood: true
          }
        ]
      }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("suivant");

let questionCourant = 0;
let score = 0;

function demarrerQuiz(){
    questionCourantIndex = 0;
    score = 0;
    nextButton.innerHTML = "SUIVANT"
    showquestion();
}

function showquestion(){
    resetState();
    let questionCourant = questions[questionCourantIndex];
    let numQuestion = questionCourantIndex +1;
    questionElement.innerHTML = numQuestion + "." + questionCourant.question;

   questionCourant.response.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("boutton");
        answerButton.appendChild(button);
        if(answer.isGood){
            button.dataset.isGood = answer.isGood;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const bouttonSelect = e.target;
    const correct = bouttonSelect.dataset.isGood === "true";
    if(correct){
        bouttonSelect.classList.add("vrai");
        score ++;
    }
    else{
        bouttonSelect.classList.add("faux")
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.isGood === "true"){
            button.classList.add("vrai");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `Vous avez eu ${score} / ${questions.length}!`;
    nextButton.innerHTML = "RECOMENCER";
    nextButton.style.display = "block";
}

function handleNextButton(){
    questionCourantIndex++;
    if(questionCourantIndex < questions.length){
        showquestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(questionCourantIndex < questions.length){
        handleNextButton();
    }
    else{
        demarrerQuiz();
    }
})

demarrerQuiz();