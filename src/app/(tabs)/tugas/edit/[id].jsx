import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { getTugasById, updateTugas } from "../../../../data/dummyTugas";

export default function EditTugas() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const tugas = getTugasById(id);

  const [nama, setNama] = useState(tugas?.nama || "");
  const [mapel, setMapel] = useState(tugas?.mapel || "");
  const [deskripsi, setDeskripsi] = useState(tugas?.deskripsi || "");
  const [tanggal, setTanggal] = useState(tugas?.tanggalDeadline || "");
  const [jam, setJam] = useState(tugas?.jamDeadline || "");

  if (!tugas) {
    return (
      <View style={styles.container}>
        <Text>Tugas tidak ditemukan.</Text>
      </View>
    );
  }

  const handleSimpan = () => {
    updateTugas(id, {
      nama,
      mapel,
      deskripsi,
      tanggalDeadline: tanggal,
      jamDeadline: jam,
    });
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, paddingTop: 55 }}>
      <TouchableOpacity style={styles.backRow} onPress={() => router.back()}>
        <Text style={styles.arrowBack}>←</Text>
        <Text style={styles.backTitle}>Edit Tugas</Text>
      </TouchableOpacity>
      <Text style={styles.headerSub}>Perbarui informasi tugasmu</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nama Tugas</Text>
        <TextInput style={styles.input} value={nama} onChangeText={setNama} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Mata Pelajaran</Text>
        <TextInput style={styles.input} value={mapel} onChangeText={setMapel} />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Deskripsi</Text>
        <TextInput
          style={[styles.input, { height: 70, textAlignVertical: "top" }]}
          value={deskripsi}
          onChangeText={setDeskripsi}
          multiline
        />
      </View>

      <View style={styles.fieldRow}>
        <View style={[styles.field, { flex: 1 }]}>
          <Text style={styles.label}>Tanggal Deadline</Text>
          <TextInput style={styles.input} value={tanggal} onChangeText={setTanggal} />
        </View>
        <View style={[styles.field, { flex: 1 }]}>
          <Text style={styles.label}>Jam Deadline</Text>
          <TextInput style={styles.input} value={jam} onChangeText={setJam} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSimpan}>
        <Text style={styles.buttonText}>Simpan Perubahan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF" },
  backRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  arrowBack: { fontSize: 18, color: "#1E1B16" },
  backTitle: { fontSize: 15, fontWeight: "800", color: "#1E1B16" },
  headerSub: { fontSize: 12.5, color: "#8A8378", marginTop: 4, marginBottom: 20 },
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
  button: {
    backgroundColor: "#E8890C",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14 },
});
