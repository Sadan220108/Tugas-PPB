import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#C9720A",
        tabBarInactiveTintColor: "#8A8378",
        tabBarStyle: {
          height: 64,
          paddingBottom: 10,
          paddingTop: 8,
          borderTopColor: "#EDE8E0",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="beranda"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="tugas"
        options={{
          title: "Tugas",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>📝</Text>,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 18, color }}>👤</Text>,
        }}
      />
    </Tabs>
  );
}
