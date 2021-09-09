import './App.css';
import HomePage from './pages/homepage/homepage.component';

// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

// const ShopPage = () => {
//   let { slug } = useParams();
//   return <div>Shop Page {slug}</div>;
// };

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
