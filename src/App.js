import React, {Component} from 'react';
import Header from './components/headerComponent/header';
import HeaderMobile from './components/headerComponent/headerMobile';
import HomePage from './components/pages/homepage';
import HomeMobile from './components/pages/homeMobile';
import './Assets/css/default.min.css';
import History from './components/pages/history';
import Resume from './components/pages/resume';
import ResumeMobile from './components/pages/resumeMobile';

import { Redirect } from 'react-router';
import{
  BrowserRouter as Router,
  Route,
  HashRouter,
  Link
}from 'react-router-dom';

import image from './Content/GorillaSuit.PNG';
import imageMobile from './Content/matrix_silverback.png';
var styles = {
  color:'gray',
  fontSize:'18px',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover' ,
  top: '0',
  width: '100%',
  minHeight:'100%',
  position: 'absolute'
  };

   var mobilestyles = {
     color:'gray',
     fontSize:'12px',
     backgroundImage: 'url('+image+') ',
     backgroundSize: 'cover' ,
     top: '0',
     width: '100%',
     minHeight:'100%',
     position: 'absolute'
     };
  
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        heightSet: 0,
        width: window.innerWidth,
        height:window.innerHeight
    };
    this.updateDimensions = this.updateDimensions.bind(this);
}

componentDidMount() {
  this.updateDimensions();
  window.addEventListener('scroll', this.updateDimensions);
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentWillUnmount() {
  window.removeEventListener('scroll', this.updateDimensions);
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

updateDimensions = () => {
  this.setState({heightSet: document.body.scrollHeight});
  console.log(document.body.scrollHeight);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth,height:window.innerHeight });
};

resize = () => this.forceUpdate();

render(){
    
    const { width } = this.state;
    const isMobile = width < 750;
  
    // the rest is the same...
    console.log("isMobile: "+ isMobile);
    console.log("width: "+ {width});
    
     if (isMobile) {
     
       return(
       <HashRouter>
       <div className="App" style={mobilestyles}>           
           <HeaderMobile/>
                 <Route exact path='/' component={() =><Redirect to='/HomeMobile' component={HomeMobile}/>} />
                 <Route exact path='/Home' component={() =><Redirect to='/HomeMobile' component={HomeMobile}/>} />
                 <Route exact path="/HomeMobile" component={HomeMobile} />
                 <Route exact path='/History' component={History}/>
                 <Route exact path='/Resume' component={ResumeMobile}/>
       </div>
       </HashRouter> 
         );
     }else{
    return(
      <HashRouter>
      <div className="App" style={styles}>
          <Header/>
              <Route exact path='/'component={() =><Redirect to='/Home' component={HomePage}/>}/> 
              <Route exact path='/HomeMobile'component={() =><Redirect to='/Home' component={HomePage}/>}/> 
              <Route exact path="/Home" component={HomePage} />
              <Route exact path='/History' component={History}/>
              <Route exact path='/Resume' component={Resume}/>
      </div>
      </HashRouter>
    );
     }
  }
}

export default App;
