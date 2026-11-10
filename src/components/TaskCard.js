import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Tambahkan onToggleStatus di dalam kurung props
const TaskCard = ({ title, matkul, status, onToggleStatus }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Mata Kuliah: {matkul}</Text>

      <View style={styles.statusContainer}>
        <Text
          style={[
            styles.status,
            status === "Selesai" ? styles.done : styles.pending,
          ]}
        >
          Status: {status}
        </Text>

        {/* Tombol kecil untuk mengubah status */}
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            status === "Selesai" ? styles.btnBatal : styles.btnSelesai,
          ]}
          onPress={onToggleStatus}
        >
          <Text style={styles.toggleBtnText}>
            {status === "Selesai" ? "Batal Selesai" : "Tandai Selesai"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#3498db",
    elevation: 4,
    shadowColor: "#b3cbe6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#2c3e50" },
  subtitle: { fontSize: 14, color: "#7f8c8d", marginTop: 6 },

  // Gaya baru untuk menata letak status dan tombol
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  status: { fontWeight: "bold", fontSize: 14 },
  done: { color: "#27ae60" },
  pending: { color: "#e67e22" },

  // Gaya untuk tombol pengubah status
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  btnSelesai: { backgroundColor: "#27ae60" }, // Hijau
  btnBatal: { backgroundColor: "#95a5a6" }, // Abu-abu
  toggleBtnText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
});

export default TaskCard;
