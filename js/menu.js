const menu = document.querySelector('.menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const menuContent = document.querySelector('.menuContent');

const lines = [line1,line2,line3]

menu.addEventListener('click',toggleMenu);


function toggleMenu(){
    lines.forEach(line=>line.classList.toggle('open'));
    menuContent.classList.toggle('hidden');
}