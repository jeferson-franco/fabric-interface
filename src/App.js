import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import Form from './components/Form';
import Response from './components/Response';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        'localhost',
        {
          text: text,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer YOUR_OPEN_API_KEY',
          },
        },
      );

      setResponse(res.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error fetching data');
    }
  };

  return (
    <Container className="mt-10">
      <Typography variant="h4" gutterBottom>
        Fabric Interface
      </Typography>
      <Form text={text} setText={setText} handleSubmit={handleSubmit} />
      {response && <Response response={response} />}
    </Container>
  );
}

export default App;
