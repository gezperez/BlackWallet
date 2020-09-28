import React from "react";
import { noop } from "lodash";
import { ListItem, Switch } from ".";

type Props = {
	title: string;
	active: boolean;
	onToogle: () => void;
	style?: object;
};

const SwitchItem = ({ title, active, onToogle, style }: Props) => (
	<ListItem
		disabled={true}
		title={title}
		right={<Switch active={active} onToogle={() => onToogle()} />}
		style={style}
	/>
);

SwitchItem.defaultProps = {
	active: false,
	icon: undefined,
	onToogle: noop,
};

export default SwitchItem;
