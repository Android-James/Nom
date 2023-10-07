import React, { useState } from "react";
import { Text, ImageBackground } from "react-native";
import FlipCard from "react-native-flip-card";
import styles from "./gameCardStyle";
import jsonData from "../assets/questions.json";
import jsonPunishment from "../assets/punishments.json";

const CardFlip = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomItem = jsonData[randomIndex];
    setRandomQuestion(randomItem);
  };

  const [randomPunishment, setRandomPunishment] = useState(null);

  const getRandomPunishment = () => {
    const randomIndex = Math.floor(Math.random() * jsonPunishment.length);
    const randomItem = jsonPunishment[randomIndex];
    setRandomPunishment(randomItem);
  };

  return (
    <FlipCard
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
      onFlipEnd={(isFlipEnd) => {
        console.log("isFlipEnd", isFlipEnd);
        if (isFlipEnd) {
          getRandomQuestion(); // Call getRandomQuestion when the card flips
        } else {
          getRandomPunishment(); // Call getRandomPunishment when the card flips
        }
      }}
    >
      {/* Face Side */}
      <ImageBackground source={require("../assets/bg.jpg")} style={styles.card}>
        <Text style={styles.text}>
          {randomQuestion ? randomQuestion.game : "Question not found"}
        </Text>
      </ImageBackground>

      {/* Back Side */}
      <ImageBackground
        source={require("../assets/backbg.jpg")}
        style={styles.card}
      >
        <Text style={styles.text}>
          {randomPunishment
            ? randomPunishment.punishment
            : "Punishment not found"}
        </Text>
      </ImageBackground>
    </FlipCard>
  );
};

export default CardFlip;
