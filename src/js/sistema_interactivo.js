/* 1- Estructura del proyecto (organizacion, recursos y carpetas) 
2- semantica (header, main, sections,article,div, footer) 
3- metaetiquetas 
4- documentacion (ni mucho ni poco comentarios + un readme adecuado) 
5- estilos css(responsive con adaptacion a celular, tablet y pc) 
6- implementacion de js 
7- despliegue en la nube */

// Inicialización del programa


// Le pedimos al usuario sus datos


const btnexecute = document.getElementById("btn-execute")
const result = document.getElementById("result")


// Inicio con las funciones para calcular la edad del usuario

btnexecute.addEventListener ('click', function () {
    event.preventDefault();
    const userName = document.getElementById("userName").value.trim()
    const userAge = document.getElementById("userAge").value.trim()
    try{

        if (!userName){

            throw new Error("Error, el contenido de nombre esta vacío")
        }else{
            console.log("El nombre tiene algo")
        }
        if (!userAge){

            throw new Error("Error, el contenido de la edad esta vacío")

        }



        if (userAge < 18) { // Si es menor de edad
            console.log(`Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
        }
    
        else if (userAge < 100) { // Si es mayor de edad
            console.log(`Hola ${userName}, eres mayor de edad. !Preparate para grandes oportunidades en el mundo de la programación!`)
        }
    
        else if (userAge >= 100) { // Si es mayor de 100 años
            console.error("Error: Por favor, ingresa tu verdadera edad.")
        }
    
        else { // si ingresa texto en la edad
            console.error("Error: Por favor, ingresa una edad válida en números.")
        }
    }
    catch (error){

        console.log(error);

    }
});