import {Col} from "react-bootstrap";


export const GameCards = ({title, description, imgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}
//figure out how to use videos instead of images
//for game gameplay