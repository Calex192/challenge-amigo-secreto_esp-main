alert("¡Bienvenido! Elijamos a tu amigo secreto :D");
const nombres = [];
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
}
});

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "" || !isNaN(nombre))  {
        alert ("Por favor ingrese un nombre válido.");
        return;
    }
    
    nombres.push(nombre);
    nombres.sort();
    document.getElementById("amigo").value = ""; 

    document.getElementById("listaAmigos"). textContent = "Nombres: " + nombres.join(", ");
    
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    let resultadoElemento = document.getElementById("resultado");

    if (nombres.length === 0) {
        resultadoElemento.innerHTML = "No hay nombres en la lista para sortear.";
        resultadoElemento.style.display = "block"; 
        return;
    }
    let index = Math.floor(Math.random() * nombres.length);
    let resultado = nombres[index];
    resultadoElemento.innerHTML = "El amigo secreto es: <strong>" + resultado + "</strong>";
    resultadoElemento.style.display = "block";

}

