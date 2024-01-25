import React from 'react';
import { Table } from 'react-bootstrap';

const Tablecomponent = ({ value }) => {
  return (
    <Table striped bordered hover>
      <tbody className="mt-0">
        {value.map((element, index) => (
          <tr>
            <td>{element.urls.small}</td>
            <td>{element.title}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tablecomponent;
