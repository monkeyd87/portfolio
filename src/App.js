
import NavBar from "./components/NavBar"
import Bio from "./components/Bio"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import HtmlBuilder from './components/html-build'
import {skill} from './content-options'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
import { Row,Col} from "react-bootstrap"

import SkillBar from 'react-skillbars';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





function App() {
  return (
    <>

    <div className="App">
     <NavBar/>
     <Bio/>
     <Row className="justify-content-center m-5">
        <Col>
        <h1 className="text-light skill-text">
          SKILLS
        </h1>
        </Col>
        <Col className="col-10">
          <SkillBar skills={skill.skills} height={25} colors={skill.colors} animationDuration={1500}/>
        </Col>
     </Row>

     <Projects/>
     <Contact/>
    <div>
      <Footer/>
    </div>
    </div>
    </>
    
  );
}

export default App;
