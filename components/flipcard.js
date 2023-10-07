import { React } from "react";
import FlipCard from "react-native-flip-card";
import styles from "./gameCardStyle";

import GameCard from "./gameCard";
import PunishmentCard from "./punishmentCard";

const CardFlip = () => {
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
      }}
    >
      {/* Face Side */}
      <GameCard></GameCard>
      {/* Back Side */}
      <PunishmentCard></PunishmentCard>
    </FlipCard>
  );
};

export default CardFlip;
