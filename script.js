class Animals {
  constructor(_petName, _ownerName) {
    this.petName = _petName;
    this.ownerName = _ownerName;
  }
}

class Specie extends Animals {
  constructor(_petName, _ownerName, _specie) {
    super(_petName, _ownerName);
    this.specie = _specie;
  }
}

class Breed extends Specie {
  constructor(_petName, _ownerName, _specie, _breed) {
    super(_petName, _ownerName, _specie);
    this.breed = _breed;
  }
}

let name = document.getElementById("pet-name");
let owner = document.getElementById("owner-name");
let species = document.getElementById("species");
let breed = document.getElementById("breed");
let breedToggle;

species.addEventListener("input", function (e) {
  let breedToggle;
  let alano, chiuaua, pastoreTedesco, cavalier, pitBull;
  let soriano, certosino, siamese, persiano, egiziano;

  if (e.target.value === "Dog") {
    breedToggle = "Dog";
    console.log(breedToggle);

    let oldoption = document.getElementById("oldoption");
    if (oldoption) oldoption.remove();

    alano = document.createElement("option");
    alano.innerText = "Alano";
    alano.value = "Alano";

    chiuaua = document.createElement("option");
    chiuaua.innerText = "Chiuaua";
    chiuaua.value = "Chiuaua";

    pastoreTedesco = document.createElement("option");
    pastoreTedesco.innerText = "Pastore Tedesco";
    pastoreTedesco.value = "Pastore Tedesco";

    cavalier = document.createElement("option");
    cavalier.innerText = "Cavalier";
    cavalier.value = "Cavalier";

    pitBull = document.createElement("option");
    pitBull.innerText = "Pit Bull";
    pitBull.value = "Pit Bull";

    breed.append(alano, chiuaua, pastoreTedesco, cavalier, pitBull);
  } else if (e.target.value === "Cat") {
    breedToggle = "Cat";
    console.log(breedToggle);

    let oldoption = document.getElementById("oldoption");
    if (oldoption) oldoption.remove();

    soriano = document.createElement("option");
    soriano.innerText = "Soriano";
    soriano.value = "Soriano";

    certosino = document.createElement("option");
    certosino.innerText = "Certosino";
    certosino.value = "Certosino";

    siamese = document.createElement("option");
    siamese.innerText = "Siamese";
    siamese.value = "Siamese";

    persiano = document.createElement("option");
    persiano.innerText = "Persiano";
    persiano.value = "Persiano";

    egiziano = document.createElement("option");
    egiziano.innerText = "Egiziano";
    egiziano.value = "Egiziano";

    breed.append(soriano, certosino, siamese, persiano, egiziano);
  }

  // Rimozione delle opzioni non più valide
  if (breedToggle === "Dog") {
    breed.remove(soriano, certosino, siamese, persiano, egiziano);
  } else if (breedToggle === "Cat") {
    breed.remove(alano, chiuaua, pastoreTedesco, cavalier, pitBull);
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let myPet = new Breed(name.value, owner.value, species.value, breed.value);

  let asideContainer = document.getElementById("asidecontainer");
  let divCart = document.createElement("div");
  divCart.className = "col col-4 col-md-3 col-lg-2 p-2 bg-white rounded-5 shadow-sm p-3";
  let h4Name = document.createElement("h4");
  h4Name.innerText = "Name";
  h4Name.className = "m-0 text-danger fw-bold";
  let pName = document.createElement("p");
  pName.innerText = myPet.petName;
  pName.className = "m-0 fst-italic text-white bg-dark p-1";

  let h4Owner = document.createElement("h4");
  h4Owner.innerText = "Owner";
  h4Owner.className = "m-0 text-danger fw-bold";
  let pOwner = document.createElement("p");
  pOwner.innerText = myPet.ownerName;
  pOwner.className = "m-0 fst-italic text-white bg-dark p-1";

  let h4Specie = document.createElement("h4");
  h4Specie.innerText = "Specie";
  h4Specie.className = "m-0 text-danger fw-bold";
  let pSpecie = document.createElement("p");
  pSpecie.innerText = myPet.specie;
  pSpecie.className = "m-0 fst-italic text-white bg-dark p-1";

  let h4Breed = document.createElement("h4");
  h4Breed.innerText = "Breed";
  h4Breed.className = "m-0 text-danger fw-bold";
  let pBreed = document.createElement("p");
  pBreed.innerText = myPet.breed;
  pBreed.className = "m-0 fst-italic text-white bg-dark p-1";

  divCart.append(h4Name, pName, h4Owner, pOwner, h4Specie, pSpecie, h4Breed, pBreed);
  asideContainer.appendChild(divCart);

  if (myPet.specie === "Dog") {
    divCart.classList.add("doggo");
  } else if (myPet.specie === "Cat") {
    divCart.classList.add("gatto");
  }
});
