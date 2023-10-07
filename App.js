import React from "react";
import { SafeAreaView } from "react-native";

import style from "./App.style";

import CardFlip from "./components/flipcard";

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <CardFlip></CardFlip>
    </SafeAreaView>
  );
};

export default App;
