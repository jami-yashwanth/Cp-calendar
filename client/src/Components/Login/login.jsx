import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './login.css'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            email : email,
            password : password
        }
        const res = await axios.post("http://localhost:5000/login", data);
        console.log(res);
        if (res.data.status === "ok") {
          if (res.data.token) {
            localStorage.setItem("x-access-token", res.data.token);
            history.push("/home");
          }
        } else {
          alert(`${res.data.message}`);
        }
        setEmail('');
        setPassword("");
    }

  return (
    <>
      <h1 className="authTitle">Login page</h1>
      <div className="loginPage">
        <form className="login">
          <div className="authBox">
            Email :{" "}
            <input
              type="email"
              className="inputbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="authBox">
            Password :
            <input
              type="password"
              className="inputbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <button className="logbtn" onClick={handleSubmit}>Login</button>
          <div className="sign">
            <p>Did'nt have an account ?</p>
            <button className="signbtn" onClick={() => history.push('/register')}>Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
