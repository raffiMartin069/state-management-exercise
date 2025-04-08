// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import GlobalCounter from "./globalcounter";
import LocalCounter from "./localcounter";
import { store } from "./store";
import { useTheme, ThemeProvider } from "./theme";
import ThemeToggle from "./themetoggle";

function AppContent() {
  const { theme } = useTheme();
  const backgroundColor = theme === "light" ? "#fff" : "#333";
  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ThemeToggle />
      <LocalCounter />
      <GlobalCounter />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
