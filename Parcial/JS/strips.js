
const xhr = new XMLHttpRequest();
const xhr1 = new XMLHttpRequest();
var bt =document.getElementById("operation");
var idw =document.getElementById("departament");

xhr.open("GET","./Resources/departments.json",true)
xhr1.open("GET","./Resources/towns.json",true)


const filePath = './Resources/empleados.json';


xhr.onreadystatechange = ()=>{
  if( xhr.readyState === 4 ){
    const data = JSON.parse( xhr.responseText)
    fillByDepartament(data);
  
    bt.addEventListener("click",function(){
        entrar();})
    
  }
}

  xhr.send()


document.getElementById('apellidos').addEventListener('keypress', (event) => {
    if (!(/[a-zA-Z\s]/.test(event.key))) {
        //console.loSg('Valido')
        event.preventDefault()
    }
})

document.getElementById('nombres').addEventListener('keypress', (event) => {
    if (!(/[a-zA-Z\s]/.test(event.key))) {
        //console.loSg('Valido')
        event.preventDefault()
    }
})


document.getElementById('salario').addEventListener('keypress', (event) => {
    if (!(/[0-9]/.test(event.key))) {
        //console.log('Valido')
        event.preventDefault()
    }
})

function fillByDepartament(data) {
    var selec = document.getElementById('departament');
    var names = [];

    data.forEach((character)=>{
        if (!names.includes(character.name)) {
            names.push(character.name);
            var option = document.createElement('option');
            option.value = character.names;
            option.textContent = character.name;
            selec.appendChild(option);
        }
    });
  }

function entrar(){
    var apellidos1 = document.getElementById('apellidos').value;
    var names1 = document.getElementById('nombres').value;
    var departament1  = document.getElementById('departament').value;
    var city1 = document.getElementById('city').value;
    var salario1 = document.getElementById('salario').value;

    alert("Agregando...")
    
    var selec2 = document.getElementById('datosf');
    const selec3 =document.createElement('td');
    selec3.appendChild(document.createTextNode(apellidos1));
    row.appendChild(selec3);
}

  function obt(data1){
    var selec1 = document.getElementById('city');
    var namesr = [];

    // Limpiamos el select
    //selec.innerHTML = "";  
    // Iteramos sobre los datos JSON
    data1.forEach((character)=>{
        if (!namesr.includes(character.name)) {
            namesr.push(character.name);
            var option1 = document.createElement('option');
            option.value = character.namesr;
            option.textContent = character.name;
            selec1.appendChild(option1);
        }
    });

  }