let btn_burger = document.querySelector('.burger_menu')
btn_burger.addEventListener('click', (e)=>{
    e.preventDefault();
    btn_burger.classList.toggle('active')
    document.querySelector('.mob_menu').classList.toggle('active')
})


AOS.init({
    once: true
  });