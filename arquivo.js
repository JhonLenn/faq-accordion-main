
//funçao mostrar resposta

var question =document.querySelectorAll('.card-question');
var answer = document.querySelectorAll('.card-answer');



question[0].addEventListener('click', () => {
    answer[0].classList.toggle('active');
})

question[1].addEventListener('click', () => {
    answer[1].classList.toggle('active') 
})

question[2].addEventListener('click', () => {
    answer[2].classList.toggle('active') 
})

question[3].addEventListener('click', () => {
    answer[3].classList.toggle('active') 
})


// funçao trocar icone

function toggleIcon(element){
    var button = element.querySelector('button');
    var icon = button.querySelector('img');

    if(icon.src.includes('icon-plus.svg')){
        icon.src = 'assets/images/icon-minus.svg'
    }

    else{
        icon.src= 'assets/images/icon-plus.svg'
    }
}

