import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cs from './Terms.pcss';


class Contact extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className={cs.Title}>Terms of Service</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
