import React from 'react';
import { MobilePDFReader } from 'react-read-pdf';
class ResumeMobile extends React.Component {
     render() {
        return (
            <div style={{top:'50',overflow:'scroll',height:600}}>
              
                  
                  <MobilePDFReader auto='scale' url={process.env.PUBLIC_URL + '/NickJVelascoResume.pdf'}/>
                  
        
             </div>
        );
    }
}

export default ResumeMobile;