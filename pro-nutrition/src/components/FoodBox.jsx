import React, { useState } from "react"


const FoodBox=(props)=>{
    let{data:{cal,id,img,name},index} = props
    // let{} = data
    console.log(props)

    const [input,setInput] = useState(0)
    const [quantity,setQuantity] = useState(0)

    const quantityHandler=()=>{
        setQuantity(input)
    }


    return(
            <div className="foodbox-main" >
                <div className="foodbox-main-left" >
                    <img src={img} alt="" />
                    <div className="foodbox-main-left-1" >
                        <h2>{name}</h2>
                        <h3>{cal}</h3>
                    </div>
                    <div className="foodbox-main-left-2" >
                        <input style={{height:"35px"}} type="number" min={0} value={input}  onChange={(e)=>{
                            setInput(e.target.value)
                        }} />
                        <button onClick={quantityHandler} >+</button>
                    </div>
                </div>
                <div className="foodbox-main-right" >
                    <h3>{name} X {quantity} = {cal*quantity}</h3>
                    <button onClick={()=>{
                        setQuantity(0)
                        setInput(0)
                    }} >Reset</button>
                </div>
            </div>
    )
}



export default FoodBox