const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent)
};

const getAllMainText = () => {
  let text = document.querySelectorAll(".main-text")
  console.log(text)
  let array = []
  for (let i = 0; i < text.length; i++) {
    array.push(text[i].textContent)
  }
  console.log(array.join(","))
};

const setSubtitleText = () => {
  document.querySelector("#subtitle").textContent = "This is a subtitle!"
};

const modifyDivClassList = () => {
  let list = document.querySelector("#modify-classes").classList;
  list.remove("bad-class")
  list.add("new-class")
};

const addH2 = () => {
  const H2 = document.createElement("H2");
  H2.id = "h2-test"
  H2.textContent = "Another one!"
  const body = document.querySelector("body");
  body.appendChild(H2)
};

const removeOldInfo = () => {
  document.querySelector("#old-info").remove()
};

const makeAlphabet = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  const listOfLetters = document.querySelector("#alphabet")
  const numLetters = listOfLetters.dataset.numLetters
  for (let i = 0; i < numLetters; i++) {
    let newLi = document.createElement('li');
    newLi.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`
    listOfLetters.appendChild(newLi)
  }
};

const makeBio = () => {
  bio = document.querySelector("#my-bio")
  bio.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
