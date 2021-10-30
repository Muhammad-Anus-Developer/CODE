import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDatabase, ref, onValue, signOut, auth } from "../config/firebase";
function Chat() {
  const params = useParams();
  const history = useHistory();
  console.log(params.id);
  const [user, setUser] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + params.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);
  return (
    <div>
      <h1>Chat</h1>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              history.push("/signin");
            })
            .catch((error) => {
              // An error happened.
            });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Chat;
