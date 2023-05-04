import React, {useState, useEffect} from 'react'
import { Card, TextField, Button} from '@mui/material'
import { Link, useNavigate} from 'react-router-dom';
import styles from './Login.module.css'
import {getUsers} from '../../utils/localstorage'

export default function Login() {
  const [details, setDetails] = useState({
    username :"",
    password: "",
  });
  const[userList, setUserList] = useState("");

  const nav = useNavigate();

  useEffect(()=>{
    const data=getUsers();
    setUserList(data);
  },[])
  

  function handleSubmit(event){
      event.preventDefault();


      if(details.username === "" || details.password === ""){
        alert("FIll the form first")
      }

      if(JSON.parse(localStorage.getItem("perchased"))===true){
        alert(`${details?.username} you are succ login`)
        nav("/")
        return;
      }
  
  
      const userObj = userList.find((obj)=> obj?.username === details.username && obj?.password === details.password)
        
      if(userObj !== undefined){
        alert(`${userObj?.username} you are succ login`);
        if(userList.find((obj)=> obj?.purchased===true && obj?.username === details.username)){
            nav("/")
        }
        else{
          nav("/pricing")
        
        }
      }else{
        alert("please register first")
      }
    


  }
  return (
    <div>
      <div>
        <img src='./GYM.jpg.jpg'/>
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

            }}
            >
            <div className={styles.register}>
              <h1>Login!!!</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <TextField className={styles.input}
              name="username"
              type="username"
              label="username"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              />
              <TextField className={styles.input}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              />
              <Button className={styles.btn}
              variant="contained"
              type="submit"
              >
              Sign In</Button>

              <span className={styles.register} >
              Don't have an account ??{" "}
              <Link className={styles.link} to={"/register"}>Sign Up</Link>
            </span>
            </form>
            </Card>
        
    </div>
  )
}
