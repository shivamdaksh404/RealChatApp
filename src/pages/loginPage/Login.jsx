import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isUserLoggedIn, registeredUser } from "../../atoms/Atom";
import style from './Login.module.css'
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CurrencyBitcoin } from "@mui/icons-material";

export default function Login() {
  const [userData, setUserData] = useRecoilState(registeredUser);
  const [loggedIn,setLoggedIn]  = useRecoilState(isUserLoggedIn)
  const [userList,setUserList] = useState([])
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userData"));
      setUserList(localData);
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if(loggedInUser){

    }
  }, []);

  const handelInputPassword = (event) => {
    const data = { ...input };
    data.password = event.target.value;
    setInput(data);
  };
/*
let index = userData.findIndex((data)=>  data.username === input.username );
currentUser ={ ...userData[index]}

userData[index].isLoggedIn = true;

if(userData[index].username = 
*/
  const handelInputUserName = (event) => {
    const data = { ...input };
    data.username = event.target.value;
    setInput(data);
  };
  const handleLoggedIn = (event) => {
      event.preventDefault();
      let currentUser = userData.find((data)=>  data.username === input.username );
      // let index = userData.findIndex((data) => data.username === input.username );
      // const currentUser= userData[index];
      // console.log("index: =",index);
    if (!currentUser) {
      // alert("user does not exist");
      toast.error("user does not exist", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (currentUser.password !== input.password) {
      toast.error("Incorrect Password", {
        position: toast.POSITION.TOP_CENTER
      });
      // alert("incorrect password");
    } else {
        swal("Login Success", "success");
        navigate('/')
        localStorage.setItem("currentUser", JSON.stringify(currentUser));        
        let test = {...currentUser}
        test.isLoggedIn = true
        currentUser = test;
        
        localStorage.setItem("userData", JSON.stringify([currentUser,userData]));
      }
      
      console.log(currentUser, userData);
  };

  return (
    <div className={style.mainContainer}>
     <h1>Login</h1>
      <form action="" onSubmit={handleLoggedIn} className={style.formBox}>
        <TextField fullWidth
          onChange={handelInputUserName}
          type="text"
          name="username"
          label="Username"
          required
        />
        <TextField fullWidth
          onChange={handelInputPassword}
          type="password"
          name="password"
          label="Password"
          required
        />
        <button type="submit" className={style.submitButton}>Login</button>
      </form>
    
      <span>
        Don't have an account? <Link to={"/register"}>Create Account</Link>
      </span>
    </div>
  );
}
