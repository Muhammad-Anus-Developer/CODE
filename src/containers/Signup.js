import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  getDatabase,
  ref,
  set,
} from "../config/firebase";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>", user.uid);
        const db = getDatabase();
        set(ref(db, "users/" + user.uid), {
          username: name,
          email: email,
          password: password,
        });
        setName("");
        setEmail("");
        setPassword("");
        history.push("/signin");
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
      <h1>Signup</h1>
      <div>
        <label>
          Name
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </label>
        <br />
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
        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
