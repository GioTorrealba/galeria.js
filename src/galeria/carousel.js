const galeria = document.getElementById('galeria');
const carousel = (direccion)=> {
    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        treshold: 0.9,

    }
    const observer = new IntersectionObserver((entradas) => {
        const slidesVisibles = entradas.filter((entrada) => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if(direccion === 'atras'){
            const primerSlide = slidesVisibles[0];
            const indexPrimerSlide = entradas.indexOf(primerSlide);

            if(indexPrimerSlide >=1){
                entradas[indexPrimerSlide - 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start',
                });
            }   

        }else if (direccion === 'adelante'){
            const ultimoSlide = slidesVisibles[slidesVisibles.length-1];
            const indexUltimoSlide = entradas.indexOf(ultimoSlide);

            if (entradas.length - 1 > indexUltimoSlide){
                entradas[indexUltimoSlide + 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start',
            });
        }}


        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
            slides.forEach((slide) => {
            observer.unobserve(slide);
        });

    },opciones);

   const slides = galeria.querySelectorAll('.galeria__carousel-slide');
   slides.forEach((slide) => {
        observer.observe(slide);
   });

}

export default carousel;