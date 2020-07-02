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
                        C# / Java / Objective-C / Typescript / Javascript / C++ / Solidity<br/>
                    </AboutCard>
                    <AboutCard index={1} icon="fa fa-code" title="Tools & Libs & Frameworks">
                        NodeJS / Git & Gitflow / ExpressJS / Postman / ReactJS / Expo / Flutter / CreateJS / SDL2 / MongoDB / Mongoose / OpenGL<br/>
                    </AboutCard>
                    <AboutCard index={2} icon="fa fa-code" title="Services">
                        TravisCI / AWS / Heroku<br/>
                    </AboutCard>
                    <AboutCard index={3} icon="fa fa-code" title="Blockchain">
                        Web3 / Infura / Tronweb / Truffle / Ganache / Metamask<br/>
                    </AboutCard>
                    <AboutCard index={4} icon="fa fa-code" title="Testing">
                        NUnit / JUnit / Mocha & Chai / Jest / Enzyme<br/>
                    </AboutCard>
                    <AboutCard index={5} icon="fa fa-code" title="IDEs / Engines">
                        Unity / Netbeans / Eclipse / XCode / VSCode / Visual Studio / Adobe Animate<br/>
                    </AboutCard>
                    <AboutCard index={6} icon="fa fa-music" title="Hobbies">
                        Listening to music<br/>
                        Developing my own games<br/>
                        Reading comics & watching Dragon Ball<br/>
                        Meeting up with friends
                    </AboutCard>
                </div>

                <Footer/>
            </div>
        );
    }
}
