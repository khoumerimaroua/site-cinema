
// verification quizz
const correctAnswers = ['a', 'b', 'c',];

document.getElementById('quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const userAnswers = Array.from(formData.values());

  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }

  const resultText = `Vous avez répondu correctement à ${score} questions sur ${correctAnswers.length}.`;
  const resultElement = document.createElement('p');
  resultElement.textContent = resultText;
  form.appendChild(resultElement);

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Recommencer';
  restartButton.addEventListener('click', () => {
    form.reset();
    resultElement.remove();
    restartButton.remove();
  });
  form.appendChild(restartButton);
});

// navbar

// animation popcorn

let popcorn = document.querySelector(".popcorn");
let navbar = document.querySelector(".navbar");
let accueil = document.querySelector(".accueil");
let bobine = document.querySelector(".bobine");
let clap = document.querySelector(".clap");

popcorn.onclick = function () {
  popcorn.classList.toggle("active");
  

  function createPopcorn() {
  for (let i = 0; i < 10; i++) {
    let popcornItem = document.createElement("div");
    popcornItem.classList.add("popcorn-animation");
    navbar.appendChild(popcornItem);
  }
  
}

if (popcorn.classList.contains("active")) {
    createPopcorn();
  } 
  else {
    clearPopcorn();
  }
};


function clearPopcorn() {
  let popcornItems = document.querySelectorAll(".popcorn-animation");
  popcornItems.forEach(function (popcornItem) {
    navbar.removeChild(popcornItem);
  });
}



// let animationIcone = ["accueil", "bobine", "clap"];



// function moveAccueil(){
// for (let i = 0; i < 1; i++){
//   let accueilItem = document.createElement("div");
//   popcornItem.classList.add("accueil");
//   navbar.appendChild(accueilItem);
// }

// if (popcorn.classList.contains("active")) {
//   moveAccueil();
// }
// else {
//   clearAccueil();
// }

// }

// function clearAccueil() {
//   let accueilItems = document.querySelectorAll(".accueil");
//   accueilItems.forEach(function (accueilItem) {
//     navbar.removeChild(accueilItem);
//   });
// }