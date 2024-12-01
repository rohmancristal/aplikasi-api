import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link, router } from "expo-router";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/(tabs)")} // Navigasi ke Dashboard
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Belum punya akun?{" "}
        <Text style={styles.linkText} onPress={() => navigation.navigate("Daftar")}>
          Daftar
        </Text>
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("LupaPassword")}>
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF5F5",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#00FF00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 20,
    color: "#000",
  },
  linkText: {
    color: "#0000FF",
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    marginTop: 10,
    color: "#0000FF",
    textDecorationLine: "underline",
  },
});

export default Login;
