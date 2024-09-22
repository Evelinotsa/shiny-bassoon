import { faCat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ margin: "auto", padding: 5 }}>
      <Stack direction="row" spacing={2} justifyContent="center" padding={4}>
        <FontAwesomeIcon icon={faCat} style={{ fontSize: '50px', color: '#bbb' }}/>
      </Stack>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        <Grid2 display="flex" justifyContent="center" alignItems="center">
          <img 
            src='https://cdn.pixabay.com/photo/2016/01/16/23/07/cat-1144200_1280.png'
            alt='must kass'
            style={{ width: '100%', maxWidth: '300px', height: 'auto'}}
           />
        </Grid2> 

        <Grid2>
          <Typography variant='h4' gutterBottom>
            Sharing What Inspires Me
          </Typography>
          <Typography variant='body1' gutterBottom>
            "Feline Grace, Human Wonder"
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" padding={5}>
            <Button variant='contained' sx={{
            mt: 2,
            backgroundColor: "#997f7c",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#756260",
            },
          }} component={Link} to="/hobbies">
              My hobbies and interests
            </Button>
            <Button variant='contained' sx={{
            mt: 2,
            backgroundColor: "#997f7c",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#756260",
            },
          }} component={Link} to="/contact">
              Contact
            </Button>
          </Stack>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 display="flex" justifyContent="center">
          <img 
            src="https://cdn.pixabay.com/photo/2024/04/17/17/02/box-8702500_1280.jpg"
            alt='kass kastis'
            style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <img  
            src="https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png"
            alt='kassi pea'
            style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid2>
        <Grid2 display="flex" justifyContent="center">
          <img  
            src="https://cdn.pixabay.com/photo/2024/02/15/16/57/cat-8575768_960_720.png"
            alt='kass ja kollane taust'
            style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;
