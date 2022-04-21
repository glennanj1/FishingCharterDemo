import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import darkTheme from '../styles/theme/darkTheme';
import IconButton from '@mui/material/IconButton';
import '../styles/globals.css';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme, setTheme] = useState(darkTheme);

  let handleClick = () => {
    theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme);
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconButton aria-label="delete" onClick={handleClick}>
          <Brightness4Icon/>
        </IconButton>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};