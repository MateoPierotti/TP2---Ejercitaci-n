
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    _añoDePublicacion: 1967,  

    get añoDePublicacion() {
        return this._añoDePublicacion;
    },
    set añoDePublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            this._añoDePublicacion = nuevoAño;
        } else {
            console.log("Por favor, introduce un año válido.");
        }
    }
};

libro.añoDePublicacion = 1982;

console.log(libro.añoDePublicacion); 


const direc = {
    calle: '9 de Julio',
    ciudad: 'Concepcion del Uruguay',
    pais: 'Argentina'
}

const estudiante = {
    nombre: 'Mateo',
    edad: 20,
    direccion: 'colon'
}

const descripcion = (libro) => {
    console.log('Mostrando datos del libro: Libro: ' + libro.titulo + ' Autor: ' + libro.autor + 'Año De Publicacion' + libro.añoDePublicacion);
}

// descripcion(libro)

const producto  = {
    nombre: 'Casco',
    precio : '200',
    disponible: true
}

producto.precio = 120400


const tienePropiedad = (objeto, cadena) => {
    if (cadena in objeto) {
        return true   
    } else {
        return false
    }
}
// console.log(tienePropiedad(producto, 'precio'))

delete producto.disponible;

// for (let propiedad in producto) {
//     console.log(`${propiedad}: ${producto[propiedad]}`);
// }

const persona1 = {
    nombre: 'Mateo',
    edad: 20,
    codigopostal: 3260
}

const persona2 = {
    nombre: 'Valen',
    edad: 21,
    profesion: 'administracion de empresa'
}

const mix = Object.assign(persona1, persona2)

// console.log(mix)

const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

copiaEstudiante.nombre = 'Juan'
copiaEstudiante.edad = 40
copiaEstudiante.direccion = 'concepcion del uruguay'

// for (let propiedad in estudiante) {
//     console.log(`${propiedad}: ${estudiante[propiedad]}`);
// }

// for (let propiedad in copiaEstudiante) {
//     console.log(`${propiedad}: ${copiaEstudiante[propiedad]}`);
// }

