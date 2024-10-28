let imagenActual = 0; 
const imagenes = document.querySelectorAll('.misDiapositivas'); 
const radios = document.querySelectorAll('input[name="radio"]'); 

imagenes[imagenActual].style.display = 'block';
radios[imagenActual].checked = true; 

function cambiarImagen(direccion) {
    imagenes[imagenActual].style.display = 'none';

    imagenActual += direccion;

    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1; 
    } else if (imagenActual >= imagenes.length) {
        imagenActual = 0; 
    }

    imagenes[imagenActual].style.display = 'block';

    radios[imagenActual].checked = true; 
}

document.querySelector('.arrowIzquierda').addEventListener('click', () => {
    cambiarImagen(1); 
});

document.querySelector('.arrowDerecha').addEventListener('click', () => {
    cambiarImagen(-1); 
});

radios.forEach(radio => {
    radio.addEventListener('click', (event) => {
        event.preventDefault(); 
    });
});

$(document).ready(main);
var contador = 1;

function main() {
    $('.Menu_barras').click(function() {
        if (contador == 1) {
            $('nav').stop(true, true).animate({
                left: '0'
            });
            contador = 0;
        } else {
            $('nav').stop(true, true).animate({
                left: '-100%'
            });
            contador = 1;
        }
    });
}



/*let currentProductIndex = 0;

function navigate() {
    const products = document.querySelectorAll('.producto-item');

    // Asegúrate de que haya productos disponibles
    if (products.length === 0) return;

    // Muestra el siguiente producto
    currentProductIndex = (currentProductIndex + 1) % products.length; // Avanza al siguiente producto
    products.forEach((product, index) => {
        product.style.display = index === currentProductIndex ? 'flex' : 'none';  // Muestra solo el producto actual
    });
}
*/
