import { createGlobalStyle } from 'styled-components';

// Import Roboto font files
import RobotoBlack from '../assets/fonts/Roboto-Black.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoItalic from '../assets/fonts/Roboto-Italic.ttf';
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoThin from '../assets/fonts/Roboto-Thin.ttf';
import RobotoSemiBold from '../assets/fonts/Roboto-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
  /* Register Roboto font variations */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  html {
    scroll-padding-top: 70px; 
    scroll-behavior: smooth; 
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.accent} ${({ theme }) => theme.background};
  }

  /* Chrome / Edge / Safari */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondbackground};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.highlight};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accent};
  }

`;
