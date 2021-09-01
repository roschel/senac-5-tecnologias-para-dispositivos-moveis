import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Image,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function onPressEntrar() {
    if (senha == "senac") {
      alert("Bem-vindo");
    } else {
      alert("Dados incorretos! Tente novamente");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/senac.png")} />

        <Text style={styles.paragraph}>Bem-vindo ao Senac</Text>

        <Text style={styles.label}>Nome de usuário</Text>

        <TextInput
          onChangeText={setNome}
          value={nome}
          style={styles.input}
          placeholder="Digite seu nome"
        ></TextInput>

        <Text style={styles.label}>Senha</Text>

        <TextInput
          onChangeText={setSenha}
          value={senha}
          style={styles.input}
          secureTextEntry
          placeholder="Digite sua senha"
        ></TextInput>

        <View style={styles.botao}>
          <Button
            onPress={onPressEntrar}
            title="Entrar"
            // color="#841584"
            accessibilityLabel="pressione aqui para entrar"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  botao: {
    margin: 30,
  },
  logo: {
    width: 250,
    height: 60,
    resizeMode: "center",
    alignSelf: "center",
  },
});
