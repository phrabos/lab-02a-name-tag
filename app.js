const button = document.getElementById('button');
const input = document.getElementById('input');
const name = document.getElementById('name');
const purpleBtn = document.getElementById('purple');
const redBtn = document.getElementById('red');
const pinkBtn = document.getElementById('pink');
const nameTag = document.getElementById('main');

button.addEventListener('click', () => {  

    name.innerText = input.value;
    input.value = "";
    
})

purpleBtn.addEventListener('click', () => {  

    nameTag.style.backgroundColor = "purple";
    
})

redBtn.addEventListener('click', () => {  

    nameTag.style.backgroundColor = "red";
    
})

pinkBtn.addEventListener('click', () => {  

    nameTag.style.backgroundColor = "magenta";
    
})