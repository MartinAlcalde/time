document.addEventListener('DOMContentLoaded', () => {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    for (const registro of registros) {
        // Mostrar registros en la tabla
        displayRecord(registro);
    }

    document.getElementById('report-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-modificar')) {
            console.log('Se ha hecho clic en el botón de modificar');
            // Obtener el índice del registro en la lista de registros
            const registroIndex = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
            
            // Obtener el registro correspondiente usando el índice
            const registro = registros[registroIndex];
            
            // Mostrar el modal de edición con los datos del registro
            mostrarModalEdicion(registro);
        }
    });
    
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
        <td><button type="button" class="btn btn-primary btn-modificar" data-bs-toggle="modal" data-bs-target="#editModal" id="updateRecord">Modificar</button></td>
        <td><button class="btn btn-danger delete-btn">Eliminar</button></td>
    `;
    document.getElementById('report-container').appendChild(newRow);
};