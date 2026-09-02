import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Daftar() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleDaftar = () => {
    router.replace("/(tabs)/beranda");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buat Akun Baru</Text>
      <Text style={styles.subtitle}>
        Mulai atur tugas dan deadline dengan lebih rapi.
      </Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap"
          placeholderTextColor="#8A8378"
          value={nama}
          onChangeText={setNama}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan email"
          placeholderTextColor="#8A8378"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Buat kata sandi"
          placeholderTextColor="#8A8378"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Ulangi kata sandi"
          placeholderTextColor="#8A8378"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleDaftar}>
        <Text style={styles.buttonText}>Buat Akun</Text>
      </TouchableOpacity>

      <View style={styles.linkRow}>
        <Text style={styles.linkText}>Sudah punya akun? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.linkBold}>Masuk ke akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1E1B16",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12.5,
    color: "#8A8378",
    marginBottom: 26,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E1B16",
    marginBottom: 6,
  },
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
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  linkRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  linkText: {
    fontSize: 12.5,
    color: "#8A8378",
  },
  linkBold: {
    fontSize: 12.5,
    color: "#C9720A",
    fontWeight: "700",
  },
});
