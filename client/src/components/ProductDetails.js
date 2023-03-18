import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Details:</h1>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={e => deleteProduct(product._id)}>Delete</button>
        </div>
    )
}
export default ProductDetails;