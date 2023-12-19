const button = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const answer = document.querySelector('.card-answer ');
const answer2 = document.querySelector('.card-answer2');
const answer3 = document.querySelector('.card-answer3');
const answer4 = document.querySelector('.card-answer4');



button.addEventListener('click', () => {
    answer.classList.toggle('active') 
})

button2.addEventListener('click', () => {
    answer2.classList.toggle('active') 
})

button3.addEventListener('click', () => {
    answer3.classList.toggle('active') 
})

button4.addEventListener('click', () => {
    answer4.classList.toggle('active') 
})






