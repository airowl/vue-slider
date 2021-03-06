/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

//! bisogna creare un un array di oggetti
//* le elementi da inserire sono 
//* - immagini
//* - title immagini
//* - description

const app = new Vue(
    {
        el: '#app',
        data: {
            activeElement: 0,
            autoPlayNext: null,

            carouselElements: [
                {
                    image: "1.jpg",
                    title: "THE DEVELOPER",
                    description: "Fa tante cose FIGHE che non capisce"
                },
                {
                    image: "2.jpg",
                    title: "THE CODE",
                    description: "Che manco io capisco"
                },
                {
                    image: "3.jpg",
                    title: "THE SCRIVANIA",
                    description: "Mi serve solo per appoggiare il pc e il cibo che mangio"
                },
                {
                    image: "4.jpg",
                    title: "THE OCCHIALI",
                    description: "Mi servono per vedere non per annusare"
                },
                {
                    image: "5.jpg",
                    title: "THE CODE, again",
                    description: "Questo lo copiato, Grazie stackoverflow"
                },
            ]
        },
        methods: {
            nextThumb: function(){
                if (this.activeElement == this.carouselElements.length - 1) {
                    this.activeElement = 0;
                } else {
                    this.activeElement++;
                }
            },
            prevThumb: function(){
                if (this.activeElement == 0) {
                    this.activeElement = this.carouselElements.length - 1;
                } else {
                    this.activeElement--;
                }
            },
            clickThumb: function(index){
                this.activeElement = index;
            },
            autoPlay: function(){
                this.autoPlayNext = setInterval(() =>{
                    this.nextThumb();
                }, 3000);
            },
            stopAutoPlay: function(){
                clearInterval(this.autoPlayNext);
                this.autoPlayNext = null;
            }
        }
    }
);

