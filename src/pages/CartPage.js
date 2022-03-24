import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { FaTrash } from 'react-icons/fa';

function CartPage() {
  const { cartItems } = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const [totalCartAmout, setTotalCartAmout] = useState(0);

  const deleteItemFromCart = (item) => {
    // console.log(item)
    dispatch({ type: 'removefromcart', payload: item })
  };

  useEffect(() => {
    // localStorage.setItem('cartItems', JSON.stringify(cartItems))
    let totalAmount = 0;
    cartItems.forEach((item) => {
      return totalAmount += item.price
    })
    setTotalCartAmout(totalAmount)
  }, [cartItems])

  return (
    <Layout>
      <table border="1" className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? cartItems.map((item, idx) => {
            return <tr key={idx}>
              <td><img src={item.image} alt="" height="50" width="50" /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><FaTrash onClick={() => deleteItemFromCart(item)} /></td>
            </tr>
          })
            : (<div>Please add item(s) in cart</div>)
          }
        </tbody>
      </table>
      <div className='d-flex justify-content-end ' style={{ marginRight: 30 + 'px' }}>
        <h1>Total Amount = {totalCartAmout}</h1>
      </div>
      <div className='d-flex justify-content-end ' style={{ marginRight: 30 + 'px' }}><button className='btn btn-primary'>Place Order</button></div>
    </Layout>
  )
}

export default CartPage