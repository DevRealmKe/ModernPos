import { Button, Container, Form } from 'react-bootstrap';

const UsersForm = () => {
  return (
    <div>
      <Container style={{ width: '40rem' }} className="mt-5">
        <Form>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UsersForm;
