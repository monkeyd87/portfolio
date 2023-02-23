import { Row,Col, Image,Container} from "react-bootstrap"
import image from "../image/Me.jpeg"
import {about} from '../content-options'
import HtmlBuilder from "./html-build"


export default function Bio(){
    return(

       <Row fluid={true} className="border text-light justify-content-center flex-sm-column flex-lg-row d-flex flex-column align-content-center p-3">
        <Col className="col-3 ">

          <div><Image fluid={true} classname='mh-10'  height="50" thumbnail={true} src={image}/></div>
        </Col>
        <Col className="col-3  justify-content-center" >
          <h1 className="text-center">
            <HtmlBuilder/>
          </h1>
          <div className="border-top p-1">
            <p>{about.text}</p>
          </div>
        </Col>
       </Row>
    )
}