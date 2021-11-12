import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// components
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { Content } from "./components/Content/Content";
import Catalog from "./components/Catalog/Catalog";
import { ItemPage } from "./components/ItemPage/ItemPage";
import { Footer } from "./components/Footer/Footer";



// styles
import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Hero />
            <Content />
          </Route>

          <Route exact path="/catalog">
            <Catalog />
          </Route>

          <Route exact path='/catalog/info/:id'>
            <ItemPage />
          </Route>

          <Route exact path="/cart">

          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
