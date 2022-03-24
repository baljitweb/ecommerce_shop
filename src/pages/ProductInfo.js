import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import { getDoc, doc } from "firebase/firestore";
import firebaseDB from './../firebaseConfig';
import { useParams } from 'react-router';

function ProductInfo() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    getDataFromFirebase()
  }, []);

  const getDataFromFirebase = async () => {
    console.log(params.id);
    try {
      setLoading(true)
      const productsFromFirebase = await getDoc(doc(firebaseDB, 'products', params.id));
      setProduct(productsFromFirebase.data());
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }

  };

  return (
    <Layout loading={loading}>
      <div className='bread-crumb'><a href='/'>Home</a> | <span>Product Details</span>
      <hr/></div>
      <h1>Product Details</h1>
      <hr />
      {product && (
        <div className='product-detail-container container'>
          <div className='row justify-center'>
            <div className='col-md-9'>
              <p><strong>{product.title}</strong></p>
              <img src={product.image} alt={product.title} className="product-img" />
              <hr />
              <div>{product.description}</div>
              <div className='d-flex justify-content-end mtt-3'><button className='btn btn-primary'>ADD TO CART</button></div>
            </div>
          </div>

        </div>
      )}

    </Layout>
  )
}

export default ProductInfo