import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
    const [count, setCount] = useState("0")
    const cart = () => {
        setCount((c) => c + 1)
    }
    return (
        <>

            Count: {count}
            <button onClick={cart}>Cart</button>

        </>

    )
}


export default Cart;