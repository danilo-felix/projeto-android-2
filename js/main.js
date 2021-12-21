//CARD-FLIP
const card = document.querySelectorAll('.card_inner');

card.forEach((card) => {card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
    })
})


//TRANSPARÊNCIA DA NAVBAR


/*window.addEventListener('scroll', function(){
    let nav = document.querySelector('.navbar');
    let button = document.querySelector('.navbar-toggler')
    if(window.pageYOffset > 1) {
        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-dark');
    }else {
        nav.classList.remove('bg-dark')
        nav.classList.add('bg-transparent')
    }
})*/