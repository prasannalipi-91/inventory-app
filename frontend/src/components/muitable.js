/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { Container, Button} from 'react-bootstrap';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

////
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

///



function createData(DEVICE, NAME, DESCR, PID, VID, SN) {
  return { DEVICE, NAME, DESCR, PID, VID, SN };
}

const order = ['DEVICE', 'NAME', 'DESCR', 'PID', 'VID', 'SN'];

function createOrderedData(element) {
  return order.reduce((acc, key) => {
    acc[key] = element[key];
    return acc;
  }, {});
}

export default function CustomizedTables({ item }) {

    const downloadCsv = () => {
      const columnNames = Object.keys(createOrderedData(item[0]));
      const csvData =
        'data:text/csv;charset=utf-8,' +
        [columnNames.join(','), ...
        item
          .map((element) =>
            Object.values(createOrderedData(element))
              .map((value) => `"${String(value)}"`.replace(/\n/g, ''))
              .join(','),
          )
    ].join('\n');
      // Create a link and trigger the download
      const encodedUri = encodeURI(csvData);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'inventory.csv');
      document.body.appendChild(link);
      link.click();
    };

  const rows = item.map ((element) => createData (element.DEVICE, element.NAME, element.DESCR, element.PID, element.VID, element.SN));

///
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(50);

// Avoid a layout jump when reaching the last page with empty rows.
const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
///

  return (
    <Container>
    <Button variant="secondary" size="sm" onClick={downloadCsv}>
    export to csv
    </Button>
    <TableContainer component={Paper} className="mt-2">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DEVICE_IP</StyledTableCell>
            <StyledTableCell align="left">ITEM_NAME</StyledTableCell>
            <StyledTableCell align="left">ITEM_DESCR</StyledTableCell>
            <StyledTableCell align="left">PID</StyledTableCell>
            <StyledTableCell align="left">VID</StyledTableCell>
            <StyledTableCell align="left">SN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
              .slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.DEVICE}
              </StyledTableCell>
              <StyledTableCell align="left">{row.NAME}</StyledTableCell>
              <StyledTableCell align="left">{row.DESCR}</StyledTableCell>
              <StyledTableCell align="left">{row.PID}</StyledTableCell>
              <StyledTableCell align="left">{row.VID}</StyledTableCell>
              <StyledTableCell align="left">{row.SN}</StyledTableCell>
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow align="center">
            <TablePagination
              rowsPerPageOptions={[50, 100, 150, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Container>
  );
};