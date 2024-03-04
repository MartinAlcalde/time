function addRecord(registro) {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));
    document.getElementById('form').reset();
    displayRecord(registro);
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        const index = Array.from(row.parentNode.children).indexOf(row);
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.splice(index, 1);
        localStorage.setItem('registros', JSON.stringify(registros));
        row.remove();
    }
});