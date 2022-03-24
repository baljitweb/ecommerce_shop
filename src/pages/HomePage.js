import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import firebaseDB from './../firebaseConfig';
import productList from '../productList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cartReducer);
  const [loading, setLoading] = useState(false);

  const addDataToFirebase = async () => {
    try {
      await addDoc(collection(firebaseDB, "users"), {
        name: 'test-user-3',
        age: '30'
      });
    } catch (e) {
      console.log(e);
    }
  }

  const getDataFromFirebase = async () => {
    // console.log('getDataFromFirebase()')
    setLoading(true)
    const productsList = [];
    try {
      const productsFromFirebase = await getDocs(collection(firebaseDB, "products"));
      // console.log(productsFromFirebase)
      productsFromFirebase.forEach(product => {
        // console.log(product.id)
        const productObj = {
          id: product.id,
          ...product.data()
        }
        productsList.push(productObj);
        setLoading(false)
      })
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
    setProduct(productsList);

  };

  const addProductListToFirebase = () => {
    productList.map(async (product) => {
      try {
        await addDoc(collection(firebaseDB, 'products'), product)
      } catch (e) {
        console.log('error in adding product: ', e);
      }
    })
  };

  const displayProductDetails = (product) => {
    console.log(product.target)
    navigate(`/productinfo/24bCTiw5veNgD0z9X1R5`);
  };

  const addToCart = (item) => {
    // console.log(item);
    dispatch({ type: 'addtocart', payload: item })
  };

  useEffect(() => {
    getDataFromFirebase()
    // console.log(products)
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <Layout loading={loading}>

      <div className='container'>
        <div className='row'>
          {products.map((product, idx) => {
            return <div className='col-md-4' key={idx}>
              <div className='m-2 p-1 product-box' title={product.title}>
                <div className='product-content'>
                  <p>{product.title}</p>
                  <img src={product.image} className="product-image" />
                </div>
                <div className='product-hover'>
                  <h2>{product.price}</h2>
                  <div className='d-flex'>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <button onClick={displayProductDetails} id={product.id}>VIEW</button>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage