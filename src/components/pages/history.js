import React from 'react'



class History extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <h1>
                    My History
                    <br/>
                </h1>
                <p>
                ( click below for details )
                <br/>
                <br/>
                    <li id='list2'> 
                        <a  href="https://github.com/CompG33k" target="_blank">Work in GitHub</a>
                    </li>
                    <li id='list2'>
                        <a  href="https://www.linkedin.com/in/nick-velasco-b9ba5114/" target="_blank">LinkedIn profile</a>
                    </li>
                </p> 
            </div>
        );
    }
}
export default History