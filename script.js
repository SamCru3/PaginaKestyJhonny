// #region Base de Datos

const BaseDeDatos = {
    1001: {
        nombre: "Anillo de Snoopy",
        ennombre: "Snoopy Ring",
        categoria: "Anillos",
        precio: "$86.900 COP",
        imagen: "Imagenes/1001.jpeg",
        descripcion: "Un anillo inspirado en Snoopy para regalarle algo tan especial como su conexión.",
        endescripcion: "A Snoopy-inspired ring, a gift as special as the connection you share."
    },
    1002: {
        nombre: "Tú Eres Mi Sol",
        ennombre: "You Are My Sun",
        categoria: "Anillos",
        precio: "$129.900 COP",
        imagen: "Imagenes/1002.jpeg",
        descripcion: "Un diseño de sol y luna para esa persona que ilumina tus días.",
        endescripcion: "A sun and moon design for the person who lights up your days."
    },
    1003: {
        nombre: "Corazón de Esmeralda",
        ennombre: "Emerald Heart",
        categoria: "Anillos",
        precio: "$99.900 COP",
        imagen: "Imagenes/1003.jpeg",
        descripcion: "Una joya con una piedra verde en forma de corazón para sorprender a tu novia con elegancia.",
        endescripcion: "A piece of jewelry with a green heart-shaped stone to surprise your girlfriend with elegance."
    },
    1004: {
        nombre: "Mi Corazón es Tuyo",
        ennombre: "My Heart Is Yours",
        categoria: "Anillos",
        precio: "$89.900 COP",
        imagen: "Imagenes/1004.jpeg",
        descripcion: "Un anillo dorado con un corazón brillante para decirle que ocupa un lugar especial en tu vida.",
        endescripcion: "A golden ring with a sparkling heart to tell her she holds a special place in your life."
    },
    1005: {
        nombre: "Amor Azul",
        ennombre: "Blue Love",
        categoria: "Anillos",
        precio: "$99.900 COP",
        imagen: "Imagenes/1005.jpeg",
        descripcion: "Un delicado anillo azul para regalarle un recuerdo bonito de su historia juntos.",
        endescripcion: "A delicate blue ring to give her a beautiful reminder of your story together."
    },
    1006: {
        nombre: "Dulce Encantado",
        ennombre: "Sweet Enchantment",
        categoria: "Anillos",
        precio: "$119.900 COP",
        imagen: "Imagenes/1006.jpeg",
        descripcion: "Piedras rosadas y detalles dorados para consentir a la mujer que te hace feliz.",
        endescripcion: "Pink stones and golden details to pamper the woman who makes you happy."
    },
    1007: {
        nombre: "Mi Niña de Corazón Rosa",
        ennombre: "My Pink-Hearted Girl",
        categoria: "Anillos",
        precio: "$99.900 COP",
        imagen: "Imagenes/1007.jpeg",
        descripcion: "Una joya delicada con una piedra rosa que simboliza ternura y cariño.",
        endescripcion: "A delicate piece with a pink stone that symbolizes tenderness and affection."
    },
    1008: {
        nombre: "Snoopy Abrazos para Ti",
        ennombre: "Snoopy Hugs for You",
        categoria: "Peluches",
        precio: "$79.900 COP",
        imagen: "Imagenes/1008.jpeg",
        descripcion: "Snoopy abrazando a Woodstock, un regalo tierno para recordarle cuánto la quieres.",
        endescripcion: "Snoopy hugging Woodstock, a sweet gift to remind her how much you love her."
    },
    1009: {
        nombre: "Lotso cariñoso",
        ennombre: "Cuddly Lotso",
        categoria: "Peluches",
        precio: "$69.900 COP",
        imagen: "Imagenes/1009.jpeg",
        descripcion: "Un osito rosado, suave y adorable para sacarle una sonrisa a tu novia.",
        endescripcion: "A soft, adorable pink teddy bear to bring a smile to your girlfriend's face."
    },
    1010: {
        nombre: "Un Abrazo Gigante",
        ennombre: "A Giant Hug",
        categoria: "Peluches",
        precio: "$119.900 COP",
        imagen: "Imagenes/1010.jpeg",
        descripcion: "Un oso grande con moño rojo para que sienta tu cariño cada vez que lo abrace.",
        endescripcion: "A big bear with a red bow so she feels your love every time she hugs it."
    },
    1011: {
        nombre: "Los ositos cariñosos",
        ennombre: "The Cuddly Little Bears",
        categoria: "Peluches",
        precio: "$60.900 COP",
        imagen: "Imagenes/1011.jpeg",
        descripcion: "Ositos coloridos para llenar su día de ternura",
        endescripcion: "Colorful little bears to fill her day with tenderness."
    },
    1012: {
        nombre: "Mi Capibara Favorito",
        ennombre: "My Favorite Capybara",
        categoria: "Peluches",
        precio: "$59.900 COP",
        imagen: "Imagenes/1012.jpeg",
        descripcion: "Un capibara suave y divertido para una novia que ama los peluches originales.",
        endescripcion: "A soft, funny capybara for a girlfriend who loves original plushies."
    },
    1013: {
        nombre: "Tú y Yo, Siempre",
        ennombre: "You and Me, Always",
        categoria: "Peluches",
        precio: "$89.900 COP",
        imagen: "Imagenes/1013.jpeg",
        descripcion: "Stitch acompañado de un patito para representar la complicidad y el cariño de una pareja.",
        endescripcion: "Stitch with a little duck to represent the bond and affection of a couple."
    },
    1014: {
        nombre: "Para Mi Niña Bonita Hello Kitty",
        ennombre: "Hello Kitty, For My Pretty Girl",
        categoria: "Peluches",
        precio: "$69.900 COP",
        imagen: "Imagenes/1014.jpeg",
        descripcion: "Una Hello Kitty rosada para sorprender a esa chica que hace tus días más bonitos.",
        endescripcion: "A pink Hello Kitty to surprise the girl who makes your days brighter."
    },
    1015: {
        nombre: "Mi Amor es Infinito (28 rosas)",
        ennombre: "My Love Is Infinite (28 roses)",
        categoria: "Flores Eternas",
        precio: "$129.900 COP",
        imagen: "Imagenes/1015.jpeg",
        descripcion: "Rosas azules con mariposas doradas para un regalo elegante e inolvidable.",
        endescripcion: "Blue roses with golden butterflies for an elegant, unforgettable gift."
    },
    1016: {
        nombre: "Mi Princesa (22 rosas)",
        ennombre: "My Princess (22 roses)",
        categoria: "Flores Eternas",
        precio: "$99.900 COP",
        imagen: "Imagenes/1016.jpeg",
        descripcion: "Una combinación de rosas rosadas y blancas para hacerla sentir como una princesa.",
        endescripcion: "A mix of pink and white roses to make her feel like a princess."
    },
    1017: {
        nombre: "Tú Iluminas Mi Vida (35 rosas)",
        ennombre: "You Light Up My Life (35 roses)",
        categoria: "Flores Eternas",
        precio: "$129.900 COP",
        imagen: "Imagenes/1017.jpeg",
        descripcion: "Girasoles y rosas color crema para regalarle alegría y recordarle que hace tus días más felices.",
        endescripcion: "Sunflowers and cream-colored roses to give her joy and remind her she makes your days happier."
    },
    1018: {
        nombre: "El amor de mi vida (ramo de 60 flores eternas)",
        ennombre: "The Love of My Life (bouquet of 60 eternal flowers)",
        categoria: "Flores Eternas",
        precio: "$250.000 COP",
        imagen: "Imagenes/1018.jpeg",
        descripcion: "Ramo de rosas rojas que demuestran amor y pasión",
        endescripcion: "A bouquet of red roses that shows love and passion."
    },
    1019: {
        nombre: "La Reina de Mi Vida (40 rosas)",
        ennombre: "The Queen of My Life (40 roses)",
        categoria: "Flores Eternas",
        precio: "$139.900 COP",
        imagen: "Imagenes/1019.jpeg",
        descripcion: "Un ramo rosado con detalles brillantes para demostrarle que es alguien irremplazable.",
        endescripcion: "A pink bouquet with sparkling details to show her she is irreplaceable."
    }
}

