import { Stack } from "expo-router";

export default function TugasLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="tambah" />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="edit/[id]" />
    </Stack>
  );
}
