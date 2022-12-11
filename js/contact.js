const contactSelector = document.querySelector('#contactSelector');
const founder = document.querySelector('.founder-wolf');
const cofounder = document.querySelector('.cofounder');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const description = document.querySelector('.description');
const submitBtn = document.querySelector('.submitBtn');
const formStatus = document.querySelector('.formStatus');


const deniedWords = ["matii","pula","pulaa","pizda","mata","fututi","mortii","raniti","handicapatule","muist","muistilor","mamele","tractorist","handicapt","pizdelor","sugi"]


founder.addEventListener('click',()=>{
    contactSelector.value = 'Wolf';
});

cofounder.addEventListener('click',()=>{
    contactSelector.value="Achilles"
});


submitBtn.addEventListener('click',()=>{
    validateInputs(username);
    validateInputs(email);
    validateInputs(description);

    filterInput();

    setTimeout(clearInput,2000);
});

function filterInput(){

    let wrongInput = false;
    
    compareInput(username);
   

    function compareInput(input){
        for(let i=0;i<deniedWords.length;i++){
            const noWhiteSpace = input.value.trim().replaceAll(' ','');
            console.log(noWhiteSpace);
            if(noWhiteSpace.includes(JSON.stringify(deniedWords[i])))
            {
                console.log(noWhiteSpace);
                input.nextElementSibling.nextElementSibling.classList.remove('hidden');
                input.nextElementSibling.classList.add('hidden');

                formStatus.classList.remove('hidden');
                formStatus.classList.add('text-red-700');
                formStatus.classList.remove('text-green-700');
                formStatus.classList.textContent='Mesajul nu a fost trimis!';
                wrongInput=true;
                return;
            }
        }
    }
}

function validateInputs(input){
    if(input.value.trim()=='')
    {
        input.nextElementSibling.nextElementSibling.classList.remove('hidden');
        input.nextElementSibling.classList.add('hidden');
    }else{  
        input.nextElementSibling.classList.remove('hidden');
        input.nextElementSibling.nextElementSibling.classList.add('hidden');
    }
}


function checkInput(input){
    if(input.value.trim()=='')
        return false;
    return true;
}

function clearInput(){
    username.value='';
    email.value='';
    description.value='';
    clearIcons(username);
    clearIcons(email);
    clearIcons(description);
    formStatus.textContent='';
}

function clearIcons(input){
    input.nextElementSibling.classList.add('hidden');
    input.nextElementSibling.nextElementSibling.classList.add('hidden');
}