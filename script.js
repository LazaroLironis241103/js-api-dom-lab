async function cargarComentarios() {
     // 1. Buscá el contenedor con id "comentarios-box"
        const caja = document.getElementById("comentarios-box");
        caja.innerHTML = "Cargando...";
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const datos = await res.json();
        
        // Filtramos para no llenar la pantalla: solo los primeros 3
        const cortos = datos.filter(c => c.id <= 3); 

        caja.innerHTML = "";

        cortos.forEach(comentario => {
            // 2. Creá un elemento "p" (párrafo)
            const parrafo = document.createElement("p");

            // 3. Poné el texto del comentario adentro del párrafo
            // Tip: usá comentario.body que es donde está el texto en esta API
            parrafo.innerText = comentario.body;

            // 4. Dale un estilo (ej: color azul)
            parrafo.style.color = "blue";
            parrafo.style.marginBottom = "20px";
            parrafo.style.padding = "10px";
            parrafo.style.borderBottom = "1px solid #ccc";

            // 5. Pegá el párrafo en la "caja"
            caja.appendChild(parrafo);
        });
    } catch (error) {
        console.log("Error al cargar:", error);
        caja.innerHTML = "Error al conectar con el servidor."
        console.log("Detalle del error:", error);
        
    }
}

const boton = document.getElementById("mi-boton");
        boton.addEventListener("click", cargarComentarios);