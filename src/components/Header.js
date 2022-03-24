import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Header() {
  const { cartItems } = useSelector(state => state.cartReducer);
  // console.log(cartItems)

  const navigate = useNavigate();

  const signout = async () => {
    console.log('log out')
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/login');

    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Ecommerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><FaBars size={35} color='white' /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">user</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">orders</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/" role="button" aria-expanded="false" onClick={signout}>
                  logout
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/cart" role="button" aria-expanded="false">
                  <FaCartPlus /> {cartItems.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header