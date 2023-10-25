//array contennete la lista della spesa
const arraySpesa = ["pomodori","lette","biscotti","pollo","acqua"]
//variabile per la lunghezza dell'array
let lunghezza = arraySpesa.length;
//indice per spostarmi dentro l'array
let i = 0;
//ciclo per stampare cosa c'é dentro l'array
while(lunghezza > 0){
    //stampo il valore alla posizione dell'indice
    console.log(arraySpesa[i]);
    //incremento l'indice
    i++;
    //decremento la lunghezza
    lunghezza--;
}