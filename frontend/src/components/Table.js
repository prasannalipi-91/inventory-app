import React from 'react';
import { Table, Container } from 'react-bootstrap';

const Tablecomponent = ({ item }) => {
  return (
    <Container className="mt-2">
      <Table striped bordered hover>
        <tbody className="mt-0">
          {item.map((element, index) => (
            <tr>
              <td>{element.id}</td>
              <td>{element.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Tablecomponent;
