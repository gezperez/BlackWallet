import React, { Fragment, useEffect, useState, ReactNode } from "react";
import { View, LayoutAnimation } from "react-native";

type Props = {
	show: boolean;
	style: object;
	children: ReactNode;
};

const SpringView = ({ show, style, children }: Props) => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		if (show) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [show]);

	return (
		<Fragment>{visible && <View style={style}>{children}</View>}</Fragment>
	);
};

export default SpringView;
