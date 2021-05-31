import {
    Button,
    AppBar,
    Toolbar,
    Typography,
  } from '@material-ui/core';
import {Link} from 'react-router-dom';

const MenuAppBar = ({history}) => {

    return (      
    <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6' style={{ flexGrow: 1 }}>
        Card for learning german
      </Typography>
      <Button variant='outlined' color='inherit' component={Link} to='/'>
        Random card generator
      </Button>
      <Button variant='outlined' color='inherit' component={Link} to='/write-card'>
        write card
      </Button>
      <Button variant='outlined' color='inherit' component={Link} to='/all-card'>
        Browse all cards
      </Button>
    </Toolbar>
  </AppBar>);
}

export default MenuAppBar;