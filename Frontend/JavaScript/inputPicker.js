// Obtener los input ingresados por el usuario
const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastname');
const inputDate = document.getElementById('date');
const inputProject = document.getElementById('project');
const inputHours = document.getElementById('hours');
const inputDescription = document.getElementById('description');

// Evento para manejar el formulario
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); //Evitar el envío por defecto del formulario.
    //Obtener los valores de los input
    const nombre = inputName.value;
    const apellido = inputLastName.value;
    const fecha = inputDate.value;
    const proyecto = inputProject.value;
    const horas = inputHours.value;
    const descripcion = inputDescription.value;
    // Verificamos que los campos estén completos
    if (nombre && apellido && fecha && proyecto && horas) {
        // Creamos un objeto que contenga la información de los campos
        const registro = {
            nombre,
            apellido,
            fecha,
            proyecto,
            horas,
            descripcion
        };
        // Llamar a una función externa para agregar el registro
        addRecord(registro);
    } else {
        alert('Complete todos los campos, por favor.');
    }
});