// THIS

console.log(`Global: `,this);
// console.log(window);
// console.log(window === this);

// This dentro de un objeto hace referencia al mismo objeto
const personaje = {
    nombre: 'Pedro',
    apellido: 'Picapiedra',
    saludar(){
        console.log(`Objeto: `, this);
    }
}

personaje.saludar();

// Dentro de un funcion el objeto this hace referencia a Window
function probarThis(){
    console.log(`Funcion: `,this);
}

probarThis()

// Lexical this
// const Persona = function(){
//     this.nombre = '';
//     this.apellido = '';
//     this.edad = 0;
//     console.log('Estado this: ', this);
//     const self = this
//     setInterval(function(){
//         console.log('Estado Interval this: ', this);
//         console.log('Estado Interval self: ', self);
//         // this.edad++
//         self.edad++
//     }, 1000)
// }

// Solucion
const Persona = function(){
    this.nombre = '';
    this.apellido = '';
    this.edad = 0;
    console.log('Estado this: ', this);
    setInterval(()=>{
        console.log('Estado Interval this: ', this);
        this.edad++
    }, 1000)
}


const pedro = new Persona()
console.log(pedro);