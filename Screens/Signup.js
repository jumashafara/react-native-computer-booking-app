import React from "react";
import { Controller, useForm } from "react-hook-form";

// yup validator
import * as yup from "yup";

// inbuilt components
import { View, Text, TextInput, Button } from "react-native";

import { globalStyles } from "../styles/global";

const Signup = () => {
  // const schema = yup.object()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Welcome, Signup</Text>
      <View>
        <Text style={globalStyles.heading}>Username</Text>
        <Controller
          name="name"
          control={control}
          rules={{
            required: { value: true, message: "username is required" },
            minLength: {
              value: 3,
              message: "Username cannot be less than 3 chars",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={globalStyles.input}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {<Text>{errors?.name?.message}</Text>}
      </View>
      <View>
        <Text style={globalStyles.heading}>Email</Text>
        <Controller
          name="email"
          control={control}
          rules={{ required: { value: true, message: "Email is required" } }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={globalStyles.input}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {<Text>{errors?.email?.message}</Text>}
      </View>
      <View>
        <Text style={globalStyles.heading}>Password</Text>
        <Controller
          name="password"
          control={control}
          rules={{
            required: { value: true, message: "password required" },
            minLength: {
              value: 6,
              message: "Password cannot be less than 6 chars",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={globalStyles.input}
              onChangeText={(value) => onChange(value)}
              value={value}
              errors={errors.password}
              errorText={errors?.password?.message}
            />
          )}
        />
        {<Text>{errors?.password?.message}</Text>}
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Sign me up!" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default Signup;
