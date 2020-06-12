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


