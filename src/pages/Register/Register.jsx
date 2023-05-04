import React, { useState, useRef } from "react";
import { getUsers } from "../../utils/localstorage";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { Button , TextField, Card } from "@mui/material";


export default function RegisterPage() {
  const emailRef = useRef();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const [error,setError] = useState("")

  const nav = useNavigate();

  function handleLogin() {
    nav("/login");
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    var emailRegex =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(!emailRegex.test(emailRef.current.value)){

      setError('Please enter correct Email');
      return;
    }
    else if(emailRegex.test(emailRef.current.value)){
      setError("")
    }

    var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(userNameRef.current.value)){
      setError('Please enter correct username');
      return;
    }
    else if(usernameRegex.test(userNameRef.current.value)){
      setError("")
    }

    var passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if(!passwordRegex.test(passwordRef.current.value)){
      setError('Please Enter valid password');
      return;
    }
    else if(passwordRegex.test(passwordRef.current.value)){
      setError("")
    }


    const users = getUsers();
  

    if(users.find((obj)=>obj?.email === emailRef.current.value)){
      setError("this Email is Already Registered")
      return;
    }

    users.push({
      email: emailRef.current.value,
      username: userNameRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      password: passwordRef.current.value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
    nav("/login")
  }
  return (
    <div>
          <Card sx={{
            width : "50%",
            backgroundColor : "lightgray",
            margin : "10% 30%", 
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            alignContent : "center"
             }}>
          <div>
            <h1>Register!!!</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField className={styles.text}
            placeholder="Email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            />
            <TextField className={styles.text}
            placeholder="Username"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            />
            <TextField className={styles.text}
            placeholder="Name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            />
            <TextField className={styles.text}
            placeholder="phone"
            id="outlined-basic"
            label="phone"
            variant="outlined"
            />
            <TextField className={styles.text}
            placeholder="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
            />

  
            {error && <p style={{ fontSize: '12px', color: 'red' }}>{error}</p>}
            <Button className={styles.btn}
              variant="contained"
              type="submit"
            >Sign Up</Button>
          </form>

            <span >
              Already Registered ??{" "}
              <Button variant="contained" onClick={handleLogin} >Login</Button>
            </span>
          </Card>
    </div>
  );
}
