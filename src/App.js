import { Component } from "react";
import "./App.css"
// import Cart from "./Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };

  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.products,

        });
      })
  }


  render() {
    return (
      <> < div id="cart" > <button type="button">Cart</button></div>
        <div className="App">


          {
            this.state.items.map((item) => {
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
                    <button type="button" onClick={() => console.log(item)}>Add to cart</button>





                  </div>

                </div>

              )

            })

          }

        </div></>

    )
  }
}

export default App;
