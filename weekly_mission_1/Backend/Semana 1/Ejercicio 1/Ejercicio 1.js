// Se crea un objeto

let newCar = new Object(); //Se crea nuestro nuevo objeto 
newCar.make = 'Honca';
newCar.model = 'Civic';
newCar.year = 1998;

console.log(newCar)

// Declaramos un objeto con variables locales y publicas

const myModule = (() => {

    //variables de contexto local
const privateFoo = "Valos privado, solo se usa en este objeto"
const privateBar = [1,2,3,4,5]
const baz = "Soy un valor que sera expuesto"

//variable para guardar variables locales 

const exported ={
    publicoFoo: "Valor publico, se le ve desde donde se le llame",
    publicoBar: "Otro valor publico",
        publicBaz: baz
}

return exported

})()

console.log(myModule)