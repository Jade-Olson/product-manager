import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.data.price)
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title,
            description,
            price
        })
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br />
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                </p>
                <p>
                    <label>Description: </label><br />
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="text" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}></input>
                </p>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Update;