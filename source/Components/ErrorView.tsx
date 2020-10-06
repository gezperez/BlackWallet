import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";
import { Colors, Fonts } from "../Utils";
import SpringView from "../AnimatedContainers/SpringView";

const style = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
});

const ErrorView = ({ text }) => {
	return (
		<SpringView show={text} style={style.container}>
			<CustomText
				align="center"
				text={text}
				color={Colors.error}
				size={Fonts.small}
				semiBold={true}
			/>
		</SpringView>
	);
};

export default ErrorView;
