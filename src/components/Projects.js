
import Row from 'react-bootstrap/Row';
import Card from './ProjectCards'
import Carousel from 'react-bootstrap/Carousel';
import {projects} from '../content-options'
import img from '../image/vecteezy_25-universal-business-icons-vector-creative-icon_13458403.jpg'

const progectitems =  projects.map(project=><Card className='col-3 m-3' title={project.title} tech={project.technologies_used} img={project.img} github={project.github_link} url={project.deployed_link}/>)


export default function Projects(){

    
    return(
        <>
        <h1 className='text-light text-center '>Projects</h1>
        <div className='container'>
         <div className='d-flex flex-wrap border-top border-bottom w-100 justify-content-start p-10  ' id='project'>{progectitems}</div>
        </div>
         
        </>

      
       
    )
}