import React from 'react';
import Footer from "../Footer";
import PageHeading from "../Fragments/PageHeading";
import ProjectCard from "./ProjectCard";

const StatusTypes = {
    notMaintained: "Not maintained",
    alphaOnly: "Alpha dev only",
    betaOnly: "Beta dev only",
    classified: "Classified details",
    conference: "Conference"
}

class LinkInfo {
    blogger = null;
    github = null;
    google = null;
    apple = null;
    website = null;

    constructor(links) {
        this.blogger = links.blogger;
        this.github = links.github;
        this.google = links.google;
        this.apple = links.apple;
        this.website = links.website;
    }
}

class ProjectInfo {
    thumb = undefined;
    title = "Title";
    shortDesc = "Description";
    links = null;
    status = undefined;

    constructor(thumb, title, shortDesc, links, status) {
        this.thumb = thumb;
        this.title = title;
        this.shortDesc = shortDesc;
        this.links = links;
        this.status = status;
    }
}

export default class Projects extends React.Component {

    projects = [];

    constructor() {
        super();

        this.projects.push(new ProjectInfo(
            require("../../assets/img/duobeats.jpg"),
            "DuoBeats",
            "A vertical-scrolling rhythm game developed for Game Programming assignment 1.",
            new LinkInfo({
                blogger: "http://www.google.com",
                github: "http://www.naver.com"
            })
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/projectblackjack.jpg"),
            "Project: Blackjack",
            "A twist of classic Blackjack game with RPG'ish features for Program Design and Construction assignment.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/hellopop.png"),
            "HELLO POP",
            "A chill, adventurous match-3 game with cute animals.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/projectbeats.jpg"),
            "Project: Beats",
            "A personal project which aims to develop a large-scale rhythm game using Unity game engine.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/colabo.jpg"),
            "콜라보 (Colabo)",
            "A real-time team-building game using Google Maps; specifically designed for large enterprises.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/ebsstats.jpg"),
            "EBS 고등통계 (EBS statistics app)",
            "A web-based application hosted in EBS, which aims to assist South Korean high school students in studying statistics.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "EBS 고등 수학 게임 (EBS high school math games)",
            "A collection of HTML5-based games hosted in EBS, which aims to teach high-school-level mathematical theories through games.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "EBS 중등 수학 게임 (EBS middle school math games)",
            "A collection of HTML5-based games hosted in EBS, which aims to teach middle-school-level mathematical theories through games.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/limited.jpeg"),
            "Limited",
            "A casual puzzle game developed for personal experiments.",
            new LinkInfo({
                website: "https://play.google.com/store/apps/details?id=com.softchips.limited"
            })
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "Terraria mod (GFG mod)",
            "A personal mod developed for Terraria which introduces somes features from another game \"Girls' Frontline\".",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/combi.jpeg"),
            "콤비 (COMBi)",
            "A real-time team-building game similar to Colabo.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/classicscore.jpeg"),
            "Classic Score",
            "A musical score application.",
            "http://www.google.com",
            "http://www.naver.com"
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/citrenz2017.jpg"),
            "Short course initiative of Aspire2 International",
            "An extended abstract and a poster submitted to CITRENZ 2017. " +
                "The case study aims to introduce the initiative of a new game development short course in Aspire2 International. " +
                "(Given the Best Poster Award on day 2 of conference.)",
            new LinkInfo({
                website: "https://www.citrenz.ac.nz/conferences/2017/pdf/2017CITRENZ_Poster_45_Kim_Game.pdf"
            }),
            StatusTypes.conference
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "2 Blockchain-based games",
            "Two games developed by integrating a custom blockchain solution built within our company. " +
                "All project sources were handed over to the client's company for long-term maintenance and development.",
            "http://www.google.com",
            "http://www.naver.com",
            StatusTypes.betaOnly
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "SIP solution for a mining company",
            "An SIP solution (server & android app) developed for a mining company in korea.",
            "http://www.google.com",
            null,
            StatusTypes.classified
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "TESCO forklift training simulator",
            "A game which simulates TESCO forklifts to train workers in early-stage.",
            "http://www.google.com",
            null,
            StatusTypes.classified
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "캐치팡 (Catch Pop)",
            "A casual, match-3 game which was serviced by an enterprise as part of their new-year event. " + 
                "Currently, the event has expired and is no longer on service.",
            "http://www.google.com",
            "http://www.naver.com",
            StatusTypes.notMaintained
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/learntools.jpeg"),
            "런툴즈 (Learn Tools)",
            "An application developed for training staff members in enterprises. " +
                "Currently, the client has shut down the server temporarily.",
            null,
            StatusTypes.notMaintained
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "마이리틀래빗 TV (My Little Rabbit TV)",
            "A utility application for parents and young children to watch kids' animations, draw, meditate, and etc. " + 
                "Currently, the client is no longer maintaining its service.",
            "http://www.google.com",
            "http://www.naver.com",
            StatusTypes.notMaintained
        ));
        this.projects.push(new ProjectInfo(
            require("../../assets/img/sachunsung.jpeg"),
            "톡톡사천성 for Kakao",
            "A pattern-matching game developed for Kakao platform. Currently, the client is no longer maintaining its service.",
            null,
            StatusTypes.notMaintained
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "Cling for Kakao",
            "A unique casual game with somewhat similar traits of a brick breaker game. Currently, we are no longer maintaining its service.",
            "http://www.google.com",
            "http://www.naver.com",
            StatusTypes.notMaintained
        ));
        this.projects.push(new ProjectInfo(
            undefined,
            "Game dev. short course for Aspire2 International",
            "A development of a short course for Aspire2 International as part of my final industry project. The aim is to teach game development to students using Unity game engine. " +
                "The short course is no longer maintained due to my study towards a degree.",
            "http://www.google.com",
            null,
            StatusTypes.notMaintained
        ));


    }

    getCards() {
        let cards = [];
        for(let i=0; i<this.projects.length; i++) {
            let proj = this.projects[i];
            cards.push(
                <ProjectCard
                    key={i}
                    thumb={proj.thumb}
                    title={proj.title}
                    shortDesc={proj.shortDesc}
                    links={proj.links}
                    status={proj.status}
                />
            );
        }
        return cards;
    }

    render() {
        return(
            <div className="projects">
                <PageHeading title="Projects"/>

                <div className="projectsContainer">
                    {this.getCards()}
                </div>

                <Footer/>
            </div>
        );
    }
}
