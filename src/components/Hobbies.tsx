import {
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material"
import Contact from "./Contact"

interface MyHobbiesProps {
  name: string
  hobbies: string[]
}

function Hobbies({ name, hobbies }: MyHobbiesProps) {

  return (
    <Box sx={{ margin: "auto", padding: 10 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
      >
        My hobbies and interests
      </Typography>
      <List>
        {hobbies.map((hobby, index) => (
          <ListItem key={index}>{hobby}</ListItem>
        ))}
      </List>
      <Contact/>
    </Box>
  )
}

export default Hobbies
