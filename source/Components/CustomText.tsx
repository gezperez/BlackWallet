import React, { ReactNode } from "react";
import { Text } from "react-native";
import { replace } from "lodash";

type Props = {
	children?: ReactNode;
	hidden?: boolean;
	style?: object;
	font?: string;
	text: string;
	size?: number;
	color?: string;
	bold?: boolean;
	medium?: boolean;
	semiBold?: boolean;
	onPress?: () => void;
	align?: string;
	lines?: number;
	backgroundColor?: string;
};

const fonts = {
	bold: "Montserrat-Bold",
	medium: "Montserrat-Medium",
	regular: "Montserrat-Regular",
	semiBold: "Montserrat-SemiBold",
};

const hideText = (text) => replace(replace(text, /\w/g, "●"), /([$.,])/g, " ");

const getFont = (font, bold, medium, semiBold) =>
	bold
		? fonts.bold
		: medium
		? fonts.medium
		: semiBold
		? fonts.semiBold
		: fonts[font];

const CustomText = ({
	children,
	hidden,
	style,
	font,
	text,
	size: fontSize,
	color,
	bold,
	medium,
	semiBold,
	onPress,
	align: textAlign,
	lines,
	backgroundColor,
}: Props) => (
	<Text
		onPress={onPress}
		numberOfLines={lines}
		style={[
			{
				fontFamily: getFont(font, bold, medium, semiBold),
				fontSize,
				color,
				textAlign,
				backgroundColor,
			},
			style,
		]}
	>
		{hidden ? hideText(text || children) : text || children}
	</Text>
);

CustomText.defaultProps = {
	hidden: false,
	style: {},
	font: "regular",
	color: "black",
	bold: false,
	medium: false,
	semiBold: false,
	align: "left",
	onPress: undefined,
	lines: undefined,
	textAlign: "center",
	backgroundColor: undefined,
};

export { fonts, hideText };

export default CustomText;
