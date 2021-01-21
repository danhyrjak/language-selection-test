import React from "react";
import { useGetComponentStringsContext } from "../../hooks/useGetComponentStrings";

interface ComponentAProps{
	propOne: string;
	propTwo: number;
}

export const ComponentA: React.FC<ComponentAProps> = ({propOne, propTwo}) => {
	const strings = useGetComponentStringsContext().ComponentA;
	const sharedStrings = useGetComponentStringsContext().Shared;
	const showAlert = (text: string) => {
		window.alert(`you choose: ${text}`);
	}

	return (
		<div>
			<h1>{sharedStrings.appName}</h1>
			<h2>{strings.title}</h2> <br/>
			<p>
				this is the value of propOne: {propOne}
			</p>
			<p>
				this is the number for propTwo: {propTwo}
			</p>
			<button onClick={() => showAlert("1")}>{strings.confirmButton}</button> <br/>
			<button onClick={() => showAlert("2")}>{strings.cancelButton}</button>
		</div>
	)
}