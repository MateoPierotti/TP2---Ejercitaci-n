const suma = (n1, n2)=>{
    return n1 + n2
}
// console.log(suma(30, 4))

const multiplicar  = (n1, n2)=>{
    return n1 * n2
}
// console.log(multiplicar (3, 4))

function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}
// console.log(saludar("Mateo"));
// console.log(saludar()); 

const crearPersona = (nombre, edad) => {
    return{
        nombre: nombre,
        edad: edad
    };
}
const persona = crearPersona('Mateo', 20);

// console.log(persona);

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}
actualizarEdad(persona, 26);
// console.log(persona); 

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// console.log(factorial(5));

function despedir() {
    function adios() {
        return "adios";
    }
    return adios();
}
// console.log(despedir());


function procesarArray(array, funcion) {
    return array.map(funcion);
}

function multiplicarPorDos(num) {
    return num * 2;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = procesarArray(numeros, multiplicarPorDos);

// console.log(resultado); 

function crearMultiplicador(x) {
    return function (numero) {
        return numero * x;
    };
}
const multiplicarPor3 = crearMultiplicador(3);
const multiplicarPor5 = crearMultiplicador(5);

// console.log(multiplicarPor3(4));
// console.log(multiplicarPor5(6));

const sumarAnonima = function(a, b) {
    return a + b;
};
const resultado1 = sumarAnonima(3, 7);

// console.log(resultado1); 

// 
function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function imprimirNombresDeUsuarios() {
    obtenerUsuarios()
        .then(usuarios => {
            if (usuarios) {
                const nombres = usuarios.map(usuario => usuario.name);
                console.log(nombres);
            }
        })
        .catch(error => {
            console.error('Error al procesar los usuarios:', error);
        });
}

// imprimirNombresDeUsuarios();



const usuarioPredefinido = {
    usuario: "admin",
    contraseña: "1234"
};


function autenticarUsuario(credenciales) {
    return (
        credenciales.usuario === usuarioPredefinido.usuario &&
        credenciales.contraseña === usuarioPredefinido.contraseña
    );
}
const credencialesCorrectas = {
    usuario: "admin",
    contraseña: "1234"
};

const credencialesIncorrectas = {
    usuario: "user",
    contraseña: "password"
};

// console.log(autenticarUsuario(credencialesCorrectas)); 
// console.log(autenticarUsuario(credencialesIncorrectas)); 



// 
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}

const usuarios = [
    { name: "Mateo", email: "mateo@example.com", phone: "1234567890" },
    { name: "Ana", email: "ana@example.com", phone: "0987654321" },
    { name: "Luis", email: "luis@example.com", phone: "1122334455" }
];

const usuariosMapeados = mapearUsuarios(usuarios);

// console.log(usuariosMapeados);




function validarFormulario(campo) {
    
    if (campo.nombre && campo.email && campo.password &&
        campo.nombre.trim() !== "" &&
        campo.email.trim() !== "" &&
        campo.password.trim() !== "") {
            return true
        
    } else {
        return false
    }
    
}

const formularioValido = {
    nombre: "Mateo",
    email: "mateo@example.com",
    password: "secreta"
};

const formularioInvalido = {
    nombre: "",
    email: "ana@example.com",
    password: "1234"
};

// console.log(validarFormulario(formularioValido));  
// console.log(validarFormulario(formularioInvalido)); 


// 
function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

const datos = [
    "Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5",
    "Elemento 6", "Elemento 7", "Elemento 8", "Elemento 9", "Elemento 10",
    "Elemento 11", "Elemento 12", "Elemento 13", "Elemento 14", "Elemento 15"
];

// console.log(obtenerPagina(datos, 1)); 
// console.log(obtenerPagina(datos, 2)); 
// console.log(obtenerPagina(datos, 3)); 
// console.log(obtenerPagina(datos, 4)); 



function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        return response.json();
    })
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const datos1 = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

// enviarDatos(datos1);

// 
function buscarUsuarioPorEmail(usuarios1, email) {
    return usuarios.find(usuario => usuario.email === email);
}

const usuarios1 = [
    { nombre: "Mateo", email: "mateo@example.com", edad: 30 },
    { nombre: "Ana", email: "ana@example.com", edad: 25 },
    { nombre: "Luis", email: "luis@example.com", edad: 28 }
];

const emailABuscar = "ana@example.com";
const usuarioEncontrado = buscarUsuarioPorEmail(usuarios1, emailABuscar);

// console.log(usuarioEncontrado);


// 
function generarToken(usuario) {
    
    const header = { alg: "HS256", typ: "JWT" };
    const payload = usuario;
    
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));

    return `${encodedHeader}.${encodedPayload}`;
}


const usuario = {
    id: 1,
    nombre: "Mateo",
    email: "mateo@example.com"
};

const token = generarToken(usuario);

// console.log(token);



// 
function actualizarUsuario(usuario, cambios) {
    return Object.assign({}, usuario, cambios);
}


const usuario2 = {
    nombre: "Mateo",
    email: "mateo@example.com",
    edad: 30
};

const cambios = {
    email: "mateo.nuevo@example.com",
    edad: 31
};

const usuarioActualizado = actualizarUsuario(usuario2, cambios);

console.log(usuarioActualizado);




