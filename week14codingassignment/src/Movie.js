import Card from "react-bootstrap/Card";


// https://www.npmjs.com/package/react-bootstrap-card 
// https://react-bootstrap.netlify.app/docs/components/cards/
// https://www.geeksforgeeks.org/how-to-use-bootstrap-with-react/
// https://mdbootstrap.com/docs/react/components/cards/

export default function Movie(props) {
    return (
        <Card bg="secondary" text="white" className="movie-cards">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title className="movie-title">{props.title}</Card.Title>
                <Card.Subtitle className="movie-year">{props.year}</Card.Subtitle>
                <hr />
                <Card.Text className="movie-specs">
                    <b className="summary">Director - </b> {props.director} <br />
                    <b className="summary">Writer(s) - </b> {props.writers} <br />
                    <b className="summary">Starring - </b> {props.actors} <br />
                    <hr />
                    <b className="summary">Movie Summary -  </b> {props.summary}
                </Card.Text>
                <div className="external-links">
                    <a href={props.imdb} target="_blank">IMDb</a>
                    <a href={props.moviepage} target="_blank">Official Movie Site</a>
                </div>
            </Card.Body>
        </Card>
    );
}