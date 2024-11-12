// screens/SiswaScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Siswa = () => {
  const [gender, setGender] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Siswa</Text>

      <TextInput style={styles.input} placeholder="Nama" />
      <TextInput style={styles.input} placeholder="NISN" keyboardType="numeric" />

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Jenis Kelamin</Text>
        <TouchableOpacity style={[styles.genderButton, gender === "Laki-Laki" && styles.genderButtonSelected]} onPress={() => setGender("Laki-Laki")}>
          <View style={[styles.radioCircle, gender === "Laki-Laki" && styles.selectedRadioCircle]} />
          <Text style={styles.genderText}>Laki-Laki</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.genderButton, gender === "Perempuan" && styles.genderButtonSelected]} onPress={() => setGender("Perempuan")}>
          <View style={[styles.radioCircle, gender === "Perempuan" && styles.selectedRadioCircle]} />
          <Text style={styles.genderText}>Perempuan</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  input: {
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginRight: 10,
  },
  genderButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 5,
  },
  selectedRadioCircle: {
    backgroundColor: "#6200EE",
  },
  genderText: {
    fontSize: 16,
    color: "#000",
  },
  saveButton: {
    backgroundColor: "#00FF00",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Siswa;
