import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <AppBar position="static" sx={{ background: '#333'}}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Button component={Link} to="/home" sx={{ color: 'inherit', textTransform: 'none' }}>
            <FontAwesomeIcon icon={faCat} style={{ marginRight: '10px', fontSize: '24px', color: '#fff' }}/>
            <Typography variant="h6">
              My Space
            </Typography>
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}/>

          <PetsIcon sx={{ marginRight: '10px', background: 'fff'}}/>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/hobbies">
            About me
          </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;