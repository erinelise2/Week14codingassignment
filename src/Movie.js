import React from "react";
import Card from "react-bootstrap/Card";
import Stars from "./Stars";
import ReviewModal from "./ReviewModal";
import RateModal from "./RateModal";
import ReviewList from "./ReviewList";

// https://www.npmjs.com/package/react-bootstrap-card 
// https://react-bootstrap.netlify.app/docs/components/cards/
// https://www.geeksforgeeks.org/how-to-use-bootstrap-with-react/
// https://mdbootstrap.com/docs/react/components/cards/
// buttons https://ej2.syncfusion.com/react/documentation/card/action-buttons#:~:text=You%20can%20include%20Action%20buttons,within%20the%20card%20action%20element.

export default function Movie(props) {
    const [formData, setFormData] = React.useState([
        {
            userName: 'Sullivan',
            userReview: 'The Best! My go to',
            reviewDate: '2023-07-04',
        },
        {
            userName: 'Lola',
            userReview: 'Enjoyable, but not one I would watch over and over.',
            reviewDate: '2023-07-06',
        }
    ]);

    return (
        <Card bg="secondary" text="white" className="movie-cards">
            <Card.Body>
                <Card.Title className="movie-title">{props.title} ({props.year})</Card.Title>
                <hr />
                <Card.Img variant="top" src={props.image} />
                <hr />
                <Card.Text className="movie-specs">
                    <b className="summary">Director - </b> {props.director} <br />
                    <b className="summary">Writer(s) - </b> {props.writers} <br />
                    <b className="summary">Starring - </b> {props.actors} <br />
                    <hr />
                    <b className="summary"></b> {props.summary}
                </Card.Text>
                <hr />
                <div className="card-btn"> 
                    <ReviewModal 
                        title={props.title}
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <RateModal />
                    <ReviewList />
                </div>
                <div className="container text-center">
                    <p> Average Rating:  </p> 
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="external-links">
                    <a href={props.imdb} className="p-1 m-1" target="_blank">IMDb</a>
                    <a href={props.moviepage} className="p-1 m-1"  target="_blank">Official Site</a>
                </div>
            </Card.Footer>
        </Card>
    );
}