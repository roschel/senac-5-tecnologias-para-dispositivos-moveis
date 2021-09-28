import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

// {
//     "message": "https://images.dog.ceo/breeds/setter-gordon/n02101006_266.jpg",
//     "status": "success"
// }

export default function App() {
  const [message, setMessage] = useState("");

  function getNewImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        response.json().then((result) => {
          console.log(result);
          setMessage(result.message);
        });
      })
      .catch((error) => {
        console.error("Achei um erro", error);
      });
  }

  useEffect(() => {
    getNewImage();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: message,
        }}
      />
      <Pressable onPress={getNewImage}>
        <Text>Mudar imagem</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});
