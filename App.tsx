import "react-native-gesture-handler";
import React from "react";

import { Platform, UIManager } from "react-native";
import Navigator from "./source/Navigator/Navigator";

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
	return <Navigator />;
};

export default App;
