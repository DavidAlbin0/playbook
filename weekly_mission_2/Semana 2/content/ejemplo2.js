class Person {
}
console.log("Ejemplo 1: Crear una clase vacía")
console.log(Person)

class Pet {
}
const myPet1 = new Pet() 
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
console.log(myPet1) 

class Student {
  constructor(name, age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}

const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)

class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ 
    return `Repository ${this.name} has ${this.stars} stars`
  }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())

class PullRequest {
  constructor(repo, title, lines_changed){
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = "OPEN"
    this.dateCreated = new Date() 
	}

  getInfo(){
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())

class Ajolonauta {
  constructor(name, age, stack){
   this.name = name
   this.age = age
   this.stack = stack
   this.exercises_completed = 0
   this.exercises_todo = 99
  }

  get getExercisesCompleted() {
		return this.exercises_completed
  }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)

class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 0
	  this.lives = 0
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

console.log(missionCommanderNode.getStudents) 
console.log(missionCommanderNode.getLives)

missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)

class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Ejemplo 8: Métodos static")
console.log(Toolbox.getMostUsefulTools())
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) 

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) 
    this.cycle = cycle 
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() 
        return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername())
console.log(viajero1.getGeneralInfo()) 