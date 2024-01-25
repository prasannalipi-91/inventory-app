import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const ImageCard = ({ image }) => {
  return (
    <Container className="mt-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image.urls.small} />
        <Card.Body>
          <Card.Title>{image.title}</Card.Title>
          <Card.Text>{image.alt_description || image.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ImageCard;
