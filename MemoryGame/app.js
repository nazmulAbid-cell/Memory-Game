const cardArray = [
    {
        name: 'fries',
        img:'Images/fries.png'
    },
    {
        name: 'hotdog',
        img:'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'Images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img:'Images/cheeseburger.png'
    },
    {
        name: 'pizza',
        img:'Images/pizza.png'
    },
   
    {
        name: 'milkshake',
        img:'Images/milkshake.png'
    },
    {
        name: 'fries',
        img:'Images/fries.png'
    },
    {
        name: 'hotdog',
        img:'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'Images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img:'Images/cheeseburger.png'
    },
    {
        name: 'pizza',
        img:'Images/pizza.png'
    },
   
    {
        name: 'milkshake',
        img:'Images/milkshake.png'
    },
    
]
cardArray.sort(() => 0.5-Math.random() )

 const gridDisplay = document.querySelector('#grid')
 const resultDisplay = document.querySelector('#result')
 
let cardswon = []
 let cardsChossen =  []
 let cardsChossenIds = []

 function createBoard ( ) {
     for(let i = 0; i< cardArray.length; i++){
         const card = document.createElement('img')
         card.setAttribute('src', 'Images/blank.png')
         card.setAttribute('data-id', i)
         console.log(card, i)
         card.addEventListener('click', flipCard)
         gridDisplay.appendChild(card)
     }


 }

 createBoard()

 function cheekMatch (){
     const cards = document.querySelectorAll('img')
     const optionOneId = cardsChossenIds[0]
     const optionTwoId = cardsChossenIds[1]
     if(optionOneId === optionTwoId){
         cards[optionOneId].setAttribute('src', 'Images/blank.png')
         cards[optionTwoId].setAttribute('src', 'Images/blank.png')
         alert('You have clicked the same image!!')
     }
     if (cardsChossen[0] === cardsChossen[1]){
         alert('you found a match ')
         cards[cardsChossenIds[0]].setAttribute('src', 'Images/white.png')
         cards[cardsChossenIds[1]].setAttribute('src', 'Images/white.png')
         cards[cardsChossenIds[0]].removeEventListener('click', flipCard)
         cards[cardsChossenIds[1]].removeEventListener('click', flipCard)
         cardswon.push(cardsChossen)
     }
     else{
         cards[optionOneId].setAttribute('src', 'Images/blank.png')
         cards[optionTwoId].setAttribute('src', 'Images/blank.png')
         alert('sory try agian')
     }
     resultDisplay.textContent = cardswon.length
     cardsChossen  = []
     cardsChossenIds = []

     if(cardswon.length === cardArray.length/2 ){
         resultDisplay.innerHTML = 'Congratualtion you found them all'
     }
    }


 function flipCard  () {
     const cardId = this.getAttribute('data-id')
     console.log('clicked', cardId)
     cardsChossen.push(cardArray[cardId].name)
     cardsChossenIds.push(cardId)
     console.log(cardsChossen)
     this.setAttribute('src', cardArray[cardId].img)
     if(cardsChossen.length === 2){
         setTimeout(cheekMatch, 200);
     }


 }