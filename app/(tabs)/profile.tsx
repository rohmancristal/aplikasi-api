import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("Rohman");
  const [email, setEmail] = useState("rohmancristal679@gmail.com");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    Alert.alert("Berhasil", "Profil berhasil diperbarui!");
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    navigation.navigate("GantiKataSandi"); // Pindah ke layar ganti kata sandi
  };

  const handleLogout = () => {
    Alert.alert("Konfirmasi", "Apakah Anda yakin ingin logout?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Logout",
        onPress: () => navigation.replace("Login"), // Pindah ke layar login
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tombol Kembali (gaya iPhone) */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/545/545680.png",
          }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Foto Profil */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150",
          }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Informasi Profil */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama</Text>
        <TextInput style={styles.input} value={username} editable={isEditing} onChangeText={setUsername} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} editable={isEditing} onChangeText={setEmail} />

        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
            <Text style={styles.editButtonText}>Edit Profil</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Tombol Ganti Kata Sandi */}
      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.changePasswordButtonText}>Ganti Kata Sandi</Text>
      </TouchableOpacity>

      {/* Tombol Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  profileSection: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    height: 45,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#28A745",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  changePasswordButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  changePasswordButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#DC3545",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfilScreen;
