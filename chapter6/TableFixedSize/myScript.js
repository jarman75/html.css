function mostrarBloque(sender){
    console.log("Pulsó bloque " + sender.id);

    var pestanas = document.querySelectorAll("td");

    console.log(sender.style.color);

    Array.from(pestanas).forEach(element => {
        
        element.style.color = "black";
        element.style.background = "rgb(233, 233, 233, 0.3)";
        if (element.id ==  sender.id) {
            element.style.color = "blue";
            element.style.background = "rgb(233, 233, 233)";
        }
    });

    var bloques = document.getElementsByClassName("bloque");
    
    Array.from(bloques).forEach(element => {
        element.style.display = "none";
        if (element.id == "bloque-" +  sender.id) {
            element.style.display = "block";
        }
    });

}