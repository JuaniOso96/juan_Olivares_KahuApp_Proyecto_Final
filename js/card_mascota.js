//tarjeta registro mascota
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
    imagenMascota.style.borderRadius = tipo === "perro" ? "5% 5% 5% 5%" : "5% 5% 5% 5%";

    // Cambiar imagen de fondo según el tipo de mascota
    imagenMascota.style.backgroundImage = `url('path/to/${tipo}.jpg')`;

    // Generar y mostrar el código QR

    console.log(nombre)
    console.log(tipo)
    console.log(raza)
    console.log(propietario)
    console.log(genero)
    const qrCode = new QRCode(qrCodeDiv, {
        text: `Nombre: ${nombre}`,
        width: 100,
        height: 100
    });
});

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

//Carrusel 2

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carru-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function updateIndicators() {
        const indicatorsContainer = document.querySelector(".carru-indicators");
        indicatorsContainer.innerHTML = "";

        slides.forEach((slide, i) => {
            const button = document.createElement("button");
            button.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
            indicatorsContainer.appendChild(button);
        });

        // Marcar el indicador correspondiente al slide actual
        const indicators = indicatorsContainer.querySelectorAll("button");
        indicators[currentSlide].classList.add("active");
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        updateIndicators();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        updateIndicators();
    }

    // Inicialización
    showSlide(currentSlide);
    updateIndicators();

    // Configurar botones de navegación
    document.querySelector(".carru-prev").addEventListener("click", showPrevSlide);
    document.querySelector(".carru-next").addEventListener("click", showNextSlide);

    // Configurar cambio automático de slides cada 5 segundos
    setInterval(showNextSlide, 5000);
});