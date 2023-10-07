import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
  card: {
    width: 350,
    height: 700,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    padding: 20,
    marginTop: "auto",
    marginBottom: "auto",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default cardStyle;
