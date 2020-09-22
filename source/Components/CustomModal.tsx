import React, { ReactNode } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
	border: {
		height: height * 0.5,
		borderRadius: 16,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		width: "100%",
	},
});

type Props = {
	visible: boolean;
	scrollable?: boolean;
	children: ReactNode;
	handleCancel: () => void;
};

const CustomModal = ({
	visible,
	children,
	scrollable,
	handleCancel,
}: Props) => {
	const { colors } = useTheme();

	const container = scrollable
		? {
				Component: ScrollView,
				props: {
					style: { flex: 1 },
					contentContainerStyle: {
						justifyContent: "center",
						flexGrow: 1,
					},
				},
		  }
		: {
				Component: View,
				props: {
					style: { flex: 1, justifyContent: "center" },
				},
		  };

	return (
		<Modal
			hideModalContentWhileAnimating={true}
			isVisible={visible}
			onBackButtonPress={() => handleCancel()}
			onBackdropPress={() => handleCancel()}
			backdropColor="black"
			backdropOpacity={0.7}
			animationIn="zoomInDown"
			animationOut="zoomOutUp"
			animationInTiming={600}
			animationOutTiming={600}
			backdropTransitionInTiming={600}
			backdropTransitionOutTiming={0}
			useNativeDriver={true}
		>
			<container.Component>
				<View
					style={[
						styles.border,
						{ backgroundColor: colors.background, borderColor: colors.border },
					]}
				>
					{children}
				</View>
			</container.Component>
		</Modal>
	);
};

CustomModal.defaultProps = {
	scrollable: false,
};

export default CustomModal;
