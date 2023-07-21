import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./src/Assets/Fonts/Reboto_Condensed/RobotoCondensed-Italic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Navigator/>
  );
}

