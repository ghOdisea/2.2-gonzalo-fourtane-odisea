export default function throttle(funcion : Function, ms = 1000){ 
    return (args: any) => {

        let shouldWait = true
        if ( shouldWait ) return 
        
        //Llamo a la funcion
        funcion(args)
        shouldWait = true
        //Una vez que invoco la funcion se queda en true hasta que pase el tiempo.

        setTimeout(() => {
            shouldWait = false
        }, ms)
    }
}