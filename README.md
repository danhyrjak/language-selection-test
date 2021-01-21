# Language Selection Test

## Overview

Test application to play arround with ideas for implmenting a language selector for a SPA written in React.

## Detail

Idea is to inject strings grouped by component/sector into components using a custom hook utilising useContext.

The ComponentStringsContext provider wraps the application and provides the currently selected language strings to the rest of the application.

When adding strings, a default language (in this case English) is picked and values for these are hardcoded in the code.

A Langague Picker component has been written that sits under the App parent component and gets parsed in a method to reset the providers state (stored in the top level App component).

If the blank / default option for the Language Picker is choosen the defaults are used. If another option is choosen an API call is made to retrive a JSON file that should hold all the translations for the strings for the selected lanaguage code.

This file is parsed and if any required strings are missing the ones from the default language are used instead, when building up the context. Any additional string fields set are ignored.

See the [fr.json](/public/languages/fr.json) file for an example.
The [useGetComponentStrings](/src/hooks/useGetComponentStrings.ts) hooks file contains the core logic, exposing a generator function for building up a new instance of the ComponentStringsContext value.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing Locally

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Building for Production

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
