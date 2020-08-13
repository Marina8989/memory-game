const cards = document.querySelectorAll('.card');
let clickedCard = null;
let preventClick = false;
let matched = 0;

const colors = ['pink', 'yellow', 'red', 'cyan', 'blue', 'teal', 'orange', 'green'];



for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function(e) {
     
        if(preventClick || e.target === clickedCard || e.target.className.includes('done')) {
            return;
        }

         e.target.classList.remove('color-hidden');
         e.target.className += " done";

         if (!clickedCard) {
           clickedCard = e.target;
         }else if(clickedCard) {
          
           if(clickedCard.getAttribute('data-color') !== e.target.getAttribute('data-color')) 
            {
             preventClick = true;
             setTimeout(() => {
               
                clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
                e.target.className = e.target.className.replace("done", "").trim() + " color-hidden";


                clickedCard = null;
                preventClick = false;
             }, 500);
             
           }else {
               matched++;
               clickedCard = null;
               if (matched === 8) {
                 alert("You won!");
               }
           }
          
         }
    })
 
    


}