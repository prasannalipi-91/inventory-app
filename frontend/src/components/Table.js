import React from 'react';
import { Table, Container } from 'react-bootstrap';

const Tablecomponent = ({ item }) => {
  return (
    <Container className="mt-2">
      <Table striped bordered hover>
        <tbody className="mt-0">
          {item.map((element, index) => (
            <tr>
              <td>{element.NAME}</td>
              <td>{element.DESCR}</td>
              <td>{element.PID}</td>
              <td>{element.VID}</td>
              <td>{element.SN}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Tablecomponent;
