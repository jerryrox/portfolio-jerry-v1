import React from 'react';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p className="footerNote">
                    Jerry Kim &copy; {new Date().getFullYear()}.<br/>
                    Website developed using ReactJS.
                </p>
            </div>
        );
    }
}
