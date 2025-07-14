import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as splashScreen from "expo-splash-screen";
import { useEffect } from "react";


splashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const[loaded, error] = useFonts({
    "manufacturingConsent_regular": 
    require("../assets/fonts/ManufacturingConsent-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded && error == null) {
      splashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; 
  }



  return <Stack />;
}
