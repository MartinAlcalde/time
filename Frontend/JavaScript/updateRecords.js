document.getElementById('report-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-modificar')) {
        const registroId = event.target.dataset.registroId;
        const registro = registros.find(registro => registro.id === registroId);
        mostrarModalEdicion(registro);
    }
});

function mostrarModalEdicion(registro) {
    // Llenar los campos del modal con los datos del registro
    document.getElementById('nombre').value = registro.nombre;
    document.getElementById('apellido').value = registro.apellido;
    document.getElementById('fecha').value = registro.fecha;
    document.getElementById('project').value = registro.proyecto;
    document.getElementById('hours').value = registro.horas;
    document.getElementById('description').value = registro.descripcion;
    
    // Mostrar el modal
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

document.getElementById('btnConfirmarCambios').addEventListener('click', () => {
    // Obtener los nuevos valores del modal de edición
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;
    const proyecto = document.getElementById('project').value;
    const horas = document.getElementById('hours').value;
    const descripcion = document.getElementById('description').value;

    // Actualizar los datos del registro
    registro.nombre = nombre;
    registro.apellido = apellido;
    registro.fecha = fecha;
    registro.proyecto = proyecto;
    registro.horas = horas;
    registro.descripcion = descripcion;

    // Actualizar la interfaz de usuario
    actualizarRegistroEnInterfaz(registro);

    // Cerrar el modal de edición
    const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
});

function actualizarRegistroEnInterfaz(registro) {
    // Actualizar los elementos de la tabla con los nuevos valores del registro
    const fila = document.querySelector(`tr[data-registro-id="${registro.id}"]`);
    fila.innerHTML = `
        <td>${registro.nombre}</td>
        <td>${registro.apellido}</td>
        <td>${registro.fecha}</td>
        <td>${registro.proyecto}</td>
        <td>${registro.horas}</td>
        <td>${registro.descripcion}</td>
        <td><button type="button" class="btn btn-primary btn-modificar" data-bs-toggle="modal" data-bs-target="#editModal" data-registro-id="${registro.id}">Modificar</button></td>
        <td><button class="btn btn-danger delete-btn">Eliminar</button></td>
    `;
}
