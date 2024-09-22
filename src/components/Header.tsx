import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <AppBar position="static" sx={{ background: '#333'}}>
      <Toolbar>
      <FontAwesomeIcon icon={faCat} style={{ marginRight: '10px', fontSize: '24px', color: '#fff' }}/>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Space
        </Typography>
        <PetsIcon sx={{ marginRight: '10px', background: 'fff'}}/>
        <Button color="inherit" component={Link} to="/home">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/hobbies">
          Hobbies
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;