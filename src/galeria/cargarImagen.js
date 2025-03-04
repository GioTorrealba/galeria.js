import data from './../datos/fotos';

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) =>{
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    galeria.querySelectorAll('.galeria__carousel-slide--active').forEach((elemento) => {
		elemento.classList.remove('galeria__carousel-slide--active');
    });

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index;
        }
    });

    if( galeria.querySelectorAll('.galeria__carousel-slide').length >0) {

        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }

  
};

const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria.dataset.categoria;
    const fotos= data.fotos[categoriaActual];
    const idImagenActual= parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto,index) => {
        if(foto.id === idImagenActual){
            indexImagenActual=index;
        }
    })

    if(direccion === 'siguiente'){
        if(fotos[indexImagenActual + 1]) {
            const {id, nombre, ruta, descripcion } = fotos[indexImagenActual +1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    } else if (direccion === 'anterior'){
        if(fotos[indexImagenActual - 1]) {
            const {id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};

export {cargarImagen, cargarAnteriorSiguiente};