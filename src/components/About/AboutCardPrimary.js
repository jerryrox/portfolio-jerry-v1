import React from 'react';

import * as profile from "../../assets/img/portrait.png";

export default class AboutCardPrimary extends React.Component {
    render() {
        return(
            <div className="aboutCard aboutCardPrimary" style={{gridArea: "primary"}}>
                <img src={profile} alt=""/>
                <h3>Jerry Kim</h3>
                <p className="aboutCardContent">
                    I am a passionate programmer who likes to develop new games and tools while overcoming new challenges.
                </p>
            </div>
        );
    }
}
