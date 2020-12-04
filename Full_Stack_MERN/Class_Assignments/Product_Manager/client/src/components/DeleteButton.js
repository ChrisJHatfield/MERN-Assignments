import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {
    
    const {productId, successCallback} = props;

    const deleteProduct = e => {
        axios.delete("http://localhost:8000/api/product/"+ productId)
            .then(res => {
                successCallback(productId);
            })
            .catch(err => console.log(err));
    }

    return(
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton;