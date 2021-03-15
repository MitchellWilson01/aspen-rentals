import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Equipment from './components/pages/Equipment/Equipment';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/equipment" exact component={Equipment} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
