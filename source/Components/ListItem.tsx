import React, { ReactNode } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import CustomText from "./CustomText";
import Fonts from "../Utils/Fonts";

const styles = StyleSheet.create({
	container: {
		alignItems: "stretch",
		flexDirection: "row",
		width: "90%",
	},
	textContainer: {
		justifyContent: "center",
		flex: 1,
	},
});

export type ListItemProps = {
	disabled?: boolean;
	onPress?: () => void;
	left?: ReactNode;
	title: string;
	titleStyle?: object;
	subtitle?: string;
	subtitleStyle?: object;
	right?: ReactNode;
	underline?: boolean;
	style?: object;
};

const ListItem = ({
	disabled,
	onPress,
	left,
	title,
	titleStyle,
	subtitle,
	subtitleStyle,
	right,
	style,
}: ListItemProps) => {
	const { dark } = useTheme();
	return (
		<TouchableOpacity disabled={disabled} onPress={() => onPress()}>
			<View style={[styles.container, style]}>
				<View style={{ justifyContent: "center" }}>{left}</View>
				<View style={styles.textContainer}>
					<CustomText
						semiBold={true}
						text={title}
						size={Fonts.small}
						style={titleStyle}
						color={dark ? "white" : "black"}
					/>
					{subtitle && (
						<CustomText
							text={subtitle}
							size={Fonts.small}
							style={subtitleStyle}
							color={dark ? "white" : "black"}
						/>
					)}
				</View>
				<View style={{ justifyContent: "center" }}>{right}</View>
			</View>
		</TouchableOpacity>
	);
};

ListItem.defaultProps = {
	onPress: () => {},
};

export default ListItem;
