import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const ProductDetails = (props) => {

    const [product, setProduct] = useState({});

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/'+ props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [props.id])

    return(
        <div className="details">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <DeleteButton productId={props.id} successCallback={ () => navigate("/")} />
        </div>
    )
}

export default ProductDetails;