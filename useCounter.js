import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter( counter + value )
    }

    const decrement = (value = 1) => {
        if(counter <= 0) return; //si llega a 0 el contador termina la funcion, ideal para los carritos de compra
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}