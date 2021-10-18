import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// components
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { Content } from "./components/Content/Content";

// styles
import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Hero />
        <Content />
      </Router>
    </div>
  );
}

export default App;
