import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
        font-family: Nunito !important;
    }
    
`;
 
export default GlobalStyle;

export const colors = {
    white: '#FFFFFF',
    red: '#FF0000',
	primary: '#FFBC80',
    primaryLight: '#FF9E44',
	black: '#212121',
    grey: '#4b4846',
    greyLight: '#7b889b',
    blueLight: '#5fbde9',
}

export const theme = {
    colors: colors,
    mediaQueryMobile: '600px',
};