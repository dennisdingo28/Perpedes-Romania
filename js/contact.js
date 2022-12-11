const contactSelector = document.querySelector('#contactSelector');
const founder = document.querySelector('.founder-wolf');
const cofounder = document.querySelector('.cofounder');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const description = document.querySelector('.description');
const submitBtn = document.querySelector('.submitBtn');
const formStatus = document.querySelector('.formStatus');


const deniedWords = ["matii","pula","idiot","pisat","cacat","imbecil","taran","pulii","familia","pulaa","pizda","mata","fututi","mortii","raniti","handicapatule","muie","muist","muistilor","mamele","tractorist","handicapt","pizdelor","sugi"]


founder.addEventListener('click',()=>{
    contactSelector.value = 'Wolf';
});

cofounder.addEventListener('click',()=>{
    contactSelector.value="Achilles"
});


submitBtn.addEventListener('click',()=>{
    
    filterInput();

    setTimeout(clearInput,2000);
});

function filterInput(){

    let wrongInput = false;
    if(compareInput(username) && compareInput(email) && compareInput(description)){
        validateInputs(username);
        validateInputs(email);
        validateInputs(description);
        if(checkInput(username) && checkInput(email) && checkInput(description)){
            formStatus.textContent='Mesajul a fost trimis !';
            formStatus.classList.add('text-green-700');
            formStatus.classList.remove('text-red-700');
        }else{
            formStatus.textContent='Campuri invalide !';
            formStatus.classList.remove('text-green-700');
            formStatus.classList.add('text-red-700');
        }
    }else{
        formStatus.classList.add('text-red-700');
        formStatus.classList.remove('text-green-700');
        formStatus.textContent='Mesajul tau contine injurii !'
    }
    
    function setError(input){
        input.nextElementSibling.nextElementSibling.classList.remove('hidden');
        input.nextElementSibling.classList.add('hidden');
    }
    function compareInput(input){
        const word = [];

        for(let i=0;i<input.value.trim().length;i++){
            word.push(input.value.trim()[i].toLowerCase());
        }
        let str = "";
        let deniedWord = false;
        
        for(let i=0;i<word.length;i++){
            if(word[i]!=' ')
            {
                str+=word[i];
                for(let j=0;j<deniedWords.length;j++)
                {
                    if(str==deniedWords[j])
                        return false;
                }
            }
            else 
            {
               str="";
            }
        }
        return true;
    }
}

function validateInputs(input){
    if(input.value.trim()=='')
    {
        input.nextElementSibling.nextElementSibling.classList.remove('hidden');
        input.nextElementSibling.classList.add('hidden');
        return false;
    }else{  
        input.nextElementSibling.classList.remove('hidden');
        input.nextElementSibling.nextElementSibling.classList.add('hidden');
        return true;
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