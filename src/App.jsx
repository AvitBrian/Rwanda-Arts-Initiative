import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Events from './pages/events';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './pages/home/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Checkout from './pages/checkout/Checkout';


function App() {
  const [currentElement, setCurrentElement] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    // Set the current element based on the URL parameter
    if (page === 'events') {
      setCurrentElement(<Events />);
    }else if(page === 'Checkout'){
      setCurrentElement(<Checkout />);
    } else {
      setCurrentElement(<Home />);
    }
  }, [page]);   

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
            backgroundColor: 'lightgrey',
            opacity: 1,
            transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
        },
      },
    },}
  );
  

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <div>
      <CssBaseline />
      <Header title="Rwanda Arts Initiative"
        sx={"h1"} />
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route element={<Navigate to="/" />} />



        </Routes>
      </div>
      </ThemeProvider>

    </Router>
  );
}

export default App;
