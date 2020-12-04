import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList = ({products, removeFromDom}) => {

    return(
        <div className="all-products">
            <h1>All Products:</h1>
            {
                products.map((product, idx) => {
                    return <p key={idx}>
                        <Link to={"/" + product._id}>
                            {product.title}
                        </Link>
                        |
                        <Link to={"/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        <DeleteButton productId={product._id} successCallback={removeFromDom} />
                    </p>
                })
            }
        </div>
    )
}

export default ProductList;