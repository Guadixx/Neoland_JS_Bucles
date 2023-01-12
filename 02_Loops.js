//Iteración 1: Usa includes
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (const product of products){
    if (product.includes('Camiseta')){
        console.log(product)
    }
         

    }
    
    
//Iteración 2: Condicionales Avanzados 
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}]
        
for (trimestre of alumns){ 
    console.log(trimestre);
    if (trimestre.T1 === false && trimestre.T2 === false && trimestre.T3 === false){
        console.log("Estas suspendido.");
    } else if (trimestre.T1 === false && trimestre.T2 === false){
        console.log("Estas suspendido");
    } else if (trimestre.T2 === false && trimestre.T3 === false){
        console.log("Estas suspendido");
    } else if (trimestre.T1 && trimestre.T3 === false){
        console.log("Estas suspendido");
    } else {
        console.log("Estas aprobado");
    }
}

//Iteración 3: For of 

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const listaDeLugares of placesToTravel){
    console.log(listaDeLugares);
}
    
//Iteración 4: For in
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (let definicion in alien){
    console.log("Este alien tiene la caracteristica " + definicion + " con valor: " + alien[definicion])
}

//Iteración 5: Probando for 
const placesToTravelTwo = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let place in placesToTravelTwo){
    if (placesToTravelTwo[place].id === 11 || placesToTravelTwo[place].id === 40){
    const removed = placesToTravelTwo.splice(place, 1) 
    } 
}
console.log(placesToTravelTwo);

//Tenes que especificar cuando es un array object = nombre del array, el objeto y el index en el if.
//Iteración 6 
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
let elGato = [];
for (const toy of toys){
    if (toy.name.includes("gato") == false){
        elGato.push(toy.name);
        console.log(toy);
    }   
    
}
//Hay que poner el includes == false para que sepa que este valor está erroneo 
//empujas las variables false a la nueva lista 
//imprimis la lista con los false ("gato") eliminado 
//Itineración 7
const popularToys = [];
const toysTwo = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
//bucle for of tengo que agregar a un nuevo array los que tengas mas de 15 ventas 

for (item of toysTwo){
    if(item.sellCount > 15 == true){
        popularToys.push(item);
        
    } 
}
console.log(popularToys);

//tenes que prestar atención a la constante dentro del for loop. Esa es la que lleva el objeto y la que modifica el código 