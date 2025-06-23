import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CicleIcon from "../../../logo.png";

export default function ComponenteTelaHome() {
  return (
    <LinearGradient colors={["#171616", "#000"]} style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Bem-vindo (a)</Text>
        <Image source={CicleIcon} style={styles.logo} />

        {/* Campo de preenchermos o e-mail */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        {/* Campo de preenchermos a senha */}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
    </LinearGradient>
  );
}
