document.addEventListener('DOMContentLoaded', function() {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0];

    // Establecer la fecha actual en el campo de fecha
    document.getElementById('date').value = today;
  });