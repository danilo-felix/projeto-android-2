
//CARD-FLIP
const card = document.querySelectorAll('.card_inner');

card.forEach((card) => {card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
    })
})