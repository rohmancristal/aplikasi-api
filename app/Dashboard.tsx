// screens/DashboardScreen.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Selamat Siang,</Text>
        <Text style={styles.username}>Rohman</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Siswa")}>
          <View style={[styles.icon, { backgroundColor: "#00FF00" }]}>
            <Text style={styles.iconText}>👥</Text>
          </View>
          <Text style={styles.menuText}>Siswa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Absen")}>
          <View style={[styles.icon, { backgroundColor: "#FFA500" }]}>
            <Text style={styles.iconText}>✏️</Text>
          </View>
          <Text style={styles.menuText}>Absen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Laporan")}>
          <View style={[styles.icon, { backgroundColor: "#FF0000" }]}>
            <Text style={styles.iconText}>📄</Text>
          </View>
          <Text style={styles.menuText}>Laporan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  greetingContainer: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  greeting: {
    fontSize: 18,
    color: "#000",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 28,
  },
  menuText: {
    marginTop: 8,
    color: "#000",
    fontWeight: "600",
  },
});

export default DashboardScreen;
