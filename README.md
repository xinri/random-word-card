# English to German word card

## how to launch

npm start to run the application and a brower will be launch on localhost with the project on it.

## how to use

The toolbar (top bar) contains at the top right, 3 buttons that display the 3 features that will be describe below.

## Goal

The goal of this project, is to have some cards that represents German expression translated from English.
For this, we will have 3 features :

- "Random card generator" get randomly an english word and translate into German. 
- "Write card" allows to create a new card
- "Browse all cards" displays only one card and allow to go to the next or the previous in order to navigate through all the cards that has been seen.

## Technical topic.

The project is done with Material UI and use DeepL as a API translator.
This API is free but it needs to subscribe and enter a credit card even if the access to the API is free for 500 000 words per month.

For storing the API key, we have to create a .env file in the root directory (The file is provided but needs to be filled correctly).
If the API cannot be accessed (No API key or DeepL is not accessible), we have a fallback with default english/german words.

TODO : tests are still in pending.

Storing words is done through the Local storage.

=> Don't forget to create a .env.local with REACT_APP_API_KEY=XXXXX which XXXXX is your api key.
The API key have to be create in the DeepL API website : https://www.deepl.com/pro/change-plan#developer

The App file contains also the router to display the 3 features when we click on them (there are located on the top right of the page)

### Random card generator
This feature uses Card and Grid from material UI in order display the card.
A hook (useTranslationApi.js) will be use to call the API for translating the english words. In case of a problem, we have a table that contains few words for testing purpose.

A button is also provided in order to generate another translation.

If we want to improve the english word list, we only have to add more keys in the array that RandomCard.js.

### Write card
This feature allows the user to input an english word. We have two buttons : One in order to translate and the other to add in the list of card.
I decide to go with this instead of a dynamic one because of the 500 000 word contraints from the DeepL API limitation.

FIXME : in case of a translation error, I have some problem to get the error.

### Browse all cards
This feature will retrieve the localStorage in order to browse through all the keys.
It provides previous and next buttons in order to go through all the cards that had been visited in the random card generator or added with the write card.