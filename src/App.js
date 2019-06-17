import React, {Component} from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homepage';
import './Assets/css/default.min.css';
import History from './components/pages/history';
import Sample from './components/sample';
import Resume from './components/pages/resume';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="App">

          <Header/>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/History' component={History}/>
                <Route exact path='/Resume' component={Resume}/>
          <Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
