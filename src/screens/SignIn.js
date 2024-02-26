import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/forms/Input";
import Button from "../components/buttons/Button";
import Layout from "../components/Layout";
import { useSignInMutation } from "../services/auth/";

export default function SignIn() {
  const [id_number, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [signIn, { isLoading, isError }] = useSignInMutation();
  const navigation = useNavigation();
  
  const handleSubmit = async () => {
  const loginInput = { 
    id_number: id_number, 
    password: password 
  }
    try {
      const response = await signIn(loginInput);
      console.log(response," log in success")
      navigation.navigate("Otp",{ idNumber: id_number })
    } catch (error) {
      Alert.alert("Error", `${error.error}`);
    }
  };

  return (
    <Layout title="Sign In">
      <View style={{ flex: 1 }}>
        <View className="pb-4 border-b-[0.2px] border-slate-300">
          <Text className="text-[16px] font-bold">
             Welcome Back to Intelliseven 
          </Text>
          <Text> Sign in your credentials</Text>
        </View>
        <ScrollView>
          <Input
            type="text"
            label="ID Number"
            onChangeText={setIdNumber}
            value={id_number}
            placeholder={"Enter email address"}
          />
          <Input
            secureTextEntry={true}
            type="password"
            label="Password"
            onChangeText={setPassword}
            value={password}
            placeholder={"Enter password"}
          />
        </ScrollView>
        <View>
          <Button title={isLoading ? "Loading..." : "Sign in"} onPress={handleSubmit} disabled={isLoading}/>
        </View>
        {isError && <Text className="text-red-600">Invalid email or password</Text>}
      </View>
    </Layout>
  );
}
