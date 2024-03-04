import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './layout/nav';
import NavFooter from './layout/navFooter';
import Home from './Pages/Home';
import Sticker from './Pages/Sticker';
import Designe from './Pages/Designe';
import Login from './auth/Login';
import Registre from './auth/Registre';
import ProductFilter from './Pages/Filter/ProductFilter';
import StickersFilter from './Pages/Filter/StickersFilter';
import DesignFilter from './Pages/Filter/DesignFilter';
import Search from './Pages/Search';
import About from './Pages/about';
import Show from './Pages/Show';
import Dashboard from './Pages/Dashboard';
import Test from './component/test';
import ManageProduct from './admin/ManageProduct';
import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import Favorit from './Pages/Favorit';
import { useCookies } from 'react-cookie';
import { useUserContext } from './providers/UserProvider';
import Error from './Pages/Error';



function App() {
  const [cookies,setCookies,removeCookie]=useCookies(["auth_token"])
const  auth_token=cookies["auth_token"]
const {user}=useUserContext()
  return (
    <div className="App mb-0 " >
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stickers' element={<Sticker/>}/>
        <Route path='/design' element={<Designe/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/:id' element={<Login/>}/>
        <Route path='registre/' element={<Registre/>}/>

        {/* filter with price */}
        <Route path='/:min/:max' element={<ProductFilter/>}/>
        <Route path='/stickers/:min/:max' element={<StickersFilter/>}/>
        <Route path='/design/:min/:max' element={<DesignFilter />}/>
        {/* filter with price */}

        {/* searche route  */}
        <Route path='/search/:term' element={<Search/>}/>
        {/* searche route  */}

        {/* about route  */}
        <Route path='/about' element={<About/>}/>
        {/* about route  */}

        {/* show one product  */}
        <Route path='/show/:id' element={<Show/>}/>
        {/* show one product  */}

        {/* dashboard route  */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* dashboard route  */}

        {/* route fo test  */}
        <Route path='/test' element={<Test/>}/>
        {/* route fo test  */}

        {
          auth_token&&(
            user.role=="admin"&&(
              <>
        <Route path='/admin/products' element={<ManageProduct/>}/>
        <Route path='/admin/products/add' element={<AddProduct/>}/>
        <Route path='/admin/product/update/:id' element={<UpdateProduct/>}/>
              </>
            )
          )
        }


        {/* favorit route  */}
        <Route path='/favorit' element={<Favorit/>}/>
        {/* favorit route  */}

        {/* page not found route  */}
        <Route path='/*' element={<Error/>}/>
        {/* page not found route  */}
        </Routes>
        <NavFooter/>
      </BrowserRouter>   



    </div>
  );
}

export default App;