// #endregion

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

// #region Nav

function mostrar(v) {
    let vistaReal = v;
    if (v === "mision" || v === "vision") {
        vistaReal = "nosotros";
    }

    if (!document.getElementById(vistaReal)) {
        vistaReal = "inicio";
    }

    document.querySelectorAll(".view").forEach(s => {
        s.classList.toggle("on", s.id === vistaReal);
    });

    document.querySelectorAll("nav a, .DropMenu a").forEach(a => {
        const href = a.getAttribute("href");
        const coincide = href === "#" + v || href === "#" + vistaReal;
        a.classList.toggle("on", coincide);
    });

    const navMenu = document.querySelector("nav");
    if (navMenu) {
        navMenu.classList.remove("open");
    }

    if (v === "mision" || v === "vision") {
        setTimeout(() => {
            const elemento = document.getElementById(v);
            if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo(0, 0);
            }
        }, 50);
    } else {
        window.scrollTo(0, 0);
    }
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

const navDropdowns = document.querySelectorAll('.NavDropdown');
navDropdowns.forEach(drop => {
    const btn = drop.querySelector('a');
    btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            drop.classList.toggle('open');
        }
    });
});

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

// #region Slider

const slides = document.querySelectorAll('.slider .slide');
const prevBtn = document.querySelector('.sl-btn.prev');
const nextBtn = document.querySelector('.sl-btn.next');
const sliderContainer = document.querySelector('.slider');

