import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { Header } from './components/Header/Header';
import styles from './App.scss';
function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
