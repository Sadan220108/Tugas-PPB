import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Profil() {
  const router = useRouter();

  const settings = [
    { title: "Notifikasi Deadline", sub: "Pengingat aktif" },
    { title: "Tema Aplikasi", sub: "Terang" },
    { title: "Mata Pelajaran", sub: "Kelola daftar" },
    { title: "Tentang TugasKu", sub: "Versi 1.0" },
  ];

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profil & Pengaturan</Text>

      <View style={styles.profileHead}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>D</Text>
        </View>
        <View>
          <Text style={styles.pn}>Dani</Text>
          <Text style={styles.ps}>Pelajar • XII RPL</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Pengaturan</Text>
      {settings.map((item) => (
        <TouchableOpacity key={item.title} style={styles.settingsItem}>
          <View>
            <Text style={styles.settingsTitle}>{item.title}</Text>
            <Text style={styles.settingsSub}>{item.sub}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EFEFEF", padding: 20, paddingTop: 55 },
  headerTitle: { fontSize: 20, fontWeight: "800", color: "#1E1B16" },
  profileHead: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 20, marginBottom: 24 },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E8890C",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#fff", fontWeight: "800", fontSize: 18 },
  pn: { fontSize: 15, fontWeight: "800", color: "#1E1B16" },
  ps: { fontSize: 12, color: "#8A8378" },
  sectionLabel: { fontSize: 13, fontWeight: "700", color: "#1E1B16", marginBottom: 10 },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#EDE8E0",
  },
  settingsTitle: { fontSize: 13, fontWeight: "600", color: "#1E1B16" },
  settingsSub: { fontSize: 11, color: "#8A8378", marginTop: 2 },
  arrow: { color: "#8A8378", fontSize: 16 },
  logoutBtn: {
    backgroundColor: "#FDE8E8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  logoutText: { color: "#DC2626", fontWeight: "700", fontSize: 13.5 },
});
