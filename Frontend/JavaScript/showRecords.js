function showRecords(){
    const registros = JSON.parse(localStorage.getItem('registros')) || [];

    if(registros.length > 0){
        console.log('Registros guardados.');
        registros.forEach(registro =>{
            console.log(registro)
        });
    } else {
        console.log('No hay registros guardados.');
    }
}

showRecords();

// La función no está funcionando bien, solamente muestra el alert de inputPicker.js de que debo ingresar datos, cuando en realidad ya los tengo puestos. Raro.