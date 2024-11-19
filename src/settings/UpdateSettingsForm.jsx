import styled from "styled-components";
import Heading from "../ui/Heading";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import { useState } from "react";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";
import Spinner from "../ui/Spinner";
// import { useSettings } from "./useSettings";
// import { useUpdateSetting } from "./useUpdateSetting";

const SettingContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px;
	/* border: 1px solid var(--color-grey-300); */
	border-radius: 8px;
	background-color: var(--color-grey-50);
`;

const Setting = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-grey-300);
	padding: 10px 0;
`;

const H1 = styled.h1`
	font-size: 1.6rem;
	line-height: 1.5;
`;

const H1Detail = styled.p`
	font-size: 1rem;
	color: var(--color-grey-400);
`;

const Select = styled.select`
	padding: 8px 10px;
	background-color: var(--color-grey-100);
	border: none;
	font-size: 1.2rem;
	border-radius: 10px;
`;

const Option = styled.option`
	background-color: var(--color-grey-100);
	border-radius: 10px;
`;

const Switch = styled.label`
	font-size: 17px;
	position: relative;
	display: inline-block;
	width: 3em;
	height: 1.5em;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(182, 182, 182);
		transition: 0.4s;
		border-radius: 10px;

		&:before {
			position: absolute;
			content: "";
			height: 1.3em;
			width: 1.3em;
			border-radius: 8px;
			left: 0.1em;
			bottom: 0.1em;
			transform: rotate(270deg);
			background-color: rgb(255, 255, 255);
			transition: 0.4s;
		}
	}

	input:checked + .slider {
		background-color: #21cc4c;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		transform: translateX(1.5em);
	}
`;

function UpdateSettingsForm() {
	const { isLoading, settings: { email_notification } = {} } = useSettings();
	const { isUpdating, updateSetting } = useUpdateSetting();

	if (isLoading) return <Spinner />;

	function handleUpdate(e, field) {
		const { value } = e.target;

		if (value === "true") updateSetting({ [field]: value });
		console.log(value);
	}

	return (
		<SettingContainer>
			<Setting>
				<div>
					<H1>Appearance</H1>
					<H1Detail>Customize how your theme looks on your device</H1Detail>
				</div>
				<Select name="" id="">
					<Option value="Light">Light</Option>
					<Option value="Dark">Dark</Option>
				</Select>
			</Setting>

			<Setting>
				<div>
					<H1>Language</H1>
					<H1Detail>Select your language</H1Detail>
				</div>
				<Select name="" id="">
					<Option value="English">English</Option>
					<Option value="Chinese">Chinese</Option>
				</Select>
			</Setting>

			<Setting>
				<div>
					<H1>Email Notifications</H1>
					<H1Detail>Receive email notification</H1Detail>
				</div>
				<Switch
					onBlur={(e) => handleUpdate(e, "email_notification")}
					defaultValue={email_notification}
					disabled={isUpdating}
				>
					<input type="checkbox" />
					<span className="slider"></span>
				</Switch>
			</Setting>
		</SettingContainer>
	);
}

export default UpdateSettingsForm;
