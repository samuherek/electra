export interface ITheme {
  colors: {
    [key: string]: string;
  };
  text: {
    [key: string]: string;
  };
  layout: {
    [key: string]: string;
  };
  fonts: {
    [key: string]: string;
  };
}

const themeDark: ITheme = {
  colors: {
    danger: 'red',
    primary: 'black',
    secondary: 'gray',
    success: 'green',
    warning: '#FCCC2F',
  },
  fonts: {},
  layout: {
    body: '#2F3437',
    sidebar: '#373C3F',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.9)',
  },
};

const themeLight: ITheme = {
  colors: {
    danger: 'red',
    primary: 'black',
    secondary: 'gray',
    success: 'green',
    warning: '#FCCC2F',
  },
  fonts: {},
  layout: {
    body: '#FFFFFF',
    sidebar: '#F7F6F3',
  },
  text: {
    primary: '#000000',
  },
};

export { themeLight, themeDark };
