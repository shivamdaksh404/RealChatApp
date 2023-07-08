import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registeredUser } from "../../atoms/Atom";
import { useRecoilState } from "recoil";
import style from './Register.module.css'
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    isLoggedIn: false,
  });
  const [userData, setUserData] = useRecoilState(registeredUser);
  const navigate = useNavigate()

  const handleName = (event) => {
    const data = { ...input };
    data.name = event.target.value;
    setInput(data);
  };

  const handleEmail = (event) => {
    const data = { ...input };
    data.email = event.target.value;
    setInput(data);
  };

  const handleUserName = (event) => {
    const data = { ...input };
    data.username = event.target.value;
    setInput(data);
  };

  const handlePassword = (event) => {
    const data = { ...input };
    data.password = event.target.value;
    setInput(data);
  };

  const handleConfirmPassword = (event) => {
    const data = { ...input };
    data.confirmPassword = event.target.value;
    setInput(data);
  };

  const handleIsLoggedIn = (event) => {
    event.preventDefault();
    let Name = input.name;
    Name.trim();
    let UserName = input.username;
    UserName.trim();
    const valid = /([a-zA-Z])\w+/g;
    if (!Name.match(valid)) {
      // alert("enter valid name");
      toast.error("Enter valid name", {
        position: toast.POSITION.TOP_CENTER
      })
    } else if (Name.length < 4) {
      // alert("name length is too short");
      toast.error("Name length is too short", {
        position: toast.POSITION.TOP_CENTER
      })
    } else if (!UserName.match(valid)) {
      // alert("enter Valid Username");
       toast.error("Enter Valid Username", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (UserName.length < 4) {
      // alert("Username length is too short");
      toast.error("Username length is too short", {
        position: toast.POSITION.TOP_CENTER
      })
    } else if (input.password.length < 8) {
      // alert("password is too short minimum length is 8 characters");
      toast.error("Password is too short minimum length is 8 characters", {
        position: toast.POSITION.TOP_CENTER
      });
    } else if (input.confirmPassword !== input.password) {
      // alert("Confirm password is not same. please fill correct password");
      toast.error("Confirm password is not same. please fill correct password", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      swal("Successful", "Registration Completed", "success");
      let data = [...userData, input]
      setUserData(data)

      localStorage.setItem("userData", JSON.stringify(data))

      
     
      navigate("/login")
  
    }
  };



  console.log(userData);
  return (
    <div className={style.mainContainer}>
      <h1>Register yourself</h1>
      <form action="" onSubmit={handleIsLoggedIn} className={style.formBox}>
        <TextField fullWidth
          onChange={handleName}
          type="text"
          name="name"
          label="Name"
          required
        />
        <TextField fullWidth
          onChange={handleEmail}
          type="email"
          name="email"
          label="Email"
          required
        />
        <TextField fullWidth
          onChange={handleUserName}
          type="text"
          name="username"
          label="Username"
          required
        />
        <TextField fullWidth
          onChange={handlePassword}
          type="password"
          name="password"
          label="Password"
          required
        />
        <TextField fullWidth
          onChange={handleConfirmPassword}
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
        />
        
        <button className={style.submitButton} type="submit">Register</button>
      </form>

      <span>Yout do have an account?<Link to={'/login'}>Login</Link></span>
    </div>
  );
}
