export default function throttle(funcion : Function, ms = 1000){ 
    // Devuelve una funcion con los argumentos a recibir, 
    return (args: any) => {
    //Creo una variable que no puede entrar en el if, asique pasa a llamar a la funcion.
        let shouldWait = false
        if ( shouldWait ) return 
        //Llamo a la funcion
        funcion(args)
        shouldWait = true
        //Una vez que invoco la funcion se queda en true hasta que pase el tiempo.
        setTimeout(() => {
            shouldWait = false
        }, ms)
        //Esto ejecuta la funcion una vez, y hasta que no pase el tiempo, no puede volver a ejecutarse.
    }
}