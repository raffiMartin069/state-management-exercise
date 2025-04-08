// src/components/GlobalCounter.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slice";
import { RootState } from "./store";

export default function GlobalCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 20 }}>Global Counter: {count}</Text>
      <Button title="Increment Global" onPress={() => dispatch(increment())} />
    </View>
  );
}
