import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const laporan = () => {
  // Contoh data laporan absensi
  const laporanData = [
    { id: "1", nama: "Ali", nisn: "123456789", status: "Hadir" },
    { id: "2", nama: "Budi", nisn: "987654321", status: "Sakit" },
    { id: "3", nama: "Cici", nisn: "456789123", status: "Izin" },
    { id: "4", nama: "Deni", nisn: "321654987", status: "Alpha" },
  ];

  // untuk setiap data laporan
  const renderLaporanItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nama: {item.nama}</Text>
      <Text style={styles.itemText}>NISN: {item.nisn}</Text>
      <Text style={[styles.itemText, styles.statusText(item.status)]}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Laporan Absensi</Text>
      <FlatList data={laporanData} renderItem={renderLaporanItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContainer} />
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
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  statusText: (status) => ({
    color: status === "Hadir" ? "green" : status === "Sakit" ? "orange" : status === "Izin" ? "blue" : "red",
    fontWeight: "bold",
  }),
});

export default laporan;
