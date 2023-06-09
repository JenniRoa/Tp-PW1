
const form = document.querySelector('#formContainer');
const submitButton = document.querySelector('#submitButton');
const dataList = document.querySelector('#dataList');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const empresa = document.querySelector('#Empresa').value;
    const sueldoMinimo = document.querySelector('#sueldoMinimo').value;
    const tipoMoneda = document.querySelector('#tipoMoneda').value;

    form.reset();

    const listItem = document.createElement('li');
    listItem.textContent = `Empresa: ${empresa}, Sueldo Mínimo: ${sueldoMinimo} ${tipoMoneda}`;

    dataList.appendChild(listItem);
});
