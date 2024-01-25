import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const containerStyle = {
  backgroundColor: 'none',
};

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container style={containerStyle} className="mt-2">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for images..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
