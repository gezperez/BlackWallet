import React, { ReactNode } from "react";
import { useSafeArea } from "react-native-safe-area-context";
import { View, Text, Platform, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import Logger from "../Logger";

type Props = {
	children: ReactNode;
};

const Container = ({ children }: Props) => {
	const insets = useSafeArea();
	const { colors, dark } = useTheme();
	Logger.log("aca", colors, dark);
	return (
		<View
			style={{
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				height: "100%",
			}}
		>
			<StatusBar
				barStyle={dark ? "light-content" : "dark-content"}
				backgroundColor={colors.background}
			/>
			{children}
		</View>
	);
};
export default Container;