import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import styles from './App.scss';
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
