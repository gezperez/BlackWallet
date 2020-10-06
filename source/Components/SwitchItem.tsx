import React from "react";
import { noop } from "lodash";
import { ListItem, Switch } from ".";
import FadeInSlideUpView from "../AnimatedContainers/FadeInSlideUpView";

type Props = {
	title: string;
	active: boolean;
	onToogle: () => void;
	style?: object;
};

const SwitchItem = ({ title, active, onToogle, style }: Props) => (
	<FadeInSlideUpView>
		<ListItem
			disabled={true}
			title={title}
			right={<Switch active={active} onToogle={() => onToogle()} />}
			style={style}
		/>
	</FadeInSlideUpView>
);

SwitchItem.defaultProps = {
	active: false,
	icon: undefined,
	onToogle: noop,
};

export default SwitchItem;