let currentSlide = 0;
let slideInterval;

function mostrarSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle('on', i === currentSlide);
    });
}

function nextSlide() {
    mostrarSlide(currentSlide + 1);
}

function prevSlide() {
    mostrarSlide(currentSlide - 1);
}

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

function iniciarAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
}

function reiniciarAutoSlide() {
    clearInterval(slideInterval);
    iniciarAutoSlide();
}

if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderContainer.addEventListener('mouseleave', iniciarAutoSlide);
}

iniciarAutoSlide();

// #endregion

// #region Productos

const IDIOMA = location.pathname.toLowerCase().includes('enindex') ? 'en' : 'es';

const TEXTOS = {
    es: {
        comprar: "Comprar",
        unProducto: "1 producto encontrado",
        variosProductos: n => n + " productos encontrados",
        carritoVacio: "Tu carrito está vacío por ahora.",
        cadaUno: "c/u",
        quitarUnidad: "Quitar una unidad",
        agregarUnidad: "Agregar una unidad",
        eliminar: "Eliminar"
    },
    en: {
        comprar: "Buy",
        unProducto: "1 product found",
        variosProductos: n => n + " products found",
        carritoVacio: "Your cart is empty for now.",
        cadaUno: "each",
        quitarUnidad: "Remove one unit",
        agregarUnidad: "Add one unit",
        eliminar: "Remove"
    }
};
const T = TEXTOS[IDIOMA];

const CategoriasProductos = [
    { id: "Todas", es: "Todas", en: "All" },
    { id: "Peluches", es: "Peluches", en: "Plush Toys" },
    { id: "Anillos", es: "Anillos", en: "Rings" },
    { id: "Flores Eternas", es: "Flores Eternas", en: "Eternal Flowers" }
];

const RangosPrecio = [
    { id: "todos", etiqueta: { es: "Todos los precios", en: "All prices" }, min: 0, max: Infinity },
    { id: "r1", etiqueta: { es: "Hasta $80.000", en: "Up to $80.000" }, min: 0, max: 80000 },
    { id: "r2", etiqueta: { es: "$80.001 - $100.000", en: "$80.001 - $100.000" }, min: 80001, max: 100000 },
    { id: "r3", etiqueta: { es: "$100.001 - $130.000", en: "$100.001 - $130.000" }, min: 100001, max: 130000 },
    { id: "r4", etiqueta: { es: "Más de $130.000", en: "Over $130.000" }, min: 130001, max: Infinity }
];

