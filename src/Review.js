import React from 'react';

export default class Review extends Component {
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
                <p>Title: {this.props.title}</p>
                <p>userReview: {this.props.userReview}</p>
            </div>
        );
    }   
}