export interface ITheme {
  colors: {
    [key: string]: string;
  };
  text: {
    [key: string]: string;
  };
  fonts: {
    [key: string]: string;
  };
}

const theme: ITheme = {
  colors: {
    danger: 'red',
    primary: 'black',
    secondary: 'gray',
    success: 'green',
    warning: '#FCCC2F',
  },
  fonts: {},
  text: {
    primary: '#000000',
  },
};

export default theme;
