document.addEventListener('DOMContentLoaded', () => {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    for (const registro of registros) {
        // Mostrar registros en la tabla
        displayRecord(registro);
    }
});

function displayRecord(registro) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${registro.nombre}</td>
        <td>${registro.apellido}</td>
        <td>${registro.fecha}</td>
        <td>${registro.proyecto}</td>
        <td>${registro.horas}</td>
        <td>${registro.descripcion}</td>
        <td><button class="btn btn-danger delete-btn">Eliminar</button></td>
    `;
    document.getElementById('report-container').appendChild(newRow);
}