function etiquetaCategoria(id) {
    const cat = CategoriasProductos.find(c => c.id === id);
    return cat ? cat[IDIOMA] : id;
}

const gridProductos = document.getElementById('GridProductos');
const buscadorProductos = document.getElementById('BuscadorProductos');
const chipsCategorias = document.getElementById('ChipsCategorias');
const selectPrecio = document.getElementById('SelectPrecio');
const resultadosInfo = document.getElementById('ResultadosInfo');
const sinResultados = document.getElementById('SinResultados');
const limpiarFiltrosBtn = document.getElementById('LimpiarFiltros');

const filtrosProductos = { texto: "", categoria: "Todas", rango: "todos" };

function precioANumero(precio) {
    return parseInt(String(precio).replace(/\D/g, ''), 10) || 0;
}

function formatearPrecio(valor) {
    return "$" + valor.toLocaleString('es-CO') + " COP";
}

function normalizarTexto(texto) {
    return String(texto)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

const listaProductos = Object.entries(BaseDeDatos).map(([id, p]) => {
    const nombreEs = p.nombre.trim();
    const nombre = (IDIOMA === 'en' && p.ennombre) ? p.ennombre.trim() : nombreEs;
    const descripcion = (IDIOMA === 'en' && p.endescripcion) ? p.endescripcion : p.descripcion;

    return {
        id,
        nombre,
        nombreEs,
        categoria: p.categoria,
        descripcion,
        imagen: p.imagen,
        valor: precioANumero(p.precio),
        textoBusqueda: normalizarTexto(nombre + " " + descripcion)
    };
});

const productosPorId = new Map(listaProductos.map(p => [p.id, p]));

function productoCumpleFiltros(p) {
    if (filtrosProductos.categoria !== "Todas" && p.categoria !== filtrosProductos.categoria) {
        return false;
    }

    const rango = RangosPrecio.find(r => r.id === filtrosProductos.rango);
    if (rango && (p.valor < rango.min || p.valor > rango.max)) {
        return false;
    }

    const palabras = normalizarTexto(filtrosProductos.texto).split(/\s+/).filter(Boolean);
    return palabras.every(palabra => p.textoBusqueda.includes(palabra));
}

function crearTarjetaProducto(p) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'Producto';
    tarjeta.dataset.id = p.id;
    tarjeta.innerHTML = `
        <div class="ProductoImagen">
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        </div>
        <div class="ProductoInfo">
            <span class="ProductoCategoria">${etiquetaCategoria(p.categoria)}</span>
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <div class="ProductoPie">
                <span class="ProductoPrecio">${formatearPrecio(p.valor)}</span>
                <button type="button" class="ComprarBtn" data-id="${p.id}">${T.comprar}</button>
            </div>
        </div>
    `;
    return tarjeta;
}

function renderizarProductos() {
    if (!gridProductos) return;

    const filtrados = listaProductos.filter(productoCumpleFiltros);

    gridProductos.innerHTML = "";
    filtrados.forEach(p => gridProductos.appendChild(crearTarjetaProducto(p)));

    sinResultados.hidden = filtrados.length > 0;
    resultadosInfo.textContent = filtrados.length === 1
        ? T.unProducto
        : T.variosProductos(filtrados.length);
}

function crearChipsCategorias() {
    CategoriasProductos.forEach(cat => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'Chip' + (cat.id === filtrosProductos.categoria ? ' on' : '');
        chip.textContent = cat[IDIOMA];
        chip.dataset.cat = cat.id;
        chip.setAttribute('aria-pressed', cat.id === filtrosProductos.categoria);

        chip.addEventListener('click', () => {
            filtrosProductos.categoria = cat.id;
            chipsCategorias.querySelectorAll('.Chip').forEach(c => {
                const activo = c === chip;
                c.classList.toggle('on', activo);
                c.setAttribute('aria-pressed', activo);
            });
            renderizarProductos();
        });

        chipsCategorias.appendChild(chip);
    });
}

