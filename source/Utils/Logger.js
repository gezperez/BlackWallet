import Reactotron from "reactotron-react-native";
import { isString } from "lodash";

export default class Logger {
	static log(message = "Log", ...args) {
		if (!isString(message)) {
			throw new Error("Message has to be a string");
		}
		if (__DEV__) {
			Reactotron.display({
				name: "LOG",
				preview: message,
				value: { message, args },
				important: true,
			});
		}
	}
}
