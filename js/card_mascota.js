document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const raza = document.getElementById("raza").value;
    const propietario = document.getElementById("propietario").value;
    const genero = document.getElementById("genero").value;

    const tarjetaIdentificatoria = document.querySelector(".tarjeta-identificatoria");
    const imagenMascota = document.getElementById("imagen-mascota");
    const qrCodeDiv = document.getElementById("codigo-qr");

    // Actualizar tarjeta identificatoria con los datos del formulario
    document.getElementById("info-nombre").textContent = nombre;
    document.getElementById("info-tipo").textContent = tipo;
    document.getElementById("info-raza").textContent = raza;
    document.getElementById("info-propietario").textContent = propietario;
    document.getElementById("info-genero").textContent = genero;

    // Cambiar estilos de la tarjeta identificatoria
    tarjetaIdentificatoria.style.backgroundColor = tipo === "perro" ? "#87CEFA" : "#FFC0CB";
    tarjetaIdentificatoria.style.color = tipo === "perro" ? "#000000" : "#000000"; // Cambia el color del texto según el tipo
    imagenMascota.style.borderRadius = tipo === "perro" ? "5% 0% 5% 5%" : "0% 5% 5% 5%";

    // Cambiar imagen de fondo según el tipo de mascota
    imagenMascota.style.backgroundImage = `url('path/to/${tipo}.jpg')`;

    // Generar y mostrar el código QR
    const qrCode = new QRCode(qrCodeDiv, {
        text: `Nombre: ${nombre}\nTipo: ${tipo}\nRaza: ${raza}\nPropietario: ${propietario}\nGénero: ${genero}`,
        width: 100,
        height: 100
    });
});

// Agrega este código al final de tu bloque de script
document.getElementById("foto").addEventListener("change", function () {
    const fileInput = this;
    const imagePreview = document.getElementById("imagen-mascota");

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
});