import React, {Component} from 'react';

class Resume extends Component {
 
    render() {
        return (
            
            <div className={'resume-container'}>
                <object width="100%" height="800px"
                data='https://compg33k.github.io/TheFullStackDeveloper/NickJVelascoResume.pdf' type="application/pdf">   </object>
                
{/*                <div id={'resume-pdf'}>You can view, download 
                <a href={'./NickJVelascoResume.pdf'}>Nick J Velasco Resume</a>
                 </div>
        */}
            </div>
        );
    }
}

export default Resume;