import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import { dummyTugas } from "../../../data/dummyTugas";

export default function DaftarTugas() {
  const router = useRouter();
  const [tab, setTab] = useState("semua");
  const [search, setSearch] = useState("");
  const [, refresh] = useState({});

  useFocusEffect(
    useCallback(() => {
      refresh({});
    }, [])
  );

  const filtered = dummyTugas.filter((t) => {
    const matchTab =
      tab === "semua" ? true : tab === "belum" ? t.status === "belum" : t.status === "selesai";
    const matchSearch = t.nama.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const chipStyle = (kesulitan) => {
    if (kesulitan === "Sulit") return { bg: "#FDE8E8", text: "#DC2626" };
    if (kesulitan === "Sedang") return { bg: "#FEF3D6", text: "#92620A" };
    return { bg: "#E3ECFC", text: "#2A4EA8" };
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>Daftar Tugas</Text>
        <TouchableOpacity style={styles.fabAdd} onPress={() => router.push("/(tabs)/tugas/tambah")}>
          <Text style={styles.fabAddText}>+ Tambah</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Cari tugas..."
          placeholderTextColor="#8A8378"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.tabs}>
        {[
          { key: "semua", label: "Semua" },
          { key: "belum", label: "Belum Selesai" },
          { key: "selesai", label: "Selesai" },
        ].map((t) => (
          <TouchableOpacity
            key={t.key}
            style={[styles.tab, tab === t.key && styles.tabActive]}
            onPress={() => setTab(t.key)}
          >
            <Text style={[styles.tabText, tab === t.key && styles.tabTextActive]}>{t.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {filtered.length === 0 && (
          <Text style={styles.emptyText}>Belum ada tugas di kategori ini.</Text>
        )}
        {filtered.map((tugas) => {
          const chip = chipStyle(tugas.tingkatKesulitan);
          return (
            <TouchableOpacity
              key={tugas.id}
              style={styles.taskCard}
              onPress={() => router.push(`/(tabs)/tugas/${tugas.id}`)}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={[styles.chip, { backgroundColor: chip.bg }]}>
                  <Text style={[styles.chipText, { color: chip.text }]}>{tugas.mapel}</Text>
                </View>
                {tugas.status === "selesai" && (
                  <View style={[styles.chip, { backgroundColor: "#E3F6EC" }]}>
                    <Text style={[styles.chipText, { color: "#1B8A5A" }]}>Selesai</Text>
                  </View>
                )}
              </View>
              <Text style={styles.taskName}>{tugas.nama}</Text>
              <Text style={styles.taskDue}>
                Deadline {tugas.tanggalDeadline} • {tugas.jamDeadline}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF", paddingHorizontal: 20 },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 55,
    marginBottom: 16,
  },
  headerTitle: { fontSize: 20, fontWeight: "800", color: "#1E1B16" },
  fabAdd: {
    backgroundColor: "#E8890C",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  fabAddText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  searchBox: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#EDE8E0",
    borderRadius: 10,
    paddingHorizontal: 13,
    marginBottom: 14,
  },
  searchInput: { fontSize: 13, color: "#1E1B16", paddingVertical: 10 },
  tabs: { flexDirection: "row", gap: 8, marginBottom: 16 },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EDE8E0",
  },
  tabActive: { backgroundColor: "#E8890C", borderColor: "#E8890C" },
  tabText: { fontSize: 12, fontWeight: "600", color: "#8A8378" },
  tabTextActive: { color: "#fff" },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EDE8E0",
  },
  chip: { alignSelf: "flex-start", paddingHorizontal: 9, paddingVertical: 3, borderRadius: 20, marginBottom: 6 },
  chipText: { fontSize: 10.5, fontWeight: "700" },
  taskName: { fontSize: 13.5, fontWeight: "700", color: "#1E1B16" },
  taskDue: { fontSize: 11.5, color: "#8A8378", marginTop: 2 },
  emptyText: { textAlign: "center", color: "#8A8378", fontSize: 13, marginTop: 40 },
});
