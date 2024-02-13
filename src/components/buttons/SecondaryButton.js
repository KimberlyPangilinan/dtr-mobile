import { Text, View, Pressable } from "react-native";
import React from "react";

export default function SecondaryButton({ title, onPress }) {
  return (
    <Pressable
      className="items-center p-3 my-1 rounded border border-custom-red"
      onPress={onPress}
    >
      <Text className="text-sm text-custom-red">{title}</Text>
    </Pressable>
  );
}
