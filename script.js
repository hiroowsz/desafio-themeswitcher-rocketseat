let opcaoselecionada = document.querySelectorAll("input.tg") // colocar como id ou class, class para varios elementos
let corsection = document.querySelector("section") 
let corbody = document.querySelector("body") 
let atualtxt = document.querySelector("p#atualtxt")

function clicar(){
if (opcaoselecionada[0].checked) {
    atualtxt.innerHTML = `Modo light ativo.`
    corbody.style.backgroundColor = 'white'
    corbody.style.color = 'black'  
    corsection.style.backgroundColor = 'black' 
    corsection.style.color = 'white' 
    } else if(opcaoselecionada[1].checked) {
    atualtxt.innerHTML = `Modo dark ativo.`
    corbody.style.backgroundColor = 'black'  
    corbody.style.color = 'white' 
    corsection.style.backgroundColor = 'white'
    corsection.style.color = 'black' 
  }
} 