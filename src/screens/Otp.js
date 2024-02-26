import React, { useState, useRef } from "react";
import { View, Text, ScrollView, Alert, TextInput } from "react-native";
import Button from "../components/buttons/Button";
import Layout from "../components/Layout";
import { useValidateOtpMutation } from "../services/auth";

export default function OTPVerification({route}) {
  const [validateOtp, { isLoading, isError }] = useValidateOtpMutation();
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const { idNumber } = route.params;
  const handleOtpChange = (index, value) => {
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);
    // Move focus to the next input
    if (value.length === 1 && index < otpDigits.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    // Move focus to the previous input
    else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {

    try {
      const otp = otpDigits.join("");
      const otpInput = {
        id_number: idNumber,
        otp_input: otp
      }
      
      const response = await validateOtp(otpInput);
      console.log("ss")
      Alert.alert("alert")
      console.log(response,otpInput);
    } catch (error) {
    console.log("error")
      Alert.alert("Error", `${error.error}`);
    }
  };

  return (
    <Layout title="OTP Verification">
      <View style={{ flex: 1 }}>
        <View className="pb-4 border-b-[0.2px] border-slate-300">
          <Text className="text-[16px] font-bold">Input OTP</Text>
          <Text>Enter a 4-digit number sent through your email</Text>
        </View>
        <ScrollView>
          <View className="flex-row w-full items-center justify-center">
            {otpDigits.map((digit, index) => (
              <TextInput
                key={index}
                className="mt-2 py-3 px-4 mr-4 rounded border-[0.5px] border-custom-gray"
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>
        </ScrollView>
        <View>
          <Button title={isLoading ? "loading..." : "Submit"} onPress={handleSubmit}  />
        </View>
      </View>
    </Layout>
  );
}
