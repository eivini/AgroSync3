import { ThemeProvider } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import TabLayout from "./_layout";
import { Redirect } from "expo-router";
import { Routes } from "../../routes";

export default function App() {

  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Redirect href={'/menu'} />
      <Routes />
      <TabLayout />
    </View>
  );
}