// src/components/LocalCounter.tsx
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function LocalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Local count updated:", count);
  }, [count]);

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 20 }}>Local Counter: {count}</Text>
      <Button title="Increment" onPress={() => setCount(c => c + 1)} />
    </View>
  );
}
