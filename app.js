let meName = document.querySelector(".nom");
let mePassword = document.querySelector(".motDepass");
let meEmail = document.querySelector(".mail");
let but = document.querySelector(".but");
let imo = document.querySelector("h1.imo");

meName.addEventListener("input", (a) => {});

mePassword.addEventListener("input", (b) => {});

meEmail.addEventListener("input", (c) => {});

but.addEventListener("click", (d) => {
  let first = meName.value;
  let second = mePassword.value;
  let num = second.replace(/[^0-9]/gi, "");
  let third = meEmail.value;
  let mike = third.indexOf("@");
  let John = third.indexOf(".");
  let empty = "";
  if (
    meName.value === empty ||
    mePassword.value === empty ||
    meEmail.value === empty
  ) {
    d.preventDefault();
    imo.innerHTML = "Votre formulaire est vide";
  } else if (
    first[0] === first[0].toLowerCase() ||
    first[0] == Number(first[0])
  ) {
    d.preventDefault();
    imo.innerHTML =
      "dans le champ nom il faudra la premiere lettre de son nom en majuscule";
  } else if (
    second.length < 8 ||
    second == second.toLowerCase() ||
    Number(num) == 0
  ) {
    d.preventDefault();
    imo.innerHTML =
      "dans le champs mot de passe , il faudra au minimum 8 caractère, une majuscule, et un chiffre";
  } else if (mike == -1 || John == -1) {
    d.preventDefault();
    imo.innerHTML =
      "dans le champs adresse email il faut verifier si l'adresse email a un '@' et un '.'";
  } else {
    d.preventDefault();
    imo.innerHTML = "Bienvenue l'artiste";
  }
});
