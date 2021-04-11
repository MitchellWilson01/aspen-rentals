import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Equipment from './components/pages/Equipment/Equipment';
import FAQ from './components/pages/FAQ/FAQ';
import About from './components/pages/About/About';
import Conditioning from './components/pages/Conditioning/Conditioning';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/equipment" exact component={Equipment} />
        <Route path="/FAQ" exact component={FAQ} />
        <Route path="/about" exact component={About} />
        <Route path="/conditioning" exact component={Conditioning} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
