const button = document.getElementById('button');
const input = document.getElementById('input');
const name = document.getElementById('name');

button.addEventListener('click', () => {  

    name.innerText = input.value;
    input.value = "";
    
})