import React from 'react';

export default class ProjectCard extends React.Component {


    render() {
        const {
            thumb,
            title,
            shortDesc,
            links,
            status
        } = this.props;

        const {
            blogger,
            github,
            google,
            apple,
            website
        } = links ? links : {};

        return(
            <div className="projectCard">
                <div className="cardThumbBox" style={{
                    backgroundImage: `url('${thumb}')`
                }}>
                    <ul className="cardLinks">
                        {
                            blogger &&
                            <li className="cardLinkItem">
                                <a href={blogger} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-book fa-2x"></i>
                                </a>
                            </li>
                        }
                        {
                            github &&
                            <li className="cardLinkItem">
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-2x"></i>
                                </a>
                            </li>
                        }
                        {
                            google &&
                            <li className="cardLinkItem">
                                <a href={google} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-google fa-2x"></i>
                                </a>
                            </li>
                        }
                        {
                            apple &&
                            <li className="cardLinkItem">
                                <a href={apple} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-apple fa-2x"></i>
                                </a>
                            </li>
                        }
                        {
                            website &&
                            <li className="cardLinkItem">
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-globe fa-2x"></i>
                                </a>
                            </li>
                        }
                    </ul>
                    {
                        status && <h2>{status}</h2>
                    }
                    {
                        !thumb && <p>No thumbnail</p>
                    }
                </div>

                <h3 className="cardTitle">{title}</h3>
                <p className="cardDesc">{shortDesc}</p>
            </div>
        );
    }
}
