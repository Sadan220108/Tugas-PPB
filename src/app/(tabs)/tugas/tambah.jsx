import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { addTugas } from "../../../data/dummyTugas";

export default function TambahTugas() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [mapel, setMapel] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [kesulitan, setKesulitan] = useState("Mudah");

  const handleSimpan = () => {
    if (!nama || !mapel) return;
    addTugas({
      nama,
      mapel,
      deskripsi,
      tanggalDeadline: tanggal,
      jamDeadline: jam,
      tingkatKesulitan: kesulitan,
    });
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, paddingTop: 55 }}>
      <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
        <Text style={styles.arrowBack}>←</Text>
        <Text style={styles.backTitle}>Tambah Tugas</Text>
      </TouchableOpacity>

      <View style={styles.field}>
        <Text style={styles.label}>Nama Tugas</Text>
        <TextInput style={styles.input} placeholder="Masukkan nama tugas" placeholderTextColor="#8A8378" value={nama} onChangeText={setNama} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Mata Pelajaran</Text>
        <TextInput style={styles.input} placeholder="Masukkan mapel" placeholderTextColor="#8A8378" value={mapel} onChangeText={setMapel} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          style={[styles.input, { height: 70, textAlignVertical: "top" }]}
          placeholder="Deskripsi singkat tugas"
          placeholderTextColor="#8A8378"
          value={deskripsi}
          onChangeText={setDeskripsi}
          multiline
        />
      </View>

      <View style={styles.fieldRow}>
        <View style={[styles.field, { flex: 1 }]}>
          <Text style={styles.label}>Tanggal Deadline</Text>
          <TextInput style={styles.input} placeholder="28 Agustus 2026" placeholderTextColor="#8A8378" value={tanggal} onChangeText={setTanggal} />
        </View>
        <View style={[styles.field, { flex: 1 }]}>
          <Text style={styles.label}>Jam</Text>
          <TextInput style={styles.input} placeholder="20:00" placeholderTextColor="#8A8378" value={jam} onChangeText={setJam} />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Tingkat Kesulitan</Text>
        <View style={styles.levelRow}>
          {["Mudah", "Sedang", "Sulit"].map((lvl) => (
            <TouchableOpacity
              key={lvl}
              style={[styles.levelPill, kesulitan === lvl && styles.levelPillActive]}
              onPress={() => setKesulitan(lvl)}
            >
              <Text style={[styles.levelPillText, kesulitan === lvl && styles.levelPillTextActive]}>{lvl}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSimpan}>
        <Text style={styles.buttonText}>Simpan Tugas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF" },
  backRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20 },
  arrowBack: { fontSize: 18, color: "#1E1B16" },
  backTitle: { fontSize: 15, fontWeight: "800", color: "#1E1B16" },
  field: { marginBottom: 14 },
  fieldRow: { flexDirection: "row", gap: 10 },
  label: { fontSize: 12, fontWeight: "600", color: "#1E1B16", marginBottom: 6 },
  input: {
    borderWidth: 1.5,
    borderColor: "#EDE8E0",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 11,
    fontSize: 13,
    color: "#1E1B16",
  },
  levelRow: { flexDirection: "row", gap: 8, marginTop: 4 },
  levelPill: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#EDE8E0",
  },
  levelPillActive: { backgroundColor: "#FEF3D6", borderColor: "#FEF3D6" },
  levelPillText: { fontSize: 12, fontWeight: "700", color: "#8A8378" },
  levelPillTextActive: { color: "#92620A" },
  button: {
    backgroundColor: "#E8890C",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
});
