
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Provider store={store}>
        <Routes />
      </Provider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
