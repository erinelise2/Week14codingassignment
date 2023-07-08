import React from 'react';
import data from "./Movie";

// Can this extend the movie(props) to pull data and connect them? How do I connect this to the review array to view the reviews connected to that film??

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`Film To Be Reviewed; (${this.props.id})`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Film Title: {this.props.title}</p>
                <p>Reviewer: {this.props.userName}</p>
                <p>Review: {this.props.userReview}</p>
                <p>Review Date: {this.props.reviewDate}</p>
            </div>
        );
    }   
}