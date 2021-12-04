
// de aqui 
MENU={
    "list":["a","b","c","d"],
    "a":{
        nombre:"a",
        precio:100,
        url:"https://image.winudf.com/v2/image1/Y29tLmFuZHJvLmZvb2RwcmVzZW50YXRpb25pZGVhX3NjcmVlbl8yXzE1NjcxNzM0MjZfMDA0/screen-2.jpg?fakeurl=1&type=.jpg",
        descripcion:"plato a",
    },
    "b":{
        nombre:"b",
        precio:150,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbdu0NNOe9QVGGVkHgU7Kl2IvTYVXlMtyZEoYHr7V7RqnvbRCeYJU6h15gNhkCtnZet8&usqp=CAU",
        descripcion:"plato b",
    },
    "c":{
        nombre:"c",
        precio:150,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbdu0NNOe9QVGGVkHgU7Kl2IvTYVXlMtyZEoYHr7V7RqnvbRCeYJU6h15gNhkCtnZet8&usqp=CAU",
        descripcion:"plato c",
    },
    "d":{
        nombre:"d",
        precio:150,
        url:"",
        descripcion:"plato d Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
}
purchasedItems = [];


function writeCards(menu) {
    list = menu.list;
    for (let i in list) {
        let item = menu[list[i]];
        if (item.url=="") item.url = "https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png";
        card_container.innerHTML+=
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
}
// a aqui se hace en hbs


//_______________________________________________
    let elements = document.getElementsByClassName("card_button"); // selecciona elementos de clase targeta
    for (let i = 0; i < elements.length; i++){
        elements[i].Item = i; // agrega un valor item a cada una de las carpetas
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



}
function popUpToggle(element) {
    try {
        $(element).fadeToggle(400); // esto hace todo 

    } catch {
        alert("Libreria jQuery no añadida") // solo por si acaso
    }
}
window.onload = () =>{
    writeCards(MENU);
    document.getElementById("view_password").addEventListener("click",function(){let ps = document.getElementById("password");if(view_password.checked)ps.type="text";else ps.type="password";})
    document.getElementById("pop_up_close").addEventListener("click",function () { popUpToggle("#puc") })
    document.getElementById("comprarButton").addEventListener("click",function() { popUpToggle("#puc") })
}