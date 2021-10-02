// IF - else

// if(true){
// console.log('Es verdadero');
// }else{
//     console.log('Es falso');
// }

// Ternarios
const activo = true;
let mensaje;

// if(activo){
//     mensaje = 'Activo'
// }else{
//     mensaje = 'Inactivo'
// }

// condicion ? valorVerdadero : valorFalso
// mensaje = activo === true ? 'Activo' : 'Inactivo'
// mensaje = activo ? 'Activo' : 'Inactivo'
// mensaje = !activo ? 'Activo' :  activo ? 'Entro..!': 'Tampoco'
// mensaje = !activo ? 'Activo' : 'Inactivo'

// Modo corto
// mensaje = activo === true ? 'Activo' : null
// mensaje = !activo === true ? 'Activo' : null
// mensaje = activo && 'Activo'
mensaje = !activo && 'Activo'

console.log(mensaje);