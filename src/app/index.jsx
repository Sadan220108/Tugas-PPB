import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Pembukaan() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoBadge}>
        <Text style={styles.logoEmoji}>📋</Text>
      </View>

      <Text style={styles.title}>TugasKu</Text>
      <Text style={styles.subtitle}>
        Catat tugas. Atur deadline.{"\n"}Selesaikan tepat waktu.
      </Text>
      <Text style={styles.desc}>Semua tugas sekolahmu dalam satu tempat.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/login")}
      >
        <Text style={styles.buttonText}>Mulai Sekarang</Text>
      </TouchableOpacity>

      <Text style={styles.footNote}>SEDERHANA • TERATUR • PRODUKTIF</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8890C",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  logoBadge: {
    width: 74,
    height: 74,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  logoEmoji: { fontSize: 32 },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    lineHeight: 20,
    opacity: 0.92,
  },
  desc: {
    fontSize: 12.5,
    color: "#fff",
    textAlign: "center",
    marginTop: 28,
    opacity: 0.85,
    maxWidth: 260,
    lineHeight: 18,
  },
  button: {
    marginTop: 32,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  buttonText: {
    color: "#C9720A",
    fontWeight: "700",
    fontSize: 14,
  },
  footNote: {
    marginTop: 16,
    fontSize: 11,
    color: "#fff",
    opacity: 0.8,
    letterSpacing: 0.5,
  },
});
