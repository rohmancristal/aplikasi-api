import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const absen = () => {
  const [name, setName] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Hadir");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleAbsen = () => {
    // untuk mengirim data absen
   console.log("Nama:", name, "Status Absen:", selectedStatus);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Absen Harian</Text>

      <TextInput style={styles.input} placeholder="Masukkan Nama" value={name} onChangeText={setName} />

      <View style={styles.statusContainer}>
        {["Hadir", "Sakit", "Izin", "Alpha"].map((status) => (
          <TouchableOpacity key={status} style={[styles.statusButton, selectedStatus === status && styles.statusButtonSelected]} onPress={() => handleStatusChange(status)}>
            <View style={[styles.radioCircle, selectedStatus === status && styles.radioCircleSelected]} />
            <Text style={styles.statusText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleAbsen}>
        <Text style={styles.submitButtonText}>ABSEN</Text>
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
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  statusButton: {
    alignItems: "center",
  },
  statusButtonSelected: {},
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#888",
    marginBottom: 5,
  },
  radioCircleSelected: {
    borderColor: "#0000FF",
    backgroundColor: "#0000FF",
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#00FF00",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default absen;