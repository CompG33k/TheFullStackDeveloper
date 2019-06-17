import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={'resume-container'}>
                <div id={'resume-pdf'}>You can view, download <a
                    href={'./NickJVelascoResume.pdf'}>Nick J Velasco Resume</a>
                    {/* and <a href={'#'}>Spanish</a>  */}</div>
            </div>
        );
    }
}

export default Resume;