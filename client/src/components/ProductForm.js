import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {products, setProducts} = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            </p>
            <input type="submit"></input>
        </form>
        </div>
    )
}

export default ProductForm;