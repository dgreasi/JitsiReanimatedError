import { StyleSheet } from 'react-native';
import theme from './Theme';

const Styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: theme.colors.white,
  },
  backgroundMain: {
    backgroundColor: theme.colors.backgroundMain,
  },
  container: {
    flex: 1,
  },
  tabBarIcon: {
    paddingTop: theme.spacing.s,
  },
  textLink: {
    textDecorationLine: 'underline',
  },
  footer: {
    height: '100%',
    backgroundColor: 'rgba(230,230,230,0.9)',
  },
  logo: {
    width: 150,
    height: 150,
    overflow: 'visible',
  },
  cardContainer: {
    backgroundColor: theme.colors.white,
    paddingTop: theme.spacing.l,
    paddingLeft: theme.spacing.m,
    paddingRight: theme.spacing.m,
    paddingBottom: theme.spacing.l,
    borderRadius: theme.borderRadii.m,
    width: '100%',
  },
});

export default Styles;
