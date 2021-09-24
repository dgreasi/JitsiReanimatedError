import { createTheme, createBox, createText } from '@shopify/restyle';

export enum PALETTE {
  BACKGROUND_MAIN = 'backgroundMain',
  WHITE = 'white',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SECONDARY_60_PERCENT = 'secondary60Percent',
  BUTTON_MAIN = 'buttonMain',
  NEUTRAL_GREY = 'neutralGrey',
  DARK_GREY = 'darkGrey',
  GREY2 = 'grey2',
  GREY3 = 'grey3',
  GREEN = 'green',
  TEXT = 'text',
  DANGER = 'danger',
  BLUE = 'blue',
  BLUE2 = 'blue2',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  DEFAULT_RIPPLE = 'defaultRipple',
}

export const BUTTON_SIZES = {
  icon: 24,
  roundContainer: 36,
};

const palette = {
  twitter: '#03A9F4',
  backgroundMain: '#fafafa',
  background: '#f5f5f5',
  white: 'white',
  primary: '#1D1D1B',
  secondary: '#F47B5F',
  secondary60Percent: 'rgba(255, 118, 72, 0.6)',
  secondary35Percent: 'rgba(255, 118, 72, 0.35)',
  buttonMain: '#242323',
  neutralGrey: '#9098B1',
  darkGrey: '#5C5C5C',
  grey2: '#444444',
  grey3: '#cdcdcd',
  green: '#4DC591',
  text: 'rgba(12, 13,52, 0.7)',
  danger: '#FF5558',
  danger80percent: '#f96e7d',
  blue: '#59aefa',
  blue2: '#0077cc',
  facebook: '#3b5998',
  google: '#EA4335',
  defaultRipple: '#f6f7f8',
};

const theme = createTheme({
  colors: {
    twitter: palette.twitter,
    green: palette.green,
    buttonMain: palette.buttonMain,
    neutralGrey: palette.neutralGrey,
    primary: palette.primary,
    secondary: palette.secondary,
    secondary60Percent: palette.secondary60Percent,
    secondary35Percent: palette.secondary35Percent,
    text: palette.text,
    white: palette.white,
    danger: palette.danger,
    danger80percent: palette.danger80percent,
    backgroundMain: palette.backgroundMain,
    darkGrey: palette.darkGrey,
    grey2: palette.grey2,
    grey3: palette.grey3,
    blue: palette.blue,
    blue2: palette.blue2,
    facebook: palette.facebook,
    google: palette.google,
    defaultRipple: palette.defaultRipple,
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    ml: 32,
    xl: 40,
    xxl: 54,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    welcomeHeading: {
      fontSize: 36,
      fontFamily: 'Manrope-Bold',
      textAlign: 'left',
    },
    heading0: {
      fontSize: 24,
      fontFamily: 'Manrope-Bold',
    },
    heading1: {
      fontSize: 22,
      fontFamily: 'Manrope-Bold',
    },
    heading2: {
      fontSize: 16,
      fontFamily: 'Manrope-Bold',
    },
    heading3: {
      fontSize: 14,
      fontFamily: 'Manrope-Bold',
    },
    heading4: {
      fontSize: 12,
      fontFamily: 'Manrope-Bold',
    },
    heading5: {
      fontSize: 10,
      fontFamily: 'Manrope-Bold',
    },
    mediumText0: {
      fontSize: 44,
      fontFamily: 'Manrope-Medium',
    },
    mediumText1: {
      fontSize: 16,
      fontFamily: 'Manrope-Medium',
    },
    mediumText2: {
      fontSize: 14,
      fontFamily: 'Manrope-Medium',
    },
    mediumText3: {
      fontSize: 12,
      fontFamily: 'Manrope-Medium',
    },
    mediumText4: {
      fontSize: 10,
      fontFamily: 'Manrope-Medium',
    },
    mediumText5: {
      fontSize: 8,
      fontFamily: 'Manrope-Medium',
    },
    normalText0: {
      fontSize: 22,
      fontFamily: 'Manrope-Regular',
    },
    normalText1: {
      fontSize: 16,
      fontFamily: 'Manrope-Regular',
    },
    normalText2: {
      fontSize: 14,
      fontFamily: 'Manrope-Regular',
    },
    normalText3: {
      fontSize: 13,
      fontFamily: 'Manrope-Regular',
    },
    normalText4: {
      fontSize: 12,
      fontFamily: 'Manrope-Regular',
    },
    normalText5: {
      fontSize: 10,
      fontFamily: 'Manrope-Regular',
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
export const Box = createBox<Theme>();
export default theme;
