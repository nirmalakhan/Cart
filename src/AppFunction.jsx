import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import "./App.css"
import Show from "./Show";


function AppFunction() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => {
                setItems(json.products)
            })
    })



    return (
        <>
            < div id="cart"><button onClick={() => console.log(cart)}>cart</button></div>
            <div className="App">
                {
                    items.map((item) => {
                        return (
                            <div key={item.id} id="parent">
                                <div><img src={item.thumbnail} id="image" /></div>
                                <div id="data">

                                    <ul>

                                        <li>
                                            Id={item.id},
                                        </li>
                                        <li>
                                            Title={item.title},
                                        </li>
                                        <li>

                                            Price={item.price},
                                        </li>
                                        <li>
                                            Rating={item.rating}
                                        </li>

                                    </ul>
                                    <button type="button" onClick={() => setCart((previousState) => [...previousState, item.title])}>Add to cart</button>





                                </div>

                            </div>

                        )
                    })
                }</div>
        </>

    )


}


export default AppFunction;