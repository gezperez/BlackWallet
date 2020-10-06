import "react-native-gesture-handler";
import React from "react";
import { Platform, UIManager } from "react-native";
import { Provider } from "react-redux";
import Navigator from "./source/Navigator/Navigator";
import configureStore from "./source/store/store";

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
	return (
		<Provider store={configureStore}>
			<Navigator />
		</Provider>
	);
};

export default App;
