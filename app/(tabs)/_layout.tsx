import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return <Tabs screenOptions={{
    tabBarActiveTintColor: "violet",
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: "black",
      borderColor: "transparent",
    }
  }}>

    <Tabs.Screen name="index" options={{
      headerShown: false,
      title: "Home", 
      tabBarIcon: ({color}) => (
        <Ionicons name="list-circle-outline" size={30} color={color} />
      )
      }} />

       <Tabs.Screen name="settings" options={{
      headerShown: false,
      title: "Home", 
      tabBarIcon: ({color}) => (
        <Ionicons name="settings-outline" size={25} color={color} />
      )
      }} />
  </Tabs>;
}
