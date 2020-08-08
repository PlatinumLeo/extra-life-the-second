import { createMuiTheme } from '@material-ui/core/styles';

const getPalette = (type) => {
    const lightTheme = {
        primary: {
            main: '#18527a',
        },
        secondary: {
            main: '#80d835',
        },
        background: {
            default: '#fff',
            lightGrey: '#fcfcfc',
        },
        text: {
            primary: '#394141',
            secondary: '#010111'
        },
    }

    return type === 'light' ? lightTheme : {};
}

const createTheme = (type = 'light') => {
    const palette = getPalette(type);
    return createMuiTheme({
        palette: {
            ...palette,
            type
        },
    });
}

export default createTheme;
