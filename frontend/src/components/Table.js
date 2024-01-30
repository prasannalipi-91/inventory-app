import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const Tablecomponent = ({ item }) => {
  const downloadCsv = () => {
    const csvData =
      'data:text/csv;charset=utf-8,' +
      item
        .map((element) =>
          Object.values(element)
            .map((value) => `"${String(value)}"`.replace(/\n/g, ''))
            .join(','),
        )
        .join('\n');
    // Create a link and trigger the download
    const encodedUri = encodeURI(csvData);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'inventory.csv');
    document.body.appendChild(link);
    link.click();
  };
  return (
    <Container className="mt-2">
      <Table striped bordered hover>
        <Container className="mb-2" style={{ textAlign: 'left' }}>
          <Button variant="secondary" size="sm" onClick={downloadCsv}>
            export to csv
          </Button>
        </Container>
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
