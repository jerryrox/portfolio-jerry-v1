import React from 'react';
import * as img from "../../assets/img/home.jpg";

export default class Home extends React.Component {
    render() {

        const homeImg = {
            backgroundImage: `url(${img})`
        };

        return(
            <div className="home">
                <div style={homeImg} className="homeImg"></div>

                <div className="info">
                    <h1>Jerry Kim</h1>
                    <h3 className="brief">Game programmer, Web developer, Mobile developer</h3>
                    <h3 className="welcome">Welcome to my portfolio</h3>
                </div>
            </div>
        );
    }
}
