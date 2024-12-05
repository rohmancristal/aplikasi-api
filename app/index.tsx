import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

useEffect(() => {
  setTimeout(() => {
    SplashScreen.hideAsync(); // Menyembunyikan splash screen setelah beberapa detik
    router.replace("/login"); // Ganti ke halaman Login
  }, 3000); // Splash screen tampil selama 3 detik
}, []);

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/splash.png")} style={styles.image} />
      <Text style={styles.text}>Absensi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FF00",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});
