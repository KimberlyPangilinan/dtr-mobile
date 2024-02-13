import {SafeAreaView, TextInput, Text} from 'react-native';
import React, {useState} from 'react'

export default function Input({label, text, onChangeText, placeholder}) {
    return (
      <SafeAreaView className="mt-4">
        <Text className="font-bold text-custom-gray">{label}</Text>
        <TextInput
          className="mt-2 p-2 rounded border-[0.5px] border-custom-gray placeholder:text-custom-gray"
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
        />
      </SafeAreaView>
    );
}