import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Interests:', interests);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Profile</Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Interests"
          variant="outlined"
          fullWidth
          margin="normal"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
