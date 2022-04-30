// Creando objetos

console.log("Objetos")

const miObjetc = {}
console.log("Ejemplo 1: Crear un objeto vacio")
console.log(myObject)

const myObject2 = {
    name: "Carlo",
    age: 27
}

console.log("Ejemplo2: Crear un objeto con propiedades")
console.log(myObject2)

const myObject3 = {
    name: "David",
    age: 2, 
    mocknames: [
        "Dave",
        "DavvaD",
        "Vidda"
    ],
address:{
    zip_code: "13100",
    street: "Belisario Dominguez 13",
    city: "CDMX"
    }
}

console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

const pet = {
    name: "Paco",

    sayHello: function(){
        console.log(`${this.name} te saluda en espaniol!`);
    }
}

console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()

const myPet ={
    name: "Argos",
    sayHelloToMyPet: function(yourpet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con metodo que recibe parametros")
myPet.sayHelloToMyPet("David")