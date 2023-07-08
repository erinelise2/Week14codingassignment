import React from "react";


export default class Review extends React.Component{
    /* Review components display user, date, and text */
        render(){
            return(
                <div className="review">
                <td>{this.props.userName}</td>
                <td>{this.props.reviewDate}</td>
                <td>{this.props.userReview}</td>
                </div>
            );     
        }
    }