const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login_link');
const registerLink= document.querySelector('.register_link');
const btnPopup = document.querySelector('.show_login');
const iconClose=document.querySelector('.close_img')

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});