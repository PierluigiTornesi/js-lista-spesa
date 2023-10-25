//prendo il div dell'html per metterci dentro al lista
const listaElem = document.querySelector(".listaSpesa");
console.log(listaElem);
//variabile che conterrá la lista dei prodotti da inserire nel div
let listaProd = "";

//array contennete la lista della spesa
const arraySpesa = ["pomodori","lette","biscotti","pollo","acqua"]
//variabile per la lunghezza dell'array
let lunghezza = arraySpesa.length;
//indice per spostarmi dentro l'array
let i = 0;
//variabile per salvare il prodotto
let prodotto = "";  
//ciclo per stampare cosa c'é dentro l'array
while(lunghezza > 0){
    //stampo il valore alla posizione dell'indice
    console.log(arraySpesa[i]);
    //salvo il prodotto
    prodotto = arraySpesa[i];
    //incremento l'indice
    i++;
    //decremento la lunghezza
    lunghezza--;
    //scrivo nella lista il div contenente il prodotto
    listaProd += `<div><p>Il prodotto alla posizione numero ${i} della lista é "${prodotto}"</p></div>`
}
//aggiungo all'html tutta la lista dei prodotti
listaElem.innerHTML = listaProd;