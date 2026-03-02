import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  body: '#fdfdfd',
  text: '#1f1f1f',
  secondtext: '#f4f4f4',
  thirdtext: '#212122',
  background: '#e8e8efd8',
  secondbackground: 'linear-gradient(180deg, #f5f7fa, #d3d9f7, #e4e0f6)',
  primary: '#65849a',
  accent: '#3b82f6',
  highlight: 'linear-gradient(90deg, #93c5fd, #a5b4fc, #c4b5fd)',
  navShadow: '0 2px 4px rgba(0,0,0,0.1)',
  error: '#a32921',
};

export const darkTheme: DefaultTheme = {
  body: '#121212',
  text: '#f5f5f5',
  secondtext: '#1e1e1e',
  thirdtext: '#cccccc',
  background: '#14141fdd',
  secondbackground: '#1F2937',
  primary: '#65849a',
  accent: '#3b82f6',
  highlight: 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)',
  navShadow: '0 2px 4px rgba(0,0,0,0.5)',
  error: '#a32921',
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
};

export const media = {
  fromMobile: `(min-width: ${breakpoints.mobile})`,
  fromTablet: `(min-width: ${breakpoints.tablet})`,
  fromLaptop: `(min-width: ${breakpoints.laptop})`,
};
