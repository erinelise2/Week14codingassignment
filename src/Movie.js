import React from "react";
import Card from "react-bootstrap/Card";
import ReviewModal from "./ReviewModal";
import RateModal from "./RateModal";
import ReviewList from "./ViewReviewModal";

// https://www.npmjs.com/package/react-bootstrap-card 
// https://react-bootstrap.netlify.app/docs/components/cards/
// https://www.geeksforgeeks.org/how-to-use-bootstrap-with-react/
// https://mdbootstrap.com/docs/react/components/cards/
// buttons https://ej2.syncfusion.com/react/documentation/card/action-buttons#:~:text=You%20can%20include%20Action%20buttons,within%20the%20card%20action%20element.

export default function Movie(props) {
    return (
        <Card bg="secondary" text="white" className="movie-cards">
            <Card.Header>
            <Card.Title className="movie-title">{props.title} ({props.year})</Card.Title>                
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={props.image} />
                <hr />
                <Card.Text>
                    <b className="summary">Director - </b> {props.director} <br />
                    <b className="summary">Writer(s) - </b> {props.writers} <br />
                    <b className="summary">Starring - </b> {props.actors} <br />
                    <hr />
                    <b className="summary"></b> {props.summary} <br />
                    <hr />
                    <b className="summary">User Rating  - </b> {props.averageRating} ⭐'s <br />
                </Card.Text>
                <hr />
                <div className="card-btn"> 
                    <ReviewModal />
                    <RateModal />
                    <ReviewList />
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="external-links">
                    <a href={props.imdb} className="p-1 m-1" target="_blank" rel="noreferrer">IMDb</a>
                    <a href={props.moviepage} className="p-1 m-1"  target="_blank" rel="noreferrer">Official Site</a>
                </div>
            </Card.Footer>
        </Card>
    );
}