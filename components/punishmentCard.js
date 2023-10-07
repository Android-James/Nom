import React from "react";
import { Text, ImageBackground } from "react-native";

import cardStyle from "./punishmentCardStyle";

const PunishmentCard = () => {
  return (
    <ImageBackground
      source={require("../assets/backbg.jpg")}
      style={cardStyle.card}
    >
      <Text style={cardStyle.text}>
        Wow! You are lucky! You don't have to do anything!
      </Text>
    </ImageBackground>
  );
};

export default PunishmentCard;
