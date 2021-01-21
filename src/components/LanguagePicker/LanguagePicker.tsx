import React, { useRef } from "react";
import {useGetComponentStringsContext} from "../../hooks/useGetComponentStrings";

interface LanguagePickerProps {
	resetAppLanguage: (data: {components: any}) => void;
}

export const LanguagePicker: React.FC<LanguagePickerProps> = ({resetAppLanguage}) => {
	const strings = useGetComponentStringsContext().LanguagePicker;
	const selectElement = useRef<HTMLSelectElement|null>(null);
	const setLanguage = async () => {
		const language = selectElement.current?.value;
		if(language){
			//you would normally split this out and serve from an API somewhere, this is just an example
			console.log("BEFORE RETRIVE");
			const res = await fetch(`http://localhost:3000/languages/${language}.json`);
			var o = await res.json();
			if(o && o.components){
				console.log("GOOD");
				resetAppLanguage(o);
				return;
			}else{
				console.log("BAD");
			}
		}else{
			console.log("ENG SELECTED (DEFAULT)");
		}
		console.log("RESETTING TO DEFUALT");
		resetAppLanguage({components: {}});
	};
	return (
		<div>
			<select ref={selectElement}>
				<option value="">{strings.englishOption}</option>
				<option value="fr">{strings.frenchOption}</option>
			</select>
			<button onClick={() => setLanguage()}>Apply</button>
		</div>
	);
}