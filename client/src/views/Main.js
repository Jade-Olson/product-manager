import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useState } from "react";

const Main = () => {
    const [products, setProducts] = useState([]);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id != id))
    }

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}></ProductForm>
            <hr></hr>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}></ProductList>
        </div>
    )
}

export default Main;