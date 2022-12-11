const contactSelector = document.querySelector('#contactSelector');
const founder = document.querySelector('.founder-wolf');
const cofounder = document.querySelector('.cofounder');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const description = document.querySelector('.description');
const submitBtn = document.querySelector('.submitBtn');
const formStatus = document.querySelector('.formStatus');
const wolf = document.querySelector('.wolf');
const achilles = document.querySelector('.achilles');
const joker = document.querySelector('.joker');
const option = document.getElementsByTagName('option');
console.log(option[0].value);
const deniedWords = ["matii","pula","retardat","idiot","pisat","cacat","imbecil","taran","familia","pizda","mata","fututi","mortii","raniti","handicapatule","muie","muist","muistilor","mamele","tractorist","handicapat","pizdelor","sugi","pul","piz","sug","mui","fut","retarda","ma-ta"];

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
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function filterInput(){

    let wrongInput = false;
    if(compareInput(username) && compareInput(email) && compareInput(description)){
        validateInputs(username);
    
        validateInputs(email)

        validateInputs(description);
        
        if(checkInput(username) && checkInput(email) && checkInput(description)){

           sendMail();
            

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

function sendMail(){
    let dest;
    if(contactSelector.value=='Wolf')
    {
        dest = option[0].value;
    }
    else if(contactSelector.value=="Achilles")
        dest=option[1].value;
    else
        dest=option[2].value;
    console.log(dest);

    const params = {
        staffMember:dest,
        name:username.value,
        email:email.value,
        description:description.value
    }
    const serviceId = "service_stnpopm";
    const templateId = "template_gweynbg";

    emailjs.send(serviceId,templateId,params)
    .then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}


function validateInputs(input){
    if(input==email){
        if(isEmail(input.value))
        {
            input.nextElementSibling.classList.remove('hidden');
            input.nextElementSibling.nextElementSibling.classList.add('hidden');
        }
        else{
            input.nextElementSibling.nextElementSibling.classList.remove('hidden');
            input.nextElementSibling.classList.add('hidden');
        }
    }else{
        if(input.value.trim()=='')
        {
            input.nextElementSibling.nextElementSibling.classList.remove('hidden');
            input.nextElementSibling.classList.add('hidden');
            
        }else{  
            input.nextElementSibling.classList.remove('hidden');
            input.nextElementSibling.nextElementSibling.classList.add('hidden');
            
        }
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