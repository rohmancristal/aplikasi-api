import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LupaPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor="#000" keyboardType="email-address" />

      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backToLoginText}>Kembali ke Login</Text>
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
  resetButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#00FF00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  resetButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  backToLoginText: {
    marginTop: 10,
    color: "#0000FF",
    textDecorationLine: "underline",
  },
});

export default LupaPassword;
