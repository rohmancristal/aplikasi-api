import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RiwayatScreen = () => {
  const navigation = useNavigation();

  // Contoh data riwayat
  const [riwayatData, setRiwayatData] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      tanggal: `2024-12-${String((i % 31) + 1).padStart(2, "0")}`,
      aktivitas: `Aktivitas ke-${i + 1}`,
      status: i % 2 === 0 ? "Sukses" : "Gagal",
    }))
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.activity}>{item.aktivitas}</Text>
        <Text style={[styles.status, item.status === "Sukses" ? styles.success : styles.failed]}>{item.status}</Text>
      </View>
      <Text style={styles.date}>Tanggal: {item.tanggal}</Text>
    </View>
  );

  const handleClearHistory = () => {
    Alert.alert("Konfirmasi", "Apakah Anda yakin ingin menghapus semua riwayat?", [
      { text: "Batal", style: "cancel" },
      { text: "Hapus", onPress: () => setRiwayatData([]) },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/545/545680.png",
          }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Riwayat</Text>

      {/* Tombol Hapus Semua */}
      <TouchableOpacity style={styles.clearButton} onPress={handleClearHistory}>
        <Text style={styles.clearButtonText}>Hapus Semua Riwayat</Text>
      </TouchableOpacity>

      {/* Daftar Riwayat */}
      <FlatList data={riwayatData} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} contentContainerStyle={styles.listContainer} ListEmptyComponent={<Text style={styles.emptyText}>Tidak ada riwayat.</Text>} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  clearButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  clearButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  activity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  success: {
    color: "#28A745",
  },
  failed: {
    color: "#DC3545",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  emptyText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 50,
  },
});

export default RiwayatScreen;