function crearOpcionesPrecio() {
    RangosPrecio.forEach(r => {
        const opcion = document.createElement('option');
        opcion.value = r.id;
        opcion.textContent = r.etiqueta[IDIOMA];
        selectPrecio.appendChild(opcion);
    });

    selectPrecio.addEventListener('change', () => {
        filtrosProductos.rango = selectPrecio.value;
        renderizarProductos();
    });
}

function limpiarFiltros() {
    filtrosProductos.texto = "";
    filtrosProductos.categoria = "Todas";
    filtrosProductos.rango = "todos";

    buscadorProductos.value = "";
    selectPrecio.value = "todos";
    chipsCategorias.querySelectorAll('.Chip').forEach(c => {
        const activo = c.dataset.cat === "Todas";
        c.classList.toggle('on', activo);
        c.setAttribute('aria-pressed', activo);
    });

    renderizarProductos();
}

if (gridProductos && buscadorProductos && chipsCategorias && selectPrecio) {
    crearChipsCategorias();
    crearOpcionesPrecio();

    buscadorProductos.addEventListener('input', () => {
        filtrosProductos.texto = buscadorProductos.value;
        renderizarProductos();
    });

    if (limpiarFiltrosBtn) {
        limpiarFiltrosBtn.addEventListener('click', limpiarFiltros);
    }

    gridProductos.addEventListener('click', (e) => {
        const btn = e.target.closest('.ComprarBtn');
        if (!btn) return;
        agregarAlCarrito(btn.dataset.id);
        abrirCarrito();
    });

    renderizarProductos();
}

// #endregion

// #region Carrito de Compras

const CLAVE_CARRITO = "kestyCarrito";
const CANTIDAD_MAXIMA = 20;

const cartCount = document.getElementById('cartCount');
const carritoBody = document.querySelector('.CarritoBody');
const carritoTotalEl = document.getElementById('CarritoTotal');
const checkoutBtn = document.querySelector('.CheckoutBtn');

const checkoutVacio = document.getElementById('CheckoutVacio');
const checkoutContenido = document.getElementById('CheckoutContenido');
const resumenLista = document.getElementById('ResumenLista');
const totalCheckout = document.getElementById('TotalCheckout');
const formCheckout = document.getElementById('FormCheckout');
const camposPedido = document.getElementById('CamposPedido');

function cargarCarrito() {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
        const limpio = {};
        if (guardado && typeof guardado === 'object') {
            Object.entries(guardado).forEach(([id, cant]) => {
                if (productosPorId.has(id) && Number.isInteger(cant) && cant > 0) {
                    limpio[id] = Math.min(cant, CANTIDAD_MAXIMA);
                }
            });
        }
        return limpio;
    } catch (error) {
        return {};
    }
}

function guardarCarrito() {
    try {
        localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    } catch (error) {
    }
}

let carrito = cargarCarrito();

function obtenerItemsCarrito() {
    return Object.entries(carrito)
        .filter(([id]) => productosPorId.has(id))
        .map(([id, cantidad]) => {
            const producto = productosPorId.get(id);
            return { producto, cantidad, subtotal: producto.valor * cantidad };
        });
}

function agregarAlCarrito(id) {
    if (!productosPorId.has(id)) return;
    carrito[id] = Math.min((carrito[id] || 0) + 1, CANTIDAD_MAXIMA);
    actualizarCarrito();
}

function cambiarCantidad(id, cambio) {
    const nueva = (carrito[id] || 0) + cambio;
    if (nueva <= 0) {
        delete carrito[id];
    } else {
        carrito[id] = Math.min(nueva, CANTIDAD_MAXIMA);
    }
    actualizarCarrito();
}

function quitarDelCarrito(id) {
    delete carrito[id];
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = {};
    actualizarCarrito();
}

function actualizarCarrito() {
    guardarCarrito();
    renderizarCarrito();
}

