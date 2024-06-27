

document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.querySelector('.bill-input');
    const customInput = document.querySelector('.custom');
    const peopleInput = document.querySelector('.people-input');
    const buttonRadio = document.querySelectorAll('.buttonRadio');

   
    [billInput, customInput, peopleInput, ...buttonRadio].forEach(input => {
        input.addEventListener('input', calculate);
    });
    
    function calculate() {
        const bill = parseFloat(billInput.value);
        const custom = parseFloat(customInput.value);
        const people = parseInt(peopleInput.value);
        const selectedRadioButton = document.querySelector('.buttonRadio:checked');
        let tipPercentage = 0;
        
        if (selectedRadioButton) {
            tipPercentage = parseFloat(selectedRadioButton.value);
        } else if (!isNaN(custom)) {
            tipPercentage = custom;
            customInput.style.borderColor = 'var(--Strong-cyan);'
        }

        customInput.addEventListener('input', function(){
            buttonRadio.forEach(radio => {
                radio.checked = false
            })
        })
        buttonRadio.forEach(radio=>{
            radio.addEventListener('click',function(){
                customInput.value = ''
            })
        })
        if(people < 1 ){
            document.querySelector('.alert').textContent = 'Ne peut pas être 0';    
        }else{
            document.querySelector('.alert').textContent = '';
        }
        
        if (!isNaN(bill) && !isNaN(people) && !isNaN(tipPercentage) && people > 0) {
            const tipAmount = bill * (tipPercentage / 100);
            const totalAmount = bill + tipAmount;
            const tipPerPerson = tipAmount / people;
            const totalPerPerson = totalAmount / people;

            document.querySelector('.total').textContent ='$'+tipPerPerson.toFixed(2);
            document.querySelector('.tips').textContent ='$'+totalPerPerson.toFixed(2);
        }else{
            document.querySelector('.total').textContent = '$0.00';
            document.querySelector('.tips').textContent = '$0.00';
        }
    }
});

