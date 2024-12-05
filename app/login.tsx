import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username); 
    console.log("Password:", password); 

    // Validasi input
    if (!username || !password) {
      Alert.alert("Error", "Email dan Password harus diisi!");
      return;
    }

    // navigasi ke dashboard
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#000" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Belum punya akun?{" "}
        <Text style={styles.linkText} onPress={() => router.replace("/daftar")}>
          Daftar
        </Text>
      </Text>

      <TouchableOpacity onPress={() => router.replace("/lupapassword")}>
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
