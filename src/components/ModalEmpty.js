import React, { useState } from "react";
import { View, Text, ScrollView, Alert, Pressable,Modal } from "react-native";

export default function ModalEmpty() {


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View >
        <View >
          <Text >Hello World!</Text>
          <Pressable
           
            onPress={() => setModalVisible(!modalVisible)}>
            <Text >Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
   
  )
}