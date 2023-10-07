import React, { useState } from "react";
import { Text, ImageBackground, TouchableOpacity } from "react-native";
import cardStyle from "./gameCardStyle";

import jsonData from "../assets/questions.json";

const GameCard = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomItem = jsonData[randomIndex];
    setRandomQuestion(randomItem);
  };

  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={cardStyle.card}
    >
      <Text style={cardStyle.text}>
        {randomQuestion ? randomQuestion.question : "Question not found"}
      </Text>
    </ImageBackground>
  );
};

export default GameCard;
