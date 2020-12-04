import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const ProductEdit = (props) => {

    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState();

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/' + id )
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id])

    const editProduct = product => {
        axios.put('http://localhost:8000/api/product/'+ id, product)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="edit">
            <h1>Edit a Product</h1>
            {loaded && (
                <ProductForm onSubmitProp={editProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
            )}
        </div>
    )
}

export default ProductEdit;