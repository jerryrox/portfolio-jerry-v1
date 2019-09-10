import React from 'react';

export default class PageHeading extends React.Component {

    render() {
        const title = this.props.title;

        return(
            <div className="pageheading">
                <h1 className="pageheadingTitle">{title}</h1>
            </div>
        );
    }
}
