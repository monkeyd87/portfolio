
import Card from 'react-bootstrap/Card';
import { faGithub,faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import{faChain} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function CardEl(prop) {
  return (
    <Card style={{ width: '18rem' }} className='m-3 col-5'>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>
         {prop.tech}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={prop.github} target="_blank" className="text-dark p-2">
                <FontAwesomeIcon icon={faGithub} size='1x' />
          </a>
          <a href={prop.url} target="_blank" className="text-dark p-2">
                <FontAwesomeIcon icon={faChain} size='1x' />
          </a>
      </Card.Footer>
    </Card>
  );
}
        


    
    
