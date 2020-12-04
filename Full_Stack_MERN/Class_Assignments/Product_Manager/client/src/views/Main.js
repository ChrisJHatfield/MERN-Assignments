import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios';
import ProductList from '../components/ProductList';

const Main = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            setProducts(res.data)
            setLoaded(true);
        });
    }, [])

    const removeFromDom = (productId) => {
        console.log("removing from the Dom")
        setProducts(products.filter(products => products._id !== productId))
    }

    const createProduct = person => {
        axios.post('http://localhost:8000/api/product', person)
            .then(res => {
                console.log("Response: ", res)
                setProducts([...products, res.data]);
            })
            .catch(err => console.log("Error: ", err))
    };

    return(
        <div className="main">
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>

    )
}

export default Main;