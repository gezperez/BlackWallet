import React, { useState, useEffect } from "react";
import { LayoutAnimation, Platform, StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import { Colors, Fonts } from "../Utils";

const style = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
});

const ErrorView = ({ text }) => {
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		if (text) {
			setExpanded(true);
		} else {
			setExpanded(false);
		}
	}, [text]);

	return (
		<>
			{expanded && (
				<View style={style.container}>
					<CustomText
						align="center"
						text={text}
						color={Colors.error}
						size={Fonts.small}
						semiBold={true}
					/>
				</View>
			)}
		</>
	);
};

export default ErrorView;
