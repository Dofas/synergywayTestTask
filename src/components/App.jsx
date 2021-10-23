import Header from "./Header/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Product/Product";
import Basket from "./Basket/Basket";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Route path="/" exact>
          <Product />
        </Route>
        <Route path="/basket" exact>
          <Basket />
        </Route>
      </div>
    </Router>
  );
}

export default App;
