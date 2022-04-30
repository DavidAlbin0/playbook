const explorer = {
  firstName: 'Carlo',
  lastName: 'Gilmar',
  age: 27,
  country: 'Mexico',
  city: 'CDMX',
  address: {
   zip_code: "03022",
   address: "Dr. Vertiz 10"
  },
  skills: [
    'JS',
    'Typescript',
    'Coffeescript'
  ],
  getFullName: function() { 
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(explorer.getFullName())

explorer.country = 'México Mágico'
explorer.skills.push('Elm') 

explorer.nationality = 'Mexican'
explorer.title = 'Mission Commander'

console.log(explorer)
explorer.getPersonInfo = function() {
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.`
  return statement
}

console.log(explorer.getPersonInfo())

const explorersInNode = [
  {
    id: 1,
    name: "Explorer Name",
    username: "explorer1",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  },
  {
    id: 2,
    name: "Explorer Name",
    username: "explorer2",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  },
  {
    id: 3,
    name: "Explorer Name",
    username: "explorer3",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  }
]