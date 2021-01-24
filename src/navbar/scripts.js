function selectItem(sender){

    console.log("Pulsó item " + sender.id);
    var itemsMenu = document.querySelectorAll("a");

    Array.from(itemsMenu).forEach(item => {
        if (item.className == "active") item.className= "";
    })

    sender.className = "active";
}