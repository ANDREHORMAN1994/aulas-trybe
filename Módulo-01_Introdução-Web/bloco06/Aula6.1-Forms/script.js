window.onload = function () {
  createOptions();
  valueData();
  clickButton();
};

const selectStates = document.querySelector('#estado');

function createOptions() {
  let object = {
    AC: 'Acre',
    AL: 'Alagoas',
    AP: 'Amapá',
    AM: 'Amazonas',
    BA: 'Bahia',
    CE: 'Ceará',
    DF: 'Distrito Federal',
    ES: 'Espírito Santo',
    GO: 'Goiás',
    MA: 'Maranhão',
    MT: 'Mato Grosso',
    MS: 'Mato Grosso do Sul',
    MG: 'Minas Gerais',
    PA: 'Pará',
    PB: 'Paraíba',
    PR: 'Paraná',
    PE: 'Pernambuco',
    PI: 'Piauí',
    RJ: 'Rio de Janeiro',
    RN: 'Rio Grande do Norte',
    RS: 'Rio Grande do Sul',
    RO: 'Rondônia',
    RR: 'Roraima',
    SC: 'Santa Catarina',
    SP: 'São Paulo',
    SE: 'Sergipe',
    TO: 'Tocantins',
  };
  for (let i in object) {
    let options = document.createElement('option');
    options.innerText = object[i];
    selectStates.appendChild(options);
  }
  // console.log(Object.keys(object).length)

  let options = document.createElement('option');
  options.innerText = 'Selecione seu Estado';
  options.selected = 'selected';
  selectStates.appendChild(options);
  selectStates.insertBefore(options, selectStates.firstChild);
}

const inputData = document.getElementById('dataInicio');

function valueData() {
  inputData.placeholder = 'dd/mm/aa';
  inputData.style.textAlign = 'center';
  // let inputData.value = inputData.value.split("");

  inputData.addEventListener('change', function () {
    if (
      inputData.value[2] !== '/' ||
      inputData.value[5] !== '/' ||
      inputData.value.length !== 10
    ) {
      alert('Data com formato inválido!!');
    } else if (
      inputData.value[0] + inputData.value[1] <= 0 ||
      inputData.value[0] + inputData.value[1] > 31
    ) {
      alert('Data com formato inválido!!');
    } else if (
      inputData.value[3] + inputData.value[4] <= 0 ||
      inputData.value[3] + inputData.value[4] > 12
    ) {
      alert('Data com formato inválido!!');
    } else if (
      inputData.value[6] +
        inputData.value[7] +
        inputData.value[8] +
        inputData.value[9] <=
      0
    ) {
      alert('Data com formato inválido!!');
    }
    // console.log(inputData.value.length);
  });
}

const buttonSubmit = document.querySelector('.button-submit');
const field = document.querySelector('.information-user');

const name = document.querySelector('#nome');
const street = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const address = document.querySelector('#endereço');
const city = document.querySelector('#cidade');
const radio = document.querySelector("input[name='radioButton']");
const curriculum = document.querySelector('#currículo');
const job = document.querySelector('#cargo');
const descriptionJob = document.querySelector('#descrição');
const data = document.querySelector('#dataInicio');

function clickButton() {
  buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    field.innerHTML += `Seu ${name.name} é ${name.value}<br>`;
    field.innerHTML += `Seu ${street.name} é ${street.value}<br>`;
    field.innerHTML += `Seu ${cpf.name} é ${cpf.value}<br>`;
    field.innerHTML += `Seu ${address.name} é ${street.value}<br>`;
    field.innerHTML += `Sua ${city.name} é ${city.value}<br>`;
    field.innerHTML += `Sua moradia é ${radio.value}<br>`;
    field.innerHTML += `Seu ${curriculum.name} é ${curriculum.value}<br>`;
    field.innerHTML += `Seu ${job.name} é ${job.value}<br>`;
    field.innerHTML += `Descrição do cargo é ${descriptionJob.value}<br>`;
    field.innerHTML += `Sua data é ${data.value}<br>`;
  });
  // console.log(name.name);
}

const buttonClear = document.querySelector('.clear-fields');

function clear() {
  buttonClear.addEventListener('click', function () {
    name.value = '';
    street.value = '';
    cpf.value = '';
    address.value = '';
    city.value = '';
    radio.value = '';
    curriculum.value = '';
    job.value = '';
    descriptionJob.value = '';
    data.value = '';
    field.innerHTML = '';
  });
}
