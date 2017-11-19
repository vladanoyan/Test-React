import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cs from './Contact.pcss';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className={cs.Title}>Contact Us</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
