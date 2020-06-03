import React, { useEffect, useState } from "react";
import { SplashScreen } from "expo";

import Register from "./Components/Register";
import { View, TouchableWithoutFeedback } from "react-native";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [isRegistered, setRegistered] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHide();
    setTimeout(() => {
      SplashScreen.hide();
      setLoaded(true);
    }, 3000);
  });

  const splashSreenHandler = () => {
    SplashScreen.hide();
    setLoaded(true);
  };

  console.log(isRegistered);

  return (
    <TouchableWithoutFeedback
      touchSoundDisabled={true}
      onPress={() => splashSreenHandler()}
    >
      <View>
        {loaded ? (
          <Register />
        ) : (
          <View style={{ width: "100%", height: "100%" }}></View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
