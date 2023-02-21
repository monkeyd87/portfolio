import {Form,Row,Col,Container,Button} from 'react-bootstrap/';


 
export default function contact() {
  return (
    <Container fluid id='contact'>
        <h1 className='text-center text-light'>Leave Me A Message</h1>
        <Row className='justify-content-center p-5'>
            <Col className='col-6 bg-warning p-3' >
                <Form  className='bg-dark p-2'>
                <Form.Group className="mb-3 w-100 " controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='text-light'>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant='success'>Send</Button>

                </Form>
            </Col>

        </Row>

    </Container>
        
  );
}