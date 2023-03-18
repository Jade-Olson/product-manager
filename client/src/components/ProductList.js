import React, { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => removeFromDom(id))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {products.length >0 && products.map((product, index) => {
                return (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <Link to={`/edit/${product._id}`}> | Edit | </Link>
                        <button onClick={e => deleteProduct(product._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;