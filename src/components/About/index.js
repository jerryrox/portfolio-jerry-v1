import React from 'react';
import Footer from "../Footer";
import PageHeading from "../Fragments/PageHeading";
import AboutCard from "./AboutCard";
import AboutCardPrimary from "./AboutCardPrimary";

export default class About extends React.Component {
    render() {
        return(
            <div className="about">
                <PageHeading title="About Me"/>

                <div className="aboutCardContainer">
                    <AboutCardPrimary/>
                    <AboutCard index={0} icon="fa fa-code" title="Languages">
                        C# / Java / Objective-C / Javascript / C / C++ / Solidity<br/>
                    </AboutCard>
                    <AboutCard index={1} icon="fa fa-code" title="Libraries & Frameworks">
                        React / React Native (Expo) / Ethereum (web3) / TRON / Bitcoin core / Omnicore / SDL2 / FMOD / and many more...<br/>
                    </AboutCard>
                    <AboutCard index={2} icon="fa fa-code" title="Tools">
                        Unity / Visual Studio / XCode / Adobe Animate / Netbeans / Eclipse / VS Code
                    </AboutCard>
                    <AboutCard index={3} icon="fa fa-music" title="Hobbies">
                        Listening to music<br/>
                        Playing rhythm games (osu!)<br/>
                        Playing MOBA games (League of Legends)<br/>
                        Playing collection games (Girls' Frontline)<br/>
                        Developing my own games<br/>
                        Reading comics & light novels<br/>
                        Meeting up with friends
                    </AboutCard>
                </div>

                <Footer/>
            </div>
        );
    }
}
