import React from 'react';
import { TextField, Button } from '@mui/material';

const Form = ({ text, setText, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <TextField
      label="Enter your text here"
      multiline
      rows={4}
      variant="outlined"
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className="bg-blue-500"
    >
      Submit
    </Button>
  </form>
);

export default Form;
