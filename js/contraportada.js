// Referencias a elementos del modal 1 (Agrocatalogo)
const pdfModal = document.getElementById('pdfModal');
const closePdfBtn = document.getElementById('closePdfBtn');

// Referencias a elementos del modal 2 (Maquicatalogo)
const pdfModal2 = document.getElementById('pdfModal2');
const closePdfBtn2 = document.getElementById('closePdfBtn2');

// Obtener todos los panel-link
const panelLinks = document.querySelectorAll('.panel-link');

// Manejar clicks en los panel-link
panelLinks.forEach((link, index) => {
  link.addEventListener('click', function() {
    // El segundo panel (índice 1) abre el modal del Agrocatalogo
    if (index === 1) {
      pdfModal.classList.add('active');
    }
    // El tercer panel (índice 2) abre el modal del Maquicatalogo
    else if (index === 2) {
      pdfModal2.classList.add('active');
    }
    // Los demás navegan a su href
    else {
      const href = this.getAttribute('data-href');
      if (href) window.location.href = href;
    }
  });
});

// Cerrar el modal 1 al hacer click en el botón de cerrar
closePdfBtn.addEventListener('click', function() {
  pdfModal.classList.remove('active');
});

// Cerrar el modal 2 al hacer click en el botón de cerrar
closePdfBtn2.addEventListener('click', function() {
  pdfModal2.classList.remove('active');
});
