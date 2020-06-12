// FUNCIÓN ANTES DE ECMAS 6

function functionJS(name,age,country) {
    /*Podemos ver una declaración tradicional de JS con un paso de valorese en los parametros
    en este caso estamos haciendo una asignación de igual forma tradicional en la que indicaos
    que si el valor de name existe se asigne ese valor si no el valor por default sera diego
    esto va a suceder de la misma forma en cada elemento de la funcion 
    cabe resaltar que estamos usando VAR */
    var name= name || 'Diego';
    var age= age || 20;
    var country= country ||"MX";
}

function functionECMA(name='Diego',age=20,country='Mex') {
    /*en este caso los valores por defecto se van a dar en la declaración de los parametros
    y se entiende que si en la llamada de la función no se pasan parametros los valores que tendra serán los 
    declarados en la zona de parametros */  
    console.log(name,age,country);  
}


/*Lammada de la función de ECMA*/
functionECMA();
//Output : Diego 20 MEX
functionECMA('Maria',30,'COL');
//Output : Maria 30 COL

//Concatenación 

//Primero la foma convencional de concatenación era la siguiente: 
let hola="Hallo";
let world="Mundus";

//se podía hacer de forma asi Var1+ ''+ var2
let epicPhrase= hola+' '+world
console.log(epicPhrase)
//Output : Hallo Mundus

//Template Literals 
/* los template literals nos sirven para concatenar los elemento
de una forma más intuitiva si bien eso no solo nos permite adignar valor dinamicos 
a llamadas de API en templates de JS también nos permite evitar el uso de los operadores +*/

let epic2= `${hola} ${world}`;
console.log(epic2)
//Output : Hallo Mundus


/* Los saltos de linea convencionales nos obligaban a usar el + y el operador \n para saltar de linea */
let p= "Hola mi nombre es Diego Romero Mora \n" 
+" y me gustaria ser Ingeniero Front end";


/* EL uso de los template literals nos permiten evitar el uso de el operador + y de \n 
para hacer saltos de linea */
let p2=`Hola mi nombre es Diego de Granda 
 y ya soy Ingeniero Front end`;

 console.log(p);
 /* Output:
 Hola mi nombre es Diego Romero Mora 
 y me gustaria ser Ingeniero Front end */

 console.log(p2);

 /*Output :
 Hola mi nombre es Diego de Granda 
 y ya soy Ingeniero Front end */


//Desestructuración


let person= {
    'name':'Diego',
    'age': 20,
    'Country':'MX'
}

/* La forma convencional del manejo de objetos en JS era usando
la famosa nomenclatura del punto pero ECMAS lo cambió bastante veamos la forma tradicional
 */

 console.log(person.Country,person.name,person.age);
//Output: MX Diego 20


 //DESESTRUCTURADO EL OBJETO 
/*Estamos extrayendo los elementos de el obejto en este caso uno a uno evitado el uso de la famosa nomenclatura del punto
pero no es que debamos extraer todos podemos solo llamar algunos de los elementos*/
 let { name,  age , Country}= person;
 console.log(name,age, Country);
//Output : Diego 20 MX


//Operador de propagación

let team1= ['Diego','Jesus','Alexa'];
let team2=['Aldo','Jose','Montse'];

// Esto nos permite traer a los elementos de cada arreglo a este nuevo arreglo  
// Sintaxis ...Var
let work= ['David',...team1, ...team2];

console.log(work);


/*Seguramente ya habrás notado que estoy usando LET y que al principio use VAR 
esta es una nueva caracteristica de ECMAS6 hay bastantes diferentes entre eestas dos formas de delcarar variables
primero LET  solo se ve afectada por el scope de un codigo y var es de tipo global */



{
    var globalVAR = "Var global "
}

console.log(globalVAR);
//output : Var global 

{
    let globalLet= "Let global"
    console.log(globalLet);
    //output: "Let global"
}

//console.log(globalLet);
//ouput: undifined


let nombre= 'Diego'

let edad= 20;
//Convencional
obj= {
    nombre :nombre,
    edad: edad
}


//Ecmas6
obj2 = {
    nombre,
    edad
}


//promesas
const hellowPromise = () => {
    return new Promise((resolve ,reject)=> {

        if(true){
            resolve('yes');
        }else{
            reject('nope');
        }
    })
}


hellowPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error));



 class calculadora {
        constructor(){
            this.valueA =0;
            this.valueB = 0;
        }
        sumar(valueA,valueB){
            this.valueA=valueA
            this.valueB=valueB;
            return this.valueB+ this.valueA
        }
    }

    const calc =new calculadora();

    console.log(calc.sumar(3,3));


    //generadores

    function* helloWorld(){
        if(true){
            yield 'Hello, new Gen'
        }
        if(true){
            yield ' Opciones'
        }
    }

    const generador= helloWorld();


    console.log(generador.next().value)
    console.log(generador.next().value)
    console.log(generador.next().value)