/*
`<div class="card">
    <div style='background-image:url("`+item.url+`");'>
        <p>`+item.nombre+`</p>
    </div>
    <div class="card_description scroll">
        <p>Descripcion:</p>
        <p>`+item.descripcion+`</p>
        <p>Precio: $`+item.precio+`</p>
    </div>
    <button class="card_button">Añadir a la lista</button>
</div>`;
*/


//_______________________________________________
    let elements = document.getElementsByClassName("card_button"); // selecciona elementos de clase targeta
    for (let i = 0; i < elements.length; i++){
        elements[i].addEventListener("click",function () { // agrega evento clic a todas las carpetas
            elements[i].classList.toggle('card_select'); // cambia el color a hacerle clic
            thisItem = elements[i].Item;
            index = purchasedItems.indexOf(thisItem);
            // funcion checkbox
            if (index==-1) // cuando hace el primer clic añade a la lista ()
                purchasedItems.push(thisItem)
            else 
                purchasedItems.splice(index,1) // el elemento ya esta en la lista entonces lo borra 
        });
//____________________________________________
    }


function popUpToggle(element) {
    try {
        $(element).fadeToggle(400); // esto hace todo 

    } catch {
        alert("Libreria jQuery no añadida") // solo por si acaso
    }
}

