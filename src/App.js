import React, { useState } from 'react';
import Form from './Components/Form/form'
import Table from './Components/Table/table'
import { Container, Typography } from '@mui/material';
import './App.css'
import { styled } from '@mui/material/styles';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };


  return (
    <Container>
       <Typography className='heading' variant="h4" color="#615EFC "gutterBottom>
        Fill up the Form
      </Typography>
      <Form addEntry={addEntry} />
      <Table entries={entries} />
    </Container>
  );
}

export default App;
