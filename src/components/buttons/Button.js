import { Text, View, Pressable } from "react-native";
import React from "react";

export default function Button({ title, onPress, disabled }) {
  return (
    <Pressable
      className="items-center p-3 my-1 rounded bg-custom-red disabled:animate-pulse"
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-sm text-slate-100">{title}</Text>
    </Pressable>
  );
}
