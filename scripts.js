const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;

    if(this===firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    } else{
        hasFlippedCard = false;
        secondCard = this;

        checForMatch();


    }
}

function checForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
    } else{

      unflippedCards();
    }

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflippedCards(){
lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        }, 1500);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = false, false;
    [firstCard, secondCard] = null, null;
}

cards.forEach(card => card.addEventListener('click', flipCard));


// https://www.youtube.com/watch?v=ZniVgo8U7ek