import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../home/Header';
import MainFeaturedPost from '../home/MainFeaturedPost';
import FeaturedPost from './FeaturedPost';

import Footer from '../home/Footer';
import HeroImage from '../../assets/images/HeroImage.jpg';
import Borders from '../../assets/logo/Screenshot 2024-01-08 235127.png';
import ONE from '../../assets/images/rwandaartsinitiative-09-01-2024-0001.jpg';
import TWO from '../../assets/images/rwandaartsinitiative-09-01-2024-0002.jpg';


import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';



const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',

    ].join(','),
  },
  
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(12,12,12,0.44)',
    },
    secondary: {
      main: '#101010',
    },
    info: {
      main: '#adadad',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },}
);


const featuredPosts = [
  {
    title: 'LES CHRONIQUES AFRICAINES:',
    date: '15th Feb 2024 - 31st Feb 2024',
    description:
      'A spectacular event that brings together African writers and readers to share their stories and experiences. This year, the event will be held in Kigali, Rwanda.',
    image: ONE,
    imageLabel: 'Image Text',
  },
  {
    title: 'RETOUR EN IMAGES DE IONESCO-SUITE',
    date: 'Nov 11',
    description:
      'Dans une mise en scène de Demarcy Mota. Avec les actrices rwandaises Weya Viatora et isabelle KABANO. Une vibe subliminale!',
    image: TWO,
    imageLabel: 'Image Text',
  },
];
const Socials = {
  social: [
    { name: 'www.instagram.com/rwandaartsinitiative/', icon: InstagramIcon },
    { name: 'www.twitter.com/RAI_equal', icon: XIcon },
    { name: 'www.facebook.com/officialrwandaartisinitiative/', icon: FacebookIcon },
  ],
};



export default function Events() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <main>

          <Box sx={{height:"50px"}}></Box>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

        </main>
      </Container>
      <Footer
        title="Connect with us!"
        description="stay in touch on social media"
        social={Socials.social}
      />
                <Box  sx={{width:1, margin:"-30px 0"}}>
            <img src={Borders} alt="Borders" width={["100%"]}/>
          </Box>
    </ThemeProvider>
  );
}