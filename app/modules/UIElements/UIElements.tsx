import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Button, Text, Card, Image } from "react-native-elements";
import useImagePicker from "../../hooks/useImagePicker";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Routes, webScreenStrings } from "../../constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Colors } from "../../theme";

const UIElements = () => {
  const { image, pickImage } = useImagePicker();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: webScreenStrings.expoWeb,
          style: styles.headerTitle,
        }}
        backgroundColor={Colors.primary}
      />
      <Card>
        <Card.Title>{webScreenStrings.welcomeToMyApp}</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>{webScreenStrings.GetStarted}</Text>
        <Button
          title={webScreenStrings.GetStarted}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate(Routes.login)}
        />
        <Button title={webScreenStrings.PickAnImage} onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={styles.selectedImageStyle} />
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },
  cardText: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#3D6DCC",
    marginBottom: 15,
  },
  selectedImageStyle: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default UIElements;
