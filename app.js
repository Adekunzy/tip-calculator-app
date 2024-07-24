const total_bill =document.querySelector('#total-bill');
const total_people = document.querySelector('#total_people');
const total_bill_err = doument.querySelector('.total-bill-err');
const total_person_err = document.querySelector('.total_person_err');
const tip = document.querySelector('.tip');
const amount = document.querySelector('.amount');
let 
const isValid = false;


const clear_error =()=> {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input)=>input.classList.remove('invalid'));
    const errors = document.querySelectorAll('error');
    errors.forEach((error)=> error.textContent = '');
}
const  validate =()=> {
    if(total_bill.value.trim()== ''){
        total_bill_err.textContent = 'This field is required';
        total_bill.classList.add('invalid');
        isValid =true;
    
    } if(total_people.value.trim() == ''){
        total_bill_err.textContent = 'this field is required';
        total_people.classList.add('invalid');
        isValid =true;
    }
    else if(isNaN(total_bill.value.trim())){
        total_bill_err.textContent = 'input must be a number';
        total_bill.classList.add('invalid');
        isValid =true;
    }
    else if(total_people.value.trim() ==''){
        total_person_err.textContent = 'this field is required';
        total_people.classList.add('invalid');
        isValid = true;
    }

}


document.querySelector('.btn').addEventListener('click',()=>{
   
    clear_error();
    validate();
    if(!isValid){
        //alert('result is calculated');
        tip_per_person =(total_bill/total_people)* .15;
        total_per_person = total_bill.value.trim()/ tip_per_person;
        tip.textContent = tip_per_person.toFixed(2);
        amount.textContent = total_per_person.toFixed(2);
    }

   
})