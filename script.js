
window.scroll({
    top: 0,
    behavior: 'smooth',
})
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
};
window.addEventListener('scroll', function(){
    const header = this.document.querySelector('#header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Add smooth scrolling to all links
$(".smooth-scroll").on('click', function(event) {
   event.preventDefault();
})

//Menu hamburguer

const btnMobile = document.querySelector('.btn-mobile');

function toogleMenu() {
    const nav = document.querySelector('.navegacao');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
    




    

