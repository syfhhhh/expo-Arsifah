// 
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as splashScreen from "expo-splash-screen";
import { useEffect } from "react";

splashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    CabinSketch:
    require("../assets/fonts/CabinSketch-Regular.ttf"),
    CormorantUnicase:
    require("../assets/fonts/CormorantUnicase-Regular.ttf"),
    CroissantOne: 
    require("../assets/fonts/CroissantOne-Regular.ttf"),
    DancingScript: 
    require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    Gabriela:
    require("../assets/fonts/Gabriela-Regular.ttf"),
    Niconne: 
    require("../assets/fonts/Niconne-Regular.ttf"),
    Caveat: 
    require("../assets/fonts/Caveat-VariableFont_wght.ttf"),
    IntelOneMono: 
    require("../assets/fonts/IntelOneMono-VariableFont_wght.ttf"),
    PlaywritePL: 
    require("../assets/fonts/PlaywritePL-VariableFont_wght.ttf"),
    NotoSansSinhala: 
    require("../assets/fonts/NotoSansSinhala-VariableFont_wdth,wght.ttf"),
  });

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
