const contactSelector = document.querySelector('#contactSelector');
const founder = document.querySelector('.founder-wolf');
const cofounder = document.querySelector('.cofounder');

founder.addEventListener('click',()=>{
    contactSelector.value = 'Wolf';
});

cofounder.addEventListener('click',()=>{
    contactSelector.value="Achilles"
});