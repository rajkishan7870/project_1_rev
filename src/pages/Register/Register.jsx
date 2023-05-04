import React, { useState, useRef } from "react";
import Button from "../../components/Button/Button";
import { getUsers } from "../../utils/localstorage";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

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
       
      <div className={styles.parentCont}>
        <div className={styles.registerPage}>
          <div>
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <span>
              <label>Email : </label>
              <input ref={emailRef} type="email" placeholder="Enter Email" required />
            </span>

            <span>
              <label>Username : </label>
              <input ref={userNameRef} type="text" placeholder="username" required/>
            </span>
            <span>
              <label>First Name : </label>
              <input ref={firstNameRef} type="text" placeholder="First Name" required/>
            </span>

            <span>
              <label>Last Name : </label>
              <input ref={lastNameRef} type="text" placeholder="Last Name" required/>
            </span>
            <span>
              <label>Password : </label>
              <input ref={passwordRef} type="password" placeholder="password" required/>
            </span>
            {error && <p style={{ fontSize: '12px', color: 'red' }}>{error}</p>}
            <Button
              className={styles.signUpBtn}
              type="submit"
              data={"Sign Up"}
            />
          </form>

          <div className={styles.signIn}>
            <span >
              Already Registered ??{" "}
              <Button className={styles.signInBtn} onClick={handleLogin} data={"Login"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
