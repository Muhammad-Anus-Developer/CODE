import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config/firebase";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>", user);
        history.push(`/chat/${user.uid}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error==>", errorMessage);
        // ..
      });
  };
  return (
    <div>
      <h1>Signin</h1>
      <div>
        <label>
          Email
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </label>
        <br />
        <label>
          Password
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
          />
        </label>
        <br />
        <br />
        <button onClick={signin}>Signin</button>
      </div>
    </div>
  );
}

export default Signin;
