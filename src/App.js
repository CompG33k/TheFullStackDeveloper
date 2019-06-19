import React, {Component} from 'react';
import Header from './components/headerComponent/header';
import HeaderMobile from './components/headerComponent/headerMobile';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homepage';
import HomeMobile from './components/pages/homeMobile';
import './Assets/css/default.min.css';
import History from './components/pages/history';
import Sample from './components/sample';
import Resume from './components/pages/resume';
import{
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

import image from './Content/GorillaSuit.PNG';
var styles = {
  //color:'gray',
  fontSize:'18px',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover' ,
  top: '0',
  width: '100%',
  minHeight:'800px',
  position: 'absolute'
  };



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height:window.innerHeight
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth,height:window.innerHeight });
  };

  render(){
    const { width } = this.state;
    const isMobile = width <= 500;
    // the rest is the same...
    if (isMobile) {
      return(
        <Router>
          <div className="App" style={styles}>
           
          <HeaderMobile/>
                <Route exact path='/HomeMobile' component={HomeMobile}/>
                <Route exact path='/History' component={History}/>
                <Route exact path='/Resume' component={Resume}/>
          {/*<Footer/> */}
          <div/>
      </div>
      </Router>
        );
    }else{
    return(
      <Router >
      <div className="App" style={styles}>
          <Header/>
                <Route exact path='/Home' component={HomePage} />
                <Route exact path='/History' component={History}/>
                <Route exact path='/Resume' component={Resume}/>
          {/*<Footer/> */}

      </div>
      </Router>
    );
    }
  }
}

export default App;
