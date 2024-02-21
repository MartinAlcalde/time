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
 

document.addEventListener('DOMContentLoaded', () => {
    const inputdata = document.getElementById("report-container");

    let reportList = localStorage.getItem("registros");

    inputdata.textContent = reportList;
    // I need improve this code, it's very ugly but it works haha
});