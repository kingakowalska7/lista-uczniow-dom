document.getElementById("oblicz").addEventListener("click", function(){
  let listaUczniow = document.querySelectorAll('[id^=uczen]');
      
  for (let i = 0; i < listaUczniow.length; i++) {
    
    let sumaOcen = 0;
    let oceny = listaUczniow[i].querySelectorAll("[type=number]");
    let zajeciaDodatkowe = listaUczniow[i].querySelector('.zajecia-dodatkowe').value.split(',');
    
  for (let i = 0; i < oceny.length; i++) {
    for (let j = 0; j < zajeciaDodatkowe.length; j++){

    if (zajeciaDodatkowe[j].includes(oceny[i].className) && oceny[i].value != 6){
      oceny[i].value = parseFloat(oceny[i].value) + 0.5;
    }
  }
    sumaOcen += parseFloat(oceny[i].value);
      if (oceny[i].value <= 1) {
       oceny[i].style.backgroundColor = 'red';
       } 
     }
     
    // let srednia = Math.floor(sumaOcen/oceny.length);
    let srednia =  sumaOcen/oceny.length;
    let average = srednia.toFixed(2);
    listaUczniow[i].querySelector(".srednia").textContent = average;
    //  console.log(Math.floor(sumaOcen/oceny.length));

    if (average >= 4.75) {
      listaUczniow[i].querySelector(".srednia").style.backgroundColor = 'green';
      }
  }
});









































