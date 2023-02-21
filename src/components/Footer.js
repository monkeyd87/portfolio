import { Row,Col,Container} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
       <Container fluid>
        <Row className="bg-dark  text-center">
            <Col className="">
        <a href="https://www.linkedin.com/in/dennis-jackson-a5233824a/" target='_blank' className="text-light p-2">
                <FontAwesomeIcon icon={faLinkedin} size='1x' />
            </a>
        <a href="https://github.com/monkeyd87" target="_blank" className="text-light p-2">
            <FontAwesomeIcon icon={faGithub} size='1x' />
        </a>
        <Row>
            <p className="text-light text-center">dennisdjack1987@gmail.com</p>
        </Row>
            </Col>

        </Row>
       </Container>
    )
}