let btn_burger = document.querySelector('.burger_menu')
btn_burger.addEventListener('click', (e)=>{
    e.preventDefault();
    btn_burger.classList.toggle('active')
    document.querySelector('.mob_menu').classList.toggle('active')
})


AOS.init({
    once: true
  });
//   
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<span><i>${words[index]}</i></span>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('span > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .2}s`;
	});

});