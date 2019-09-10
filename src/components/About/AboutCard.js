import React from 'react';

export default class AboutCard extends React.Component {
    render() {
        const index = this.props.index;
        const icon = this.props.icon;
        const title = this.props.title;
        const children = this.props.children;

        return(
            <div className="aboutCard" style={{gridArea: `card${index}`}}>
                <div className="aboutCardTitleBox">
                    <h3><i className={icon}></i>{title}</h3>
                </div>
                <div className="aboutCardLine"></div>
                <div className="aboutCardContent">
                    {children}
                </div>
            </div>
        );
    }
}
