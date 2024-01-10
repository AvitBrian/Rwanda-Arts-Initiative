import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link as from '@mui/material/Link' ;
import logoImage from '../../assets/logo/logo1.png';
import logoImage2 from '../../assets/logo/logo2.png';
import { Link,useLocation } from "react-router-dom";




function Header(props) {
  const {title } = props;
  const location = useLocation();
  const isEventsPage = location.pathname === '/events';

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' ,justifyContent: 'space-between', }}>
      {window.innerWidth < 600 ? ( 
        <img src={logoImage2} width={130} height={60} alt="Mobile Logo" />
      ) : (
        <img src={logoImage} width={60} height={60} alt="Logo" />
      )}


        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          fontWeight={700}
          noWrap
          sx={{ flex: 1, display: { xs: 'none', sm: 'block' }}}
          
        >
          {title}
        </Typography>

        {
          <Link
      color="inherit"
      noWrap
      variant="h5"
      to={isEventsPage ? '/' : '/events'}
      sx={{p:1, flexShrink: 0, fontWeight: 500, fontSize: [12, 16, 18] }}
    >
      {isEventsPage ? <Button variant="outlined" size="small">
          Home
        </Button> : <Button variant="outlined" size="small">
          Events
        </Button> }
    </Link> 
        }
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center',mx: "1rem", overflowX: 'auto' }}
      >

      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;