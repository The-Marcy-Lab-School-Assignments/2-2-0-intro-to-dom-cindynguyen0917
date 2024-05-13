const header = () => {
    const H1 = document.createElement("h1");
    H1.id = "main-heading"
    H1.textContent = "Hello World!"
    document.body.appendChild(H1)
};


const paragram = () => {
    const para = document.createElement("p");
    para.id = "main-text"
    para.className = "boring-text"
    para.textContent = "Look, I'm some text!"
    document.body.appendChild(para)
};








//Runners
header()
paragram()