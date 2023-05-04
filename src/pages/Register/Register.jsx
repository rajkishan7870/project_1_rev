import React, { useState } from "react";
import { getUsers } from "../../utils/localstorage";
import styles from "./Register.module.css";
import { useNavigate, Link } from "react-router-dom";
import { Button , TextField, Card, Alert } from "@mui/material";


export default function RegisterPage() {
  const [details, setDetails] = useState({
    email: "",
    username :"",
    name : "",
    phone : "",
    password: "",
  });
  const [error,setError] = useState("")

  const nav = useNavigate();

  

  function handleSubmit(event) {
    event.preventDefault();
    

    if(details.email===""){
      setError("Enter your email first")
      return;
    }
    else if(details.username===""){
      setError("Enter your username first")
      return;
    }
    else if(details.name===""){
      setError("Enter your name first")
      return;
    }
    else if(details.phone===""){
      setError("Enter your phone first")
      return;
    }
    else if(details.password===""){
      setError("Enter your password first")
      return;
    }
    
    var emailRegex =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if(!emailRegex.test(details.email)){

      setError('Invalid Email');
      return;
    }
    else if(emailRegex.test(details.email)){
      setError("")
    }

    var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    if(!usernameRegex.test(details.username)){
      setError('Invalid Username');
      return;
    }
    else if(usernameRegex.test(details.username)){
      setError("")
    }

    var passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

    if(!passwordRegex.test(details.password)){
      setError('Invalid password');
      return;
    }
    else if(passwordRegex.test(details.password)){
      setError("")
    }


    const users = getUsers();
  

    if(users.find((obj)=>obj?.email === details.email)){
      setError("This Email is Already Registered")
      return;
    }

    users.push(details);

    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
    nav("/login")
  }
  return (
    <div className={styles.parentDiv}>
      <div>
        <img src="GYM.jpg.jpg"/>
      </div>
          <Card className={styles.card}
          sx={{
            width : "30%",
            backgroundColor : "lightgray",
            margin : "10% 30%", 
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            alignContent : "center"
             }}>
          <div className={styles.register}>
            <h1>Register!!!</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField className={styles.text}
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            />
            <TextField className={styles.text}
            name="username"
            type="username"
            label="username"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            />
            <TextField className={styles.text}
            label="Name"
            name="name"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            />
            <TextField className={styles.text}
            label="Phone"
            name="phone"
            type="number"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            />
            <TextField className={styles.text}
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
            />

  
            {error && <Alert severity="error">{error}</Alert>}


            <Button className={styles.btn}
              variant="contained"
              type="submit"
            >Sign Up</Button>
          </form>

            <span className={styles.login} >
              Already Registered ??{" "}
              <Link className={styles.link} to={"/login"}>Sign In</Link>
            </span>
          </Card>
    </div>
  );
}
