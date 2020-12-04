import React, { useState } from 'react';

const ProductForm = (props) => {

    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }
        

    return (
        <div className="product-form">
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} name="title"/>
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" onChange={ e => setPrice(e.target.value)} value={price} name="price"/>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" onChange={ e => setDescription(e.target.value)} value={description} name="description"/>
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProductForm;