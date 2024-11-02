import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NativeBaseProvider } from 'native-base';
import { ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from "expo-font"
import { Provider as PaperProvider } from "react-native-paper"

import { useColorScheme } from '@/hooks/useColorScheme';

import Header from '@/components/Header';

const back_img = { uri: "../assets/images/background@3x.png" };

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    Font.loadAsync({
      'Rubik': require('../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf'),
      'Lexend': require('../assets/fonts/Lexend/Lexend-VariableFont_wght.ttf'),
      'Heebo': require('../assets/fonts/Heebo/Heebo-VariableFont_wght.ttf'),
      'Inter': require('../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf'),
    })
  }, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#DD527B',  // This sets the label color on focus
    },
  };

  return (
    <NativeBaseProvider>
      <PaperProvider theme={theme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <ImageBackground
            source={require("@/assets/images/background.png")}
            style={{ zIndex: -1000, width, height, position: "absolute", top: 0, left: 0 }}
          >
            <Stack screenOptions={{ header: (props) => <Header {...props} /> }}>
              <Stack.Screen name='index' options={{ headerShown: false }} />
              <Stack.Screen name='enterphone' options={{ headerTitle: 'התחברות' }} />
              <Stack.Screen name='verifyphone' options={{ headerTitle: 'התחברות' }} />
              <Stack.Screen name='profile' options={{ headerTitle: 'יצירת פרופיל' }} />
              <Stack.Screen name='welcome' options={{ headerShown: false }} />
              <Stack.Screen name='interests' options={{ headerTitle: "תחומי עניין" }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ImageBackground>
        </ThemeProvider>
      </PaperProvider>
    </NativeBaseProvider>
  );
}
