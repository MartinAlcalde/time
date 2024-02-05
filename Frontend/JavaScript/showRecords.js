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