function crearHTMLItemCarrito({ producto: p, cantidad, subtotal }) {
    return `
        <div class="ItemCarrito">
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="ItemInfo">
                <h4>${p.nombre}</h4>
                <span class="ItemPrecio">${formatearPrecio(p.valor)}</span>
                <div class="ItemCantidad">
                    <button type="button" data-accion="menos" data-id="${p.id}" aria-label="${T.quitarUnidad}">−</button>
                    <span>${cantidad}</span>
                    <button type="button" data-accion="mas" data-id="${p.id}" aria-label="${T.agregarUnidad}">+</button>
                </div>
            </div>
            <div class="ItemLado">
                <button type="button" class="ItemQuitar" data-accion="quitar" data-id="${p.id}" aria-label="${T.eliminar} ${p.nombre}">&times;</button>
                <span class="ItemSubtotal">${formatearPrecio(subtotal)}</span>
            </div>
        </div>
    `;
}

function renderizarCarrito() {
    const items = obtenerItemsCarrito();
    const unidades = items.reduce((suma, item) => suma + item.cantidad, 0);
    const total = items.reduce((suma, item) => suma + item.subtotal, 0);

    if (cartCount) cartCount.textContent = unidades;
    if (carritoTotalEl) carritoTotalEl.textContent = formatearPrecio(total);
    if (checkoutBtn) checkoutBtn.disabled = items.length === 0;

    if (carritoBody) {
        carritoBody.innerHTML = items.length
            ? items.map(crearHTMLItemCarrito).join('')
            : '<p class="MensajeCarrito">' + T.carritoVacio + '</p>';
    }

    renderizarCheckout(items, total);
}

function renderizarCheckout(items, total) {
    if (!checkoutContenido || !checkoutVacio) return;

    checkoutVacio.hidden = items.length > 0;
    checkoutContenido.hidden = items.length === 0;

    if (resumenLista) {
        resumenLista.innerHTML = items.map(({ producto: p, cantidad, subtotal }) => `
            <li>
                <span>${cantidad} × ${p.nombre}<small>${formatearPrecio(p.valor)} ${T.cadaUno}</small></span>
                <span class="ResumenPrecio">${formatearPrecio(subtotal)}</span>
            </li>
        `).join('');
    }

    if (totalCheckout) totalCheckout.textContent = formatearPrecio(total);
}

function agregarCampoOculto(nombre, valor) {
    const campo = document.createElement('input');
    campo.type = 'hidden';
    campo.name = nombre;
    campo.value = valor;
    camposPedido.appendChild(campo);
}

if (carritoBody) {
    carritoBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-accion]');
        if (!btn) return;

        const id = btn.dataset.id;
        if (btn.dataset.accion === 'mas') cambiarCantidad(id, 1);
        else if (btn.dataset.accion === 'menos') cambiarCantidad(id, -1);
        else if (btn.dataset.accion === 'quitar') quitarDelCarrito(id);
    });
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (Object.keys(carrito).length === 0) return;
        cerrarCarrito();
        window.location.hash = 'checkout';
    });
}

if (formCheckout && camposPedido) {
    formCheckout.addEventListener('submit', (e) => {
        const items = obtenerItemsCarrito();
        if (items.length === 0) {
            e.preventDefault();
            return;
        }

        camposPedido.innerHTML = '';
        let total = 0;

        items.forEach(({ producto: p, cantidad, subtotal }, i) => {
            total += subtotal;
            agregarCampoOculto(
                'Producto ' + (i + 1),
                cantidad + ' x ' + p.nombreEs + ' (Cod. ' + p.id + ') - ' +
                formatearPrecio(p.valor) + ' c/u = ' + formatearPrecio(subtotal)
            );
        });

        agregarCampoOculto('Total del pedido', formatearPrecio(total));
        agregarCampoOculto('Idioma de la pagina', IDIOMA === 'en' ? 'Ingles' : 'Español');

        setTimeout(vaciarCarrito, 300);
    });
}

renderizarCarrito();

// #endregion