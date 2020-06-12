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


