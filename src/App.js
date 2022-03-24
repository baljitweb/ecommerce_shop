
import './App.css';
import './styles/layout.css'
import './styles/products.css'
import 'react-toastify/dist/ReactToastify.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductInfo from './pages/ProductInfo';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import { getAuth } from "firebase/auth";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/register' exact element={<RegisterPage />} />
          <Route path='/productinfo/:id' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const checkUserState = async () => {
  try {
    const auth = await getAuth();
    console.log(auth);
    return auth.currentUser;
  } catch (e) { }
};

export const ProtectedRoutes = ({ children }) => {
  const state = checkUserState(children);
  console.log(state);
  
  try {
    const auth = getAuth();
    console.log(auth);
    if (auth.currentUser) {
      return children;
    } else {
      return <Navigate to='/login' />
    }

  } catch (e) {
    console.log(e);
  }


};