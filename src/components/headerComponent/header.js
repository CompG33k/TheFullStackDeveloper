import React from 'react';

import{
    Link
  }from 'react-router-dom';
  
//  const filePath ='./TheFullStackDeveloper/NickJVelascoResume.pdf';
class Header extends React.Component{
    render(){
        return(
            
            <header>
                <div className="logo">
                    <ul>Nick J. Velasco
                    {/*<li>The Full Stack Developer</li>*/}
                    <li>"Silverback"</li>
                </ul>
                </div>
                <nav>
                    <ul> 
                        <li className='first'>
                            <Link to="/Home">Home</Link>
                            {/*<a href="#">Home</a>*/}
                        </li>
                        <li>
                            <Link to="/History">History</Link>
                            {/*    <a href="#">Products</a> */}
                        </li>
                        <li className='last'>
                            <Link to="/Resume">Resume</Link>
                        </li>
                     {/*    <li>
                       <Link
                            to="route"
                            onClick={(event) => { event.preventDefault(); window.open(filePath); }}>
                            Click to download
                     </Link> 
                        </li> */}  
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
