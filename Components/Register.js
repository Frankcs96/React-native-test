import React, { useState } from "react";
import logo from "../assets/icon.png";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { StyleSheet, View, Image, TextInput, Button, Text } from "react-native";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [tax, setTax] = useState("");
  const [validate, setValidate] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    user = {
      email: email,
      password: password,
      name: name,
      surname: surname,
      phone: phone,
      tax: tax,
    };

    if (
      (user.email &&
        user.password &&
        user.name &&
        user.surname &&
        user.phone &&
        user.tax) != ""
    ) {
      setValidate(true);
      setError("");
    } else {
      setError("All fields are required");
    }
  };

  if (validate) {
    return (
      <View style={registerStyle.container}>
        <View style={registerStyle.header}>
          <Image source={logo} style={{ width: 150, height: 150 }}></Image>
        </View>
        <Text
          style={{
            fontSize: 35,
            marginTop: "30%",
            color: "green",
          }}
        >
          REGISTRATION OK!
        </Text>
      </View>
    );
  } else {
    return (
      <View style={registerStyle.container}>
        <View style={registerStyle.header}>
          <Image source={logo} style={{ width: 150, height: 150 }}></Image>
        </View>

        <TextInput
          name="email"
          placeholder="Email"
          style={registerStyle.input}
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            width: "95%",
            borderColor: "gray",
            borderWidth: 2,
            borderRadius: 5,
            marginBottom: 10,

            marginTop: 20,
            padding: 8,
          }}
        >
          <TextInput
            secureTextEntry={showPassword}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            style={{ flex: 1, fontSize: 18 }}
          ></TextInput>
          <Icon
            name="eye"
            size={30}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        <TextInput
          placeholder="Name"
          style={registerStyle.input}
          onChangeText={(name) => setName(name)}
        ></TextInput>

        <TextInput
          placeholder="Surname"
          style={registerStyle.input}
          onChangeText={(surname) => setSurname(surname)}
        ></TextInput>

        <TextInput
          placeholder="Phone"
          style={registerStyle.input}
          onChangeText={(phone) => setPhone(phone)}
        ></TextInput>

        <TextInput
          placeholder="Tax Number"
          style={registerStyle.input}
          onChangeText={(tax) => setTax(tax)}
        ></TextInput>
        {setError != "" ? (
          <Text style={{ color: "red", fontSize: 24 }}>{error}</Text>
        ) : null}
        <Button title="REGISTER" onPress={validateForm}></Button>
      </View>
    );
  }
}

const registerStyle = StyleSheet.create({
  header: {
    marginTop: "7%",
    backgroundColor: "#FFC107",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
  },

  input: {
    height: 40,
    width: "95%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    marginTop: 20,
    padding: 8,
  },

  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
});
