import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/loginPage/Login";
import Home from "./pages/homePage/Home";
import Register from "./pages/registerPage/Register";


function App() {
  return (
    <div>

  {/* <h1>Home Page</h1> */}
  <Routes>
<Route path='/' element={<Home/>}  />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
<Route path='/*' element={<h1>404 Error. Page not Found</h1>} />
  </Routes>
    </div>
  )
}

export default App;
