console.log("Bienvenidos al catálogo");

const videojuegos = [
    {
        nombre: "Minecraft",
        categoria: "Sandbox",
        precio: 15000,
        plataforma: "pc",   
        lanzamiento: "17 de mayo de 2009",
        imagen: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg"
    },
    {
        nombre: "Valorant",
        categoria: "Shooter",
        precio: 0,
        plataforma: "pc",
        lanzamiento:"2020",
        imagen: "https://www.riotgames.com/darkroom/1200/1dbd7211e78ce5faa7a8af9d10afad47:2b5979e3922758399ba389561e797919/ps-f2p-val-console-launch-16x9.jpg",
    
    },
    {
        nombre: "Rocket League",
        categoria: "Deportes",
        precio: 0,
        plataforma: "pc y Xbox",
        lanzamiento:"23 de septiembre de 2020",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg"
    }
];
videojuegos.forEach(videojuego => {
    console.log(videojuego.nombre,videojuego.categoria);
});
const catalogo = document.querySelector("#catalogo");
catalogo.innerHTML = "Minecraft";
 
let contenido = "";

videojuegos.forEach(videojuego => {
    contenido += `
        <h2>${videojuego.nombre}</H2>
        <p>${videojuego.categoria}</p>
        <p>$${videojuego.precio}</p>
        <p>${videojuego.plataforma}</p>
        <p>${videojuego.lanzamiento}</p>
        <img src="${videojuego.imagen}" alt="${videojuego.nombre}">

    `;
});

catalogo.innerHTML = contenido;
const nombreInput =
    document.querySelector("#nombre");
const categoriaInput =
    document.querySelector("#categoria");
const precioInput =
    document.querySelector("#precio");
const plataformaInput =
    document.querySelector("#plataforma");
const lanzamientoInput =
    document.querySelector("#lanzamiento");
const imagenInput =
    document.querySelector("#imagen");
const botonAgregar =
    document.querySelector("#agregar");


function mostrarCatalogo() {

    let contenido = "";

    videojuegos.forEach(videojuego => {

        contenido += `
            <h2>${videojuego.nombre}</H2>
            <p>${videojuego.categoria}</p>
            <p>$${videojuego.precio}</p>
            <p>${videojuego.plataforma}</p>
            <p>${videojuego.lanzamiento}</p>
            <img src="${videojuego.imagen}" alt="${videojuego.nombre}">
        `;

    });

    catalogo.innerHTML = contenido;
}

botonAgregar.addEventListener("click",function() {
    const nombre = nombreInput.value;
    const categoria = categoriaInput.value;
    const precio = precioInput.value;
    const plataforma = plataformaInput.value;
    const lanzamiento = lanzamientoInput.value;
    const imagen = imagenInput.value;

    const nuevoVideojuego = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        plataforma: plataforma,
        lanzamiento:lanzamiento,
        imagen:imagen
    };
    videojuegos.push(nuevoVideojuego);
    mostrarCatalogo();
    nombreInput.value = "";
    categoriaInput.value="";
    precioInput.value="";
    plataformaInput.value="";
    lanzamientoInput.value="";
    imagenInput.value="";
});


