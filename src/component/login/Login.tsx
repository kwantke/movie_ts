import {useState} from "react";
import "../../css/styleLogin.css";

export default function Login() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log(id);
    console.log(password);
    //let id = document.getElementById('id') as HTMLInputElement;
    //let pw = document.getElementById('pw') as HTMLInputElement;

  }

  return (
      <section className="login-form">
        <h1>LOGO DESIGN</h1>

        <div className="int-area">
          <input type="text" name="id" id="id" autoComplete="off"
                 onChange={(e) => setId(e.target.value)} required/>
          <label htmlFor="id">USER NAME</label>
        </div>
        <div className="int-area">
          <input type="password" name="pw" id="pw" autoComplete="off"
                 onChange={(e) => setPassword(e.target.value)} required/>
          <label htmlFor="pw">PASSWORD</label>
        </div>
        <div className="btn-area">
          <button onClick={() => login()}>LOGIN</button>
        </div>

        <div className="caption">
          <a href="">Forgot Password?</a>
        </div>
      </section>
  )
}