import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import TaskCard from "../components/TaskCard";

const HomeScreen = ({ navigation, route }) => {
  // Penggunaan Hooks useState untuk menyimpan daftar tugas
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Buat Makalah Jaringan",
      matkul: "Jaringan Komputer",
      status: "Selesai",
    },
    {
      id: "2",
      title: "Latihan React Native",
      matkul: "Pemrograman Mobile",
      status: "Belum Selesai",
    },
  ]);

  // Penggunaan Hooks useEffect untuk menangkap data baru dari halaman AddTaskScreen
  useEffect(() => {
    if (route.params?.newTask) {
      setTasks((prevTasks) => [...prevTasks, route.params.newTask]);
    }
  }, [route.params?.newTask]);

  // Fungsi untuk mengubah status selesai/belum selesai
  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Selesai" ? "Belum Selesai" : "Selesai",
            }
          : task,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Tugas Kuliah</Text>

      {/* Tombol Navigasi ke halaman Tambah Tugas */}
      <CustomButton
        title="+ Tambah Tugas Baru"
        onPress={() => navigation.navigate("AddTask")}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            matkul={item.matkul}
            status={item.status}
            // Kirim ID tugas ke fungsi saat tombol di-klik
            onToggleStatus={() => toggleTaskStatus(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#333" },
});

export default HomeScreen;
