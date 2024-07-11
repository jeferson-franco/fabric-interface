import React from 'react';
import { Typography } from '@mui/material';

const Response = ({ response }) => (
  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
    <Typography variant="h6">Response:</Typography>
    <Typography>{response}</Typography>
  </div>
);

export default Response;
