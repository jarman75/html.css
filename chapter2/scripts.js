var dialog = document.getElementById('mi-ventana');
var btn_muestra = document.getElementById('muestra');
var btn_cierra = document.getElementById('cerrar');

/* btn_muestra.onclick = function() {
    ventana.showModal();
}
btn_cierra.onclick = function() {
    ventana.close();
} */

function openCheck(dialog) {
    if(dialog.open) {
      console.log('Dialog open');
    } else {
      console.log('Dialog closed');
    }
  }

 // Update button opens a modal dialog
 btn_muestra.addEventListener('click', function() {
    dialog.showModal();
    openCheck(dialog);
  });

  // Form cancel button closes the dialog box
  btn_cierra.addEventListener('click', function() {
    dialog.close();
    openCheck(dialog);
  });