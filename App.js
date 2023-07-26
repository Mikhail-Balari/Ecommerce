import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./src/Assets/Fonts/Reboto_Condensed/RobotoCondensed-Italic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

