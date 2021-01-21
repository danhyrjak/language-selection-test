import React, { useContext } from "react";
import { stringsKey as componentAStringsKey, englishStrings as componentAEnglishStrings } from "../components/ComponentA/ComponentA.Strings";
import { stringsKey as componentBStringsKey, englishStrings as componentBEnglishStrings } from "../components/ComponentB/ComponentB.Strings";
import { stringsKey as languagePickerStringsKey, englishStrings as languagePickerEnglishStrings } from "../components/LanguagePicker/LanguagePicker.Strings";

const generateValues = <T extends {[key: string]: any}>(componentsObject: any, componentKey: string, defaultValues: T): T => {
	const coKeys = Object.keys(componentsObject);
	const coKey = coKeys.find(e => e === componentKey);
	const componentStringsFromObject = coKey === undefined ? {} : componentsObject[coKey];
	
	const res = {...defaultValues};
	const keys = Object.keys(res);
	keys.forEach((key) => {
		(res[key] as any) = componentStringsFromObject[key] || res[key];
	});
	return res;
}

// This function needs to return an object where the keys are the component/section identifiers (string)
// and the values are a [key: string]: string of strings that need to be displayed in the application.
// Using imports to import the keyname and default (english) string values to use,
// as make sense to keeps these close to the components that need them. 
// The sample below, also extends this with a "Shared" section, for common string used application wide.
export const generateComponentStringsContext = (data: {components: any}) => {
	const componentsObject = typeof(data.components) === "object" ? data.components : {};
	return {
		[componentAStringsKey]: generateValues(componentsObject, componentAStringsKey, componentAEnglishStrings),
		[componentBStringsKey]: generateValues(componentsObject, componentBStringsKey, componentBEnglishStrings),
		[languagePickerStringsKey]: generateValues(componentsObject, languagePickerStringsKey, languagePickerEnglishStrings),
		Shared: {
			appName: "Language Selection Test"
		}
	}
}
type ComponentStringsContextType = ReturnType<typeof generateComponentStringsContext>;

export const ComponentStringsContext = React.createContext<ComponentStringsContextType>(generateComponentStringsContext({components: {}}));
export const useGetComponentStringsContext = (): ComponentStringsContextType => {
	return useContext(ComponentStringsContext);
}