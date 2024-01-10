import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HeroImage from '../../assets/images/HeroImage.jpg';
import Borders from '../../assets/logo/Screenshot 2024-01-08 235127.png';
import ONE from '../../assets/images/rwandaartsinitiative-09-01-2024-0003.jpg';
import TWO from '../../assets/images/rwandaartsinitiative-09-01-2024-0004.jpg';
import art1 from '../../assets/images/art1.jpg';
import art2 from '../../assets/images/art2.jpg';
import art3 from '../../assets/images/art3.jpg';
import art4 from '../../assets/images/art4.jpg';
import art5 from '../../assets/images/art5.jpg';
import art6 from '../../assets/images/art6.jpg';
import art7 from '../../assets/images/art7.jpg';
import art8 from '../../assets/images/art8.jpg';
import art9 from '../../assets/images/art9.jpg';
import art10 from '../../assets/images/art10.jpg';
import Events from '../events';

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



const mainFeaturedPost = {
  title: 'Hey There!',
  description:
    "Dive into the world of art with us!",
  image: HeroImage,
  imageText: 'main image description',
  linkText: 'more...',
};

const featuredPosts = [
  {
    title: 'RENCONTRES NYIRARUMAGA DES LITTERATURES AFRICAINES:',
    date: 'June 2023',
    description:
      'This afternoon, we have had the great pleasure of receiving various artists for "lecture musicales" a segment of the gatherings in which texts from various Rwandan authors are read',
    image: ONE,
    imageLabel: 'Image Text',
  },
  {
    title: 'RETOUR EN IMAGES DE IONESCO-SUITE AU THEATRE DE LA VILLE PARIS',
    date: 'Nov 11',
    description:
      'Dans une mise en scène de Demarcy Mota. Avec les actrices rwandaises Weya Viatora et isabelle KABANO. Une vibe subliminale!',
    image: TWO,
    imageLabel: 'Image Text',
  },
];

const listItems = [{id:1,title:"Inquiries", details:"yo"},{id:2,title:"Partners", details:"yo"},{id:3, title:"Honorable Mentions",details:"yo"},];

const sidebar = {
  title: 'About',
  description:
    'Rwanda Arts Initiative is a platform gathering Rwandan artists and aiming at professionalization of the art industry. ',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'www.instagram.com/rwandaartsinitiative/', icon: InstagramIcon },
    { name: 'www.twitter.com/RAI_equal', icon: XIcon },
    { name: 'www.facebook.com/officialrwandaartisinitiative/', icon: FacebookIcon },
  ],
};
const images = [
  { id: 1, img: art1, title: 'Artwork 1' },
  { id: 2, img: art2, title: 'Artwork 2' },
  { id: 3, img: art3, title: 'Artwork 2' },
  { id: 4, img: art4, title: 'Artwork 2' },
  { id: 6, img: art6, title: 'Artwork 2' },
  { id: 7, img: art7, title: 'Artwork 2' },
  { id: 8, img: art8, title: 'Artwork 2' },
  { id: 9, img: art9, title: 'Artwork 2' },
  { id: 10, img: art10, title: 'Artwork 2' },
  // Add more image data as needed
];




export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Box  sx={{width:1, margin:"-30px 0"}}>
            <img src={Borders} alt="Borders" width={["100%"]}/>
          </Box>
          <Box sx={{height:"50px"}}></Box>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Box sx={{ minHeight: '100vh', overflow: 'auto' }}>
            
      <ImageList cols={3} gap={0}>
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
            sx={{ display: "none", "&:hover": { display: "block" }}}
              title={item.title}
              actionIcon={
                <IconButton sx={{color: 'rgba(255, 255, 255, 0.54)' }}>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the Heart of Africa" listItems={listItems} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Connect with us!"
        description="stay in touch on social media"
        social={sidebar.social}
      />
                <Box  sx={{width:1, margin:"-30px 0"}}>
            <img src={Borders} alt="Borders" width={["100%"]}/>
          </Box>
    </ThemeProvider>
  );
}