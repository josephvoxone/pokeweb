import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Halaman
import PokeList from './pages/PokeList';
import Details from './pages/Details';
import MyList from './pages/MyList';
import React,{ Suspense } from 'react';

// Component
import Header from './components/Header';
import Footer from './components/Footer';
// import Loading from './components/Loading';

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/mylist">
              <MyList />
            </Route>
            <Route exact path="/details/:name">
              <Details />
            </Route>
            <Route exact path="/">
              <PokeList />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Suspense>

  );
}

export default App;
