// 1
let Coche = {
    marca: "",
    modelo: "",
    matricula: "",
};
// 2
let Casa = {
    codPostal: "",
    calle: "",
    portal: 0,
    piso: 0,
}
// 3
let FullStackDeveloper = {
    lenguajes:[],
    proyectos:[],
}
// 4
let Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function() {
        return console.log("guau");
    },
    popo: function() {
        return Math.random()*3
    }
}
// 5
let marcaPortatil = Portatil.marca;
// 6 
let marcaPortatil2 = Portatil.marca.toString();
// 7
let grupos = Concierto.grupos;
// 8
let RGB = [Led.rojo, Led.verde, Led.azul];
// 9
Portatil.modelo = "P345";
// 10
Concierto.cartelera.push("Guns N' Roses");
// 11
Concierto.fecha = new Date;
// 12
let Obj = {
    nombreArchivo:"",
    copias:"",
    numPaginas:"",
};
Impresora.imprimiendo = Obj;
// 13
let Noticia ={
    titular:"",
    cuerpo:"",
}
// 14
let Persona ={
    nombre:"",
    apellidos:"",
    edad:"",
}
// 15
let Avion ={
    numPasajeros:"",
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino")
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
};
// 16
let Paquete ={
    contenido:[],
};
// 17
let Pais ={
    numHabitantes: 0,
    continente:"",
    gentilicio:"",
}
// 18
let codError = O_Error.codigo;
// 19
let integrantes = Grupo.integrantes;
// 20
let nivelesTinta = Impresora.tinta;
// 21
let pixeles = Pantalla.pixeles;
// 22
let especificaciones = Movil.especificaciones;
// 23
Grupo.numIntegrantes = 5;
// 24
Pantalla.dimensiones = "1920x1080";
// 25
if(Led.encendido){
    Led.encendido = false;
}else{
    Led.encendido = true;
};
// 26
Movil.temperatura = "20º";