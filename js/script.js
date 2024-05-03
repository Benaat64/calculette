const buttons = document.querySelectorAll('.button-tips button')
const billInput = document.querySelector('.bill-input');
const customInput = document.querySelector('.custom');
const peopleInput = document.querySelector('.people input');
const formLeft = document.querySelector('.form-left');
// selection button. 
function selected(evt){
    evt.preventDefault();
    buttons.forEach(button => {
        button.classList.remove('button-selected');
    })   
// rajoute classe pour voir le bouton sélectionner et stock sa valeur.
    evt.target.classList.add('button-selected');
    const buttonValue = evt.target.value;
    console.log(buttonValue)
} 
buttons.forEach(button => {
    button.addEventListener('click',selected)
})


//stoker valeur input.
formLeft.addEventListener('submit',(evt) => {
    evt.preventDefault()
    console.log(billInput.value)
})

function hello(name){
    alert('COUCOU '+ name)
}

hello('PATAPUTE');

//complexe ! 


