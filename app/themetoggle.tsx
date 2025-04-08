// src/components/ThemeToggle.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "./theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 20 }}>Theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
