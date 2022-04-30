let a = 'JavaScript'
let b = 10

function my_function_to_show_scopes() {
  console.log(a, b) 
  if (true) {
    let a = 'Elixir'
    let b = 999
    console.log(a, b) 
  }
  console.log(a, b)
}
my_function_to_show_scopes()

console.log(a, b)