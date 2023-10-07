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
  touchableOpacity: {
    backgroundColor: "blue", 
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    padding: 10, 
    borderRadius: 50, 
    alignItems: "center", 
    justifyContent: "center", 
    margin: 20, 
  },
});

export default cardStyle;
