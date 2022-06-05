function alerta2(t) {
  Swal.fire({

    title: '¡Exito!',
    text: t,
    icon: 'success',
    allowOutsideClick: false
  })
}

function alertae(t) {
  Swal.fire({
    icon: 'error',
    title: 'Error...',
    text: t
  })
}