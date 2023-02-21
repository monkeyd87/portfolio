import { Row,Col, Image} from "react-bootstrap"
import image from "../image/Me.jpeg"
import {about} from '../content-options'
import HtmlBuilder from "./html-build"


export default function Bio(){
    return(

       <Row className=" text-light justify-content-center flex-wrap">
        <Col className="col-3">

          <div><Image fluid classname='mh-10'  height="50" thumbnail={true} src={image}/></div>
        </Col>
        <Col className="col-3">
          <h1>

          <HtmlBuilder/>
          </h1>
          <p>{about.text}</p>
        </Col>
       </Row>
    )
}