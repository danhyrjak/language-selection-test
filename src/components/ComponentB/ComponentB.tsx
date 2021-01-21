import React, { useRef } from "react";
import { useGetComponentStringsContext } from "../../hooks/useGetComponentStrings";

export const ComponentB: React.FC = () => {
	const strings = useGetComponentStringsContext().ComponentB;
	const title = useGetComponentStringsContext().Shared.appName;
	const inputEl = useRef<HTMLInputElement|null>(null);
	return (
	<div>
		<h1>{title}</h1>
		<h2>{strings.title}</h2> <br/>
		<label>{strings.nameLabel}<input ref={inputEl} type="text" placeholder={strings.namePlaceholder} /></label> <br/>
		<button onClick={() => window.alert(`${strings.alertPrefix}: ${inputEl.current?.value}`)}>{strings.buttonLabel}</button>
		<br/><br/><br/>
	</div>); 	
}