import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import { dummyTugas } from "../../data/dummyTugas";

export default function Beranda() {
  const router = useRouter();
  const [, refresh] = useState({});

  useFocusEffect(
    useCallback(() => {
      refresh({});
    }, [])
  );

  const belumSelesai = dummyTugas.filter((t) => t.status === "belum").length;
  const selesai = dummyTugas.filter((t) => t.status === "selesai").length;
  const terlambat = dummyTugas.filter((t) => t.status === "terlambat").length;

  const deadlineTerdekat = dummyTugas.slice(0, 3);

  const chipStyle = (kesulitan) => {
    if (kesulitan === "Sulit") return { bg: "#FDE8E8", text: "#DC2626" };
    if (kesulitan === "Sedang") return { bg: "#FEF3D6", text: "#92620A" };
    return { bg: "#E3ECFC", text: "#2A4EA8" };
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, paddingTop: 55, paddingBottom: 40 }}>
      <Text style={styles.greet}>Halo, Dani! 👋</Text>
      <Text style={styles.greetSub}>Siap menyelesaikan tugasmu hari ini?</Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Tugas hari ini</Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={styles.heroNum}>{belumSelesai}</Text>
          <Text style={styles.heroNumLabel}>tugas belum selesai</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "62%" }]} />
        </View>
      </View>

      <Text style={styles.sectionLabel}>Ringkasan</Text>
      <View style={styles.statRow}>
        <View style={styles.statBox}>
          <Text style={[styles.statNum, { color: "#DC2626" }]}>{belumSelesai}</Text>
          <Text style={styles.statLabel}>Belum selesai</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNum, { color: "#1B8A5A" }]}>{selesai}</Text>
          <Text style={styles.statLabel}>Selesai</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={[styles.statNum, { color: "#92620A" }]}>{terlambat}</Text>
          <Text style={styles.statLabel}>Terlambat</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Deadline Terdekat</Text>
      {deadlineTerdekat.map((tugas) => {
        const chip = chipStyle(tugas.tingkatKesulitan);
        return (
          <TouchableOpacity
            key={tugas.id}
            style={styles.taskCard}
            onPress={() => router.push(`/(tabs)/tugas/${tugas.id}`)}
          >
            <View style={[styles.chip, { backgroundColor: chip.bg }]}>
              <Text style={[styles.chipText, { color: chip.text }]}>{tugas.mapel}</Text>
            </View>
            <Text style={styles.taskName}>{tugas.nama}</Text>
            <Text style={styles.taskDue}>
              {tugas.tanggalDeadline} • {tugas.jamDeadline}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  greet: {
    fontSize: 19,
    fontWeight: "800",
    color: "#1E1B16",
  },
  greetSub: {
    fontSize: 12,
    color: "#8A8378",
    marginTop: 2,
    marginBottom: 18,
  },
  heroCard: {
    backgroundColor: "#E8890C",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
  },
  heroLabel: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.9,
    marginBottom: 6,
  },
  heroNum: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
  heroNumLabel: {
    fontSize: 12.5,
    color: "#fff",
    opacity: 0.9,
    marginLeft: 6,
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.35)",
    borderRadius: 6,
    marginTop: 12,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B16",
    marginBottom: 10,
    marginTop: 4,
  },
  statRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 6,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EDE8E0",
  },
  statNum: {
    fontSize: 18,
    fontWeight: "800",
  },
  statLabel: {
    fontSize: 10.5,
    color: "#8A8378",
    marginTop: 2,
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EDE8E0",
  },
  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 6,
  },
  chipText: {
    fontSize: 10.5,
    fontWeight: "700",
  },
  taskName: {
    fontSize: 13.5,
    fontWeight: "700",
    color: "#1E1B16",
  },
  taskDue: {
    fontSize: 11.5,
    color: "#8A8378",
    marginTop: 2,
  },
});
