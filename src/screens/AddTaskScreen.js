import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/CustomButton";

const AddTaskScreen = ({ navigation }) => {
  // State untuk form input
  const [title, setTitle] = useState("");
  const [matkul, setMatkul] = useState("");

  const handleSave = () => {
    if (!title || !matkul) {
      Alert.alert("Error", "Semua kolom harus diisi!");
      return;
    }

    const newTask = {
      id: Math.random().toString(), // ID acak sederhana
      title: title,
      matkul: matkul,
      status: "Belum Selesai",
    };

    // Navigasi kembali ke Home sambil membawa data newTask
    navigation.navigate("Home", { newTask });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Tugas:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Praktikum Modul 3"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Mata Kuliah:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Pemrograman Mobile"
        value={matkul}
        onChangeText={setMatkul}
      />

      <CustomButton
        title="Simpan Tugas"
        onPress={handleSave}
        bgColor="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default AddTaskScreen;
