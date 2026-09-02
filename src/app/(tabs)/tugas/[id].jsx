import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getTugasById, deleteTugas, toggleSelesai } from "../../../data/dummyTugas";

export default function DetailTugas() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const tugas = getTugasById(id);

  if (!tugas) {
    return (
      <View style={styles.container}>
        <Text>Tugas tidak ditemukan.</Text>
      </View>
    );
  }

  const chipStyle = (kesulitan) => {
    if (kesulitan === "Sulit") return { bg: "#FDE8E8", text: "#DC2626" };
    if (kesulitan === "Sedang") return { bg: "#FEF3D6", text: "#92620A" };
    return { bg: "#E3ECFC", text: "#2A4EA8" };
  };
  const chip = chipStyle(tugas.tingkatKesulitan);

  const handleHapus = () => {
    Alert.alert("Hapus Tugas", `Yakin mau hapus "${tugas.nama}"?`, [
      { text: "Batal", style: "cancel" },
      {
        text: "Hapus",
        style: "destructive",
        onPress: () => {
          deleteTugas(id);
          router.back();
        },
      },
    ]);
  };

  const handleToggleSelesai = () => {
    toggleSelesai(id);
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
        <Text style={styles.arrowBack}>←</Text>
        <Text style={styles.backTitle}>Detail Tugas</Text>
      </TouchableOpacity>

      <View style={[styles.chip, { backgroundColor: chip.bg, marginTop: 16 }]}>
        <Text style={[styles.chipText, { color: chip.text }]}>{tugas.mapel}</Text>
      </View>
      <Text style={styles.taskName}>{tugas.nama}</Text>

      <View style={styles.block}>
        <Text style={styles.k}>Deskripsi</Text>
        <Text style={styles.vDesc}>{tugas.deskripsi || "-"}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.k}>Deadline</Text>
        <Text style={styles.v}>
          {tugas.tanggalDeadline} • {tugas.jamDeadline}
        </Text>
        {tugas.status === "selesai" ? (
          <Text style={styles.doneText}>Sudah selesai ✓</Text>
        ) : (
          <Text style={styles.deadlineWarn}>Belum selesai</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleToggleSelesai}>
        <Text style={styles.buttonText}>
          {tugas.status === "selesai" ? "Tandai Belum Selesai" : "Tandai Selesai"}
        </Text>
      </TouchableOpacity>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.btnOutline} onPress={() => router.push(`/(tabs)/tugas/edit/${tugas.id}`)}>
          <Text style={styles.btnOutlineText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnOutline, styles.btnDanger]} onPress={handleHapus}>
          <Text style={[styles.btnOutlineText, { color: "#DC2626" }]}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF", padding: 20, paddingTop: 55 },
  backRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  arrowBack: { fontSize: 18, color: "#1E1B16" },
  backTitle: { fontSize: 15, fontWeight: "800", color: "#1E1B16" },
  chip: { alignSelf: "flex-start", paddingHorizontal: 9, paddingVertical: 3, borderRadius: 20 },
  chipText: { fontSize: 10.5, fontWeight: "700" },
  taskName: { fontSize: 19, fontWeight: "800", color: "#1E1B16", marginTop: 12 },
  block: { marginTop: 18 },
  k: { fontSize: 11.5, color: "#8A8378", fontWeight: "600", marginBottom: 4 },
  v: { fontSize: 14, color: "#1E1B16", fontWeight: "600" },
  vDesc: { fontSize: 13, color: "#4B4638", lineHeight: 20 },
  deadlineWarn: { color: "#DC2626", fontSize: 12, fontWeight: "700", marginTop: 3 },
  doneText: { color: "#1B8A5A", fontSize: 12, fontWeight: "700", marginTop: 3 },
  button: {
    backgroundColor: "#E8890C",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
  actionRow: { flexDirection: "row", gap: 10, marginTop: 10 },
  btnOutline: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#EDE8E0",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnOutlineText: { fontSize: 13, fontWeight: "700", color: "#1E1B16" },
  btnDanger: { borderColor: "#FDE8E8", backgroundColor: "#FDE8E8" },
});
