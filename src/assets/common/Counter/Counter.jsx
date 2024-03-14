import { useState, useEffect } from "react";
import "./Counter.css"

export const Counter = () => {

    //1 Hooks de estado
    const [count, setCount] = useState(0)
    //3funciones useEffect
    // useEffect(() => {
    //     //soy el use effect que se ejecuta cuando se monta el componente
    //     console.log("soy el componente counter y me acabo de montar")
    // }, [])

    // useEffect(() => {
    //     //soy el use effect que se ejecuta cuando se actualiza el componente
    //     console.log("soy el use effect que se ejecuta cuando se actualiza el componente")
    // })

    useEffect(() => {
        //Soy el use effect que se ejecutara siempre que cambie el count
        console.log("soy el use effect de count y count vale ......", count)      
    }, [count])


    // useEffect(() => {
    //     //soy el use effect que se ejecuta cuando se desmonta el componente
    //     return
    // })

    //2 Zona de renderizado
    return (    
        <div className= "counterDesign "onClick={() => setCount(count+1)}>        
            number: {count}        {  /* para llamar a la const entre bigotes */}
        </div>

    )
}