import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="daftar" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="absen" options={{ headerShown: false }} />
        <Stack.Screen name="laporan" options={{ headerShown: false }} />
        <Stack.Screen name="lupapassword" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
