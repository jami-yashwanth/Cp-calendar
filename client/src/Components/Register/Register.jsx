import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: name,
      email: email,
      password: password,
    };
    const res = await axios.post("http://localhost:5000/register", data);
    console.log(res);
    if (res.data.status === "ok") {
      history.push("/login");
    } else {
      alert("Email already exists");
    }
  }

  return (
    <div>
      <h1 className="authTitle">Register page</h1>
      <div className="loginPage">
        <form className="login" onSubmit={handleSubmit}>
          <div className="authBox">
            Username :
            <input
              type="text"
              className="inputbox"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="authbox">
            Email :
            <input
              type="email"
              className="inputbox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="authbox">
            Password :
            <input
              type="password"
              className="inputbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="logbtn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
