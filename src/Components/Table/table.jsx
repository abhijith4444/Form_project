import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import jsPDF from 'jspdf';
import './table.css'

const TableComponent = ({ entries }) => {
  const downloadPDF = (entry) => {
    const doc = new jsPDF();
    doc.text(`Name: ${entry.name}`, 10, 10);
    doc.text(`Email: ${entry.email}`, 10, 20);
    doc.text(`Age: ${entry.age}`, 10, 30);
    doc.save(`${entry.name}.pdf`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{border:2,boxShadow:5}} color="secondary" size="small" aria-label="a dense table">
      <TableHead >
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
      </TableHead>
        <TableBody>
          {entries.map((entry, index) => (
            <TableRow key={index} onClick={() => downloadPDF(entry)} style={{ cursor: 'pointer' }}>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.email}</TableCell>
              <TableCell>{entry.age}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
