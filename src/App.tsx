import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { useEffect, useState } from "react";


// components
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { Content } from "./components/Content/Content";
import Catalog from "./components/Catalog/Catalog";
import { Cart } from "./components/Cart/Cart";
import { Profile } from "./components/Profile/Profile";
import { ItemPage } from "./components/ItemPage/ItemPage";
import { Footer } from "./components/Footer/Footer";
import { Loader } from "./components/Catalog/Loader";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

// firebase
import { auth } from "./firebase/firebase";
import { Register } from "./components/Profile/Register";
import { Login } from "./components/Profile/Login";
import { AuthRoute } from "./firebase/Auth/AuthRoute";
import { ChangePassword } from "./components/Profile/ChangePassword";
import { Logout } from "./components/Profile/Logout";

// styles
import styles from './App.scss';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLog, setIsLog] = useState<boolean>(false)
  console.log('current url path: ', window.location.href);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        console.log('user detected');
        setIsLog(true);
      } else {
        console.log('no user detected');
        setIsLog(false);
      }
      setLoading(false);
    })
  }, [auth])

  if(loading) {
    return <Loader />
  }

  return (
    <Provider store={store}>
      <div className={styles.app}>

          <Router>
              {isLog && <Header />}
            
            <Switch>
              <Route exact path="/register">
                <Register name="register"/>
              </Route>

              <Route exact path="/login">
                <Login name="login" />
              </Route>

              <Route exact path="/changepass">
                <AuthRoute>
                  <ChangePassword name="changepassword"/>
                </AuthRoute>
              </Route>

              <Route exact path="/logout">
                <AuthRoute>
                  <Logout name="logout"/>
                </AuthRoute>
              </Route>

              <Route exact path="/">
                <AuthRoute>
                  <Hero />
                  <Content />
                </AuthRoute>
              </Route>

              <Route exact path="/catalog">
                <AuthRoute>
                  <Catalog />
                </AuthRoute>
              </Route>

              <Route exact path='/catalog/info/:id'>
                <AuthRoute>
                  <ItemPage />
                </AuthRoute>
              </Route>

              <Route exact path="/cart">
                <AuthRoute>
                  <Cart />
                </AuthRoute>
              </Route>

              <Route exact path="/profile">
                <AuthRoute>
                  <Profile />
                </AuthRoute>
              </Route>

            </Switch> 

            {isLog && <Footer />}

          </Router>
          
      </div>
    </Provider>
  );
}

export default App;
