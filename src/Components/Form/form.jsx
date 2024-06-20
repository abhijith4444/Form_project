import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import './form.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material';






const FormComponent = ({ addEntry }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: '',
    },
    onSubmit: (values, { resetForm }) => {
      addEntry(values);
      resetForm();
    },
  });

  const commonStyles = {
    boxShadow: 10,
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    borderRadius:3,
    width: '35rem',
    height: '26rem',
  };

  return (
   
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, borderColor: 'primary.main',  }} >
    <form onSubmit={formik.handleSubmit}>
      <TextField 
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        margin="normal"
        
        sx={{ borderRadius:3, boxShadow:4}}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        margin="normal"
        sx={{ borderRadius:3, boxShadow:4}}
      />
      <TextField
        fullWidth
        id="age"
        name="age"
        label="Age"
        value={formik.values.age}
        onChange={formik.handleChange}
        margin="normal"
        sx={{ borderRadius:3, boxShadow:4}}
      />
      <Button className='Button' color="primary" variant="contained" sx={{boxShadow:5}} type="submit">
        Submit
      </Button>
    </form>
    </Box>
    </Box>
  );
};

export default FormComponent;
