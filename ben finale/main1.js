const form = document.querySelector("form");
const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const motdepasseInput = document.getElementById("motdepasse");
const notification = document.querySelector(".notification");

form.addEventListener("submit", function (event) {
  // Empêcher la soumission du formulaire si des champs sont vides
  if (
    nomInput.value.trim() === "" ||
    prenomInput.value.trim() === "" ||
    motdepasseInput.value.trim() === ""
  ) {
    alert("Veuillez remplir tous les champs");
    event.preventDefault();
  } else {
    // Afficher une notification de succès dans un élément HTML
    notification.innerHTML = "Votre demande a été envoyée avec succès !";
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
    }, 3000);
    event.preventDefault();
  }
  // Réinitialiser les champs du formulaire
  form.reset();
  event.preventDefault();
});

// function createPopcorn() {
//   var popcorn = document.createElement("img");
//   popcorn.src = "rain-popcorn.png";
//   popcorn.style.position = "absolute";
//   popcorn.style.top = "0px";
//   popcorn.style.left = Math.floor(Math.random() * 350) + "px";
//   document.getElementById("popcorn-container").appendChild(popcorn);

//   var fall = setInterval(function () {
//     var top = parseInt(popcorn.style.top);
//     if (top > 350) {
//       clearInterval(fall);
//       popcorn.parentNode.removeChild(popcorn);
//     } else {
//       popcorn.style.top = top + 2 + "px";
//     }
//   }, 10);
// }
// setInterval(createPopcorn, 500);
