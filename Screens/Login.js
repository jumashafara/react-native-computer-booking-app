import React from "react";
import { Controller, useForm } from "react-hook-form";

// yup validator
import * as yup from "yup";

// inbuilt components
import { View, Text, TextInput, Button } from "react-native";

import { globalStyles } from "../styles/global";

const Login = () => {
  // const schema = yup.object()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Welcome back, Login</Text>
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
      <View style={{ marginTop: 5 }}>
        <Button title="Log me in" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default Login;
