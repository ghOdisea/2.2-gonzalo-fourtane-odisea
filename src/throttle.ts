export default function throttle(cb : Function, ms = 1000){
    let shouldWait: boolean
    let waitingArgs: any

    const timeoutFunction = () => {
        if(waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunction, ms)
        }
    }
    
    return (...args: any) => {
        if(shouldWait) {
            waitingArgs = args
            return
        }
        cb(...args)
        shouldWait = true
        
        setTimeout(timeoutFunction, ms);
    }
}