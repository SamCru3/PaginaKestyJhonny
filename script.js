
// #region Lenguaje

const selectorLenguaje = document.querySelector('.SelectorLenguaje');
const lenguajeBtn = document.getElementById('LenguajeBtn');

if (lenguajeBtn && selectorLenguaje) {
    lenguajeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectorLenguaje.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        selectorLenguaje.classList.remove('open');
    });
}

function CambiarLenguaje(lang) {
    if (lang === 'en') {
        window.location.href = 'enindex.html';
    } else if (lang === 'es') {
        window.location.href = 'index.html';
    }
}

// #endregion

// #region nav

function mostrar(v) {

    if (!document.getElementById(v)) { 
        v = "inicio"; 
    }
    
    document.querySelectorAll(".view").forEach(s => {
        s.classList.toggle("on", s.id === v);
    });

    document.querySelectorAll("nav a").forEach(a => {
        const coincide = a.getAttribute("href") === "#" + v;
        a.classList.toggle("on", coincide);
    });

    const navMenu = document.querySelector("nav");
    if (navMenu) {
        navMenu.classList.remove("open");
    }

    window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => {
    const vistaActual = location.hash.slice(1);
    mostrar(vistaActual);
});
window.addEventListener("DOMContentLoaded", () => {
    const vistaInicial = location.hash ? location.hash.slice(1) : "inicio";
    mostrar(vistaInicial);
});

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.querySelector('nav');

if (menuBtn && navMenu) {

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove('open');
        }
    });

}

// #endregion

// #region Carrito Aside

const cartBtn = document.getElementById('cartBtn');
const carritoAside = document.getElementById('CarritoAside');
const closeCartBtn = document.getElementById('closeCartBtn');
const carritoOverlay = document.getElementById('CarritoOverlay');

function abrirCarrito() {
    if (carritoAside && carritoOverlay) {
        carritoAside.classList.add('open');
        carritoOverlay.classList.add('open');
    }
}

function cerrarCarrito() {
    if (carritoAside && carritoOverlay) {
        carritoAside.classList.remove('open');
        carritoOverlay.classList.remove('open');
    }
}

if (cartBtn) {
    cartBtn.addEventListener('click', abrirCarrito);
}

if (closeCartBtn) {
    closeCartBtn.addEventListener('click', cerrarCarrito);
}

if (carritoOverlay) {
    carritoOverlay.addEventListener('click', cerrarCarrito);
}

// #endregion

// #region Lógica del Slider

const slides = document.querySelectorAll('.slider .slide');
const prevBtn = document.querySelector('.sl-btn.prev');
const nextBtn = document.querySelector('.sl-btn.next');
const sliderContainer = document.querySelector('.slider');

let currentSlide = 0;
let slideInterval;

// Función para cambiar de slide
function mostrarSlide(index) {
    if (slides.length === 0) return;

    // Ajusta el índice si se pasa del total o es menor que cero (ciclo infinito)
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Pone/quita la clase .on usando la misma lógica limpia del nav
    slides.forEach((slide, i) => {
        slide.classList.toggle('on', i === currentSlide);
    });
}

// Siguiente slide
function nextSlide() {
    mostrarSlide(currentSlide + 1);
}

// Anterior slide
function prevSlide() {
    mostrarSlide(currentSlide - 1);
}

// Eventos de los botones prev y next
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        reiniciarAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        reiniciarAutoSlide();
    });
}

// Iniciar reproducción automática
function iniciarAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
}

// Reiniciar el contador automático cuando el usuario interactúa
function reiniciarAutoSlide() {
    clearInterval(slideInterval);
    iniciarAutoSlide();
}

// Pausar auto-slide si el usuario pone el cursor sobre el slider
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderContainer.addEventListener('mouseleave', iniciarAutoSlide);
}

// Iniciar automáticamente al cargar
iniciarAutoSlide();

// #endregion

