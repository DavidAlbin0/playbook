// Funcion que se guarda en el modulo como info

console.log = (message) => {
    console.log(`info: ${message}`)
}

exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}