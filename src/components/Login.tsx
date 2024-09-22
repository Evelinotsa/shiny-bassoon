import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box sx={{margin: "auto", padding: 10 }}>
      <Typography variant="h4">Login</Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" sx={{
            mt: 2,
            backgroundColor: "#997f7c",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#756260",
            },
          }} onClick={handleLogin}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
