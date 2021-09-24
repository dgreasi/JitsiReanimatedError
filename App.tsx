/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {ThemeProvider} from '@shopify/restyle';
import theme, {Box} from './Theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const HomeButton = () => {
  return (
    <Box style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Press me"
        onPress={() => console.log('Simple Button pressed')}
      />
      <Text>PAOK OLE EAAA</Text>
    </Box>
  );
};

// const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <HomeButton />
        {/*<NavigationContainer>*/}
        {/*  <Stack.Navigator>*/}
        {/*    <Stack.Screen name="Home" component={HomeButton} />*/}
        {/*  </Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
