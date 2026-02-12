/* configuracion del proyecto */
console.log('Hola Mundo');

// funciones de javascript//

function hello(){
    console.log("Hola Mundo");
}  
hello();

// 2 programacion funcional
function hello(){
    return function( ){
        return "Hola Mundo";
    }
}
 console.log(hello()());   

// funciones con parametros
function hello(name){
        return "Hola " + name;
    }
console.log(hello("Juan"));

// 1. suma
function add(x, y){
    return x + y;
}
console.log(add(5, 10));

// parametros por defecto
function add(x, y = 0){
    return x + y;
}
console.log(add(5));

// objetos
const use ={
    name: "Juan",
    lastname: "Pérez",
    age: 30,
    address: {
        street: "Calle Falsa 123",
        city: "Springfield",
        country: "USA"
    },
    friends: ["Pedro", "María", "Luis"],
    active: true,       
    sendMail: function(){
        return "Enviando correo a " + this.name;
    }
}

console.log(use);
console.log(use.friends);
console.log(use.sendMail());
console.log(use.address.city);

// shorthand property names
const name = "laptop";
const price = 1000;

const product = {
    name: name,
    price: price
};

console.log(product);

// manipulacion del DOM
const title = document.createElement("h1");
title.innerText = "Hola Mundo";

const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", function() {
    title.innerText = "Texto actualizado con JS";
    alert("se realizo click");
});

document.body.appendChild(title);
document.body.appendChild(button);

// objetos como parametros
const user1 = {
    name: "sofia, stephanie y lina",
    age: 30
};

function printUserInfo(user) {
    return "<h1>Hola: " + user.name + "</h1> ";
}

console.log(printUserInfo(user));
document.body.innerHTML += printInfo(user);

// Destructuring de objetos
const usuario = {
    name: "Juan",
    age: 30
};

function printInfo(user) {
    const { name, age } = user;
    return "<h1>Hola: " + name + "</h1> ";
}
console.log(printInfo(user));
document.body.innerHTML = printInfo(user);

// Funciones anonimas

const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", function() {
    alert("Botón clickeado");
});

document.body.append(button);

// arrow function

function add(x, y) {
    return x + y;
}
const add = (x, y) => {
    return x + y;
}

const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", () =>{
    alert("Botón clickeado");
});

document.body.append(button);

// Inline arrow function
const showText = () => "Hola Mundo"
const showNumber = () => 50;
const showBoolean = () => true;
const showArray = () => [1, 2, 3]
const showObject = () => ({ name: "stephanie"});

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());

const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", () => {
    alert("Botón clickeado");
});

document.body.append(button);

// return en funciones
const button = document.createElement("button");
button.innerText = "Click me";

button.addEventListener("click", () => {
    if (isAuthorized){
        return alert("Acceso autorizado");
    }
    alert("Acceso denegado");
});

document.body.append(button);

// string literals
const background = '#77d722'
const color = ''
const isAuthorized = true;

 const result = `estos son estilos: ${background}
 ${color} `

console.log(result)

const button = document.createElement('button')
button.innerText = 'click me';
button.style = 'background: red; color: white;'
button.style = `background: ${isAuthorized ? 'pink' : 'red'}; color: ${color}`



button.addEventListener('click' , ()  =>  {
    if (isAuthorized)   {
      return  alert('esta autorizado');
    } else  { 
        alert('no esta autorizado');
      }
})

document.body.append(button);

// Array methodos  

const names =   ['rayn', 'joe', 'maria']

// Map
// find
// filter
const newNames = names.filter(function (name)  { 
    if(name !== 'joe') {
        return name
    }
})
console.log(newNames)

// concat methodos

const nama = ['ryan', 'joe', 'maria']
const nownames = ['marcos', 'mario', 'john']

console.log(nama.concat(nownames))

// spread operator

const namo = ['ryan', 'joe', 'maria']
const nawnames = ['marcos', 'mario', 'john']

console.log([...namo, ...nawnames])

// con objetos

const user =  {
    nami:"ryan",
    lastname: "ray"
}

const address = {
    street:'main street 123',
    city:'bogota'
}

const userInfo = {
    ...user,
    ...address
}

console.log(userInfo)

// ecmascript modules
import {add, multiply, active, title, points} from './add.js'

console.log(active, points, title);
console.log(add(10, 20));
console.log(multiply(10, 20));

// Optional chaining

const person =  {
    namis:'ryan',
    address:{
        cityy:'london'
    }
   
    
}

console.log(person.location?.cityy)

// async await 
// biblioteca del navegador llamada

const ul= document.createElement('ul')
const li = document.createElement('li')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(response){
//      return response.json();
// })
// .then(function (data){
//     console.log(data)
//     data.forEach(function(post ){
//         const li = document.createElement('li')
//         li.innerText = post.title
//         ul.append(li)
//     });
//     document.body.append(ul);
//     });
async function load() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function(post){
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}
    

