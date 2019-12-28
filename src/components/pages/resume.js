import React, {Component} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
class Resume extends Component {
 
    render() {
        return (
            
            <div className={'resume-container'}>
                <object width="100%" height="800px"
                data="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf" type="application/pdf">   </object>
            </div>
        );
    }
}

export default Resume;