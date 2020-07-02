import React from 'react';

export default class AboutCardPrimary extends React.Component {
    render() {
        return(
            <div className="aboutCard aboutCardPrimary" style={{ gridArea: "primary" }}>
                <a href="https://github.com/jerryrox">
                    <img src="https://avatars1.githubusercontent.com/u/33738976?s=460&u=c1c9fefd7960d79f4431a264f9cdcc5e6fbcced9&v=4" alt=""/>
                </a>
                <h3>Jerry Kim</h3>
                <p className="aboutCardContent">
                    I am a passionate software engineer who likes to develop new software while overcoming new challenges.
                </p>
            </div>
        );
    }
}
