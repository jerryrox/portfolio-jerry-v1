import React from 'react';
import Footer from "../Footer";
import PageHeading from "../Fragments/PageHeading";

export default class Contact extends React.Component {

    render() {
        return(
            <div className="contact">
                <PageHeading title="Contact Me"/>

                <div className="contactContainer">
                    <h3 className="contactItem contactTitle">You can reach me at ...</h3>
                    <div className="contactThickLine"></div>
                    <h3 className="contactItem contactSubtitle"><i className="fa fa-github"></i> - Github</h3>
                    <p className="contactItem"><a href="https://github.com/jerryrox" target="_blank" rel="noopener noreferrer">
                        https://github.com/jerryrox
                    </a></p>
                    <div className="contactThinLine"></div>
                    <h3 className="contactItem contactSubtitle"><i className="fa fa-envelope"></i> - Email</h3>
                    <p className="contactItem"><a href="mailto://jerryrox@live.co.kr" target="_blank" rel="noopener noreferrer">
                        jerryrox@live.co.kr
                    </a></p>
                    <div className="contactThinLine"></div>
                    <h3 className="contactItem contactSubtitle"><i className="fa fa-book"></i> - Blog</h3>
                    <p className="contactItem"><a href="https://jerryroxdev.blogspot.com" target="_blank" rel="noopener noreferrer">
                        https://jerryroxdev.blogspot.com
                    </a></p>
                    <div className="contactThinLine"></div>
                    <h3 className="contactItem contactSubtitle"><i className="fa fa-linkedin"></i> - LinkedIn</h3>
                    <p className="contactItem"><a href="https://www.linkedin.com/in/jerryrox/" target="_blank" rel="noopener noreferrer">
                        https://www.linkedin.com/in/jerryrox/
                    </a></p>
                </div>

                <Footer/>
            </div>
        );
    }
}
