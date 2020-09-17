import Reactotron from "reactotron-react-native";
import { NativeModules } from "react-native";

let scriptHostname;
if (__DEV__) {
	const { scriptURL } = NativeModules.SourceCode;
	// eslint-disable-next-line prefer-destructuring
	scriptHostname = scriptURL.split("://")[1].split(":")[0];
}
Reactotron.configure({ host: scriptHostname }).useReactNative().connect();
