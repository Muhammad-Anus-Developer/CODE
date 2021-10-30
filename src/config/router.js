import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from "../containers/Signup";
import Signin from "../containers/Signin";
import Chat from "../containers/Chat";
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect, useState } from "react";
function NotFound() {
  return (
    <div>
      <h1>Page nahi mil raha</h1>
    </div>
  );
}

function AppRouter() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route
          exact
          path="/chat/:id"
          component={isUser ? Chat : () => <Redirect to="/signin" />}
        />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
