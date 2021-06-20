# Meet App
[Meet App](https://josephcoderprime.github.io/meet/)

## Project Objective:

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. This application uses the Google Calendar API to fetch upcoming events.

## Features & Requirements:
### Key Features and User stories
### Feature 1: FILTER EVENTS BY CITY
### User story
* As a user
* I should be able to “fILTER events by city”
* So that I can see the list of events that take place in that city
### Scenarios
#### Scenario 1: When the user hasn’t searched for a city, show upcoming events from all cities.
* Given the user hasn’t searched for any city
* When the user opens the app
* Then the user should see a list of all upcoming events

#### Scenario 2: User should see a list of suggestions when they search for a city.
* Given the main page is open
* When the user starts typing in the city textbox
* Then the user should see a list of city suggestions that match what they’ve typed.

#### Scenario 3: User can select a city from the suggested list.
* Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
* When the user selects a city (e.g. “Berlin, Germany”) from the list
* Then their city should be changed to that city (i.e. “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

### Feature 2: SHOW/HIDE AN EVENT'S DETAILS
### User story
* As a user
* I should be able to click on an event
* So that I can see more or less details about that event
### Scenarios
#### Scenario 1: An event element is collapsed by default
* Given the main page has loaded events
* When the user selects a city
* Then The user should see a list of events in that city by title and it should be collapsed by default.

#### Scenario 2: User can expand an event to see its details.
* Given The user can see a list of events.
* When user clicks an event 
* Then the event should expands to show further detail about that event.

#### Scenario 3: User can collapse an event to hide its details
* Given that an event was expanded with its details
* When the user clicks on hide details button
* Then the event should collapse to hide its details

### Feature 3: SPECIFY NUMBER OF EVENTS
### User story
* As a user
* I should to be able to specify the number of events I want to view in the app 
* so that I can see more or fewer events in the events list at once
### Scenarios
#### Scenario 1: When user hasn’t specified a number, 32 is the default number
* Given that 32 is the default number of events
* When a user loads the list of events
* Then the user should see 32 events by default

#### Scenario 2: User can change the number of events they want to see
* Given that an input field is there to change the number of events
* When the user inputs the number of events they want to see per page
* Then the user should see number of events as per user input

### Feature 4: USE THE APP WHEN OFFLINE
### User story
* As a user
* I should be able to use the app when offline
* so that I can see the events I viewed the last time I was online.
### Scenarios
#### Scenario 1: Show cached data when there’s no internet connection
* Given The user is not connected to the internet
* When the user opens the application
* Then the user can view the data saved in the cached.

#### Scenario 2: Show error when user changes the settings (city, time range)
* Given the user is not connected to the internet and they open the application
* When the user changes the settings (city, time range)
* Then the user should get an error message showing that you must connect to the internet to make changes

### Feature 5: DATA VISUALIZATION
### User story
* As a user
* I should be able to see a chart showing the upcoming events in each city 
* so that I know what events are organized in which city.
### Scenarios
#### Scenario 1: Show a chart with the number of upcoming events in each city
* Given that the user selected a city
* When the user clicks on that city's chart
* Then the user should see a chart displaying the number of events in that city


## Technical requirements:The app must be a React application.
* The app must be a React application.
* The app must be built using the TDD technique.
* The app must use the Google Calendar API and OAuth2 authentication flow.
* The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
* The app’s code must be hosted in a Git repository on GitHub.
* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
* The app must pass Lighthouse’s PWA checklist
* The app must work offline or in slow network conditions with the help of a service worker.
* Users may be able to install the app on desktop and add the app to their home screen on mobile
* The app must be deployed on GitHub Pages
* The application may be hosted online
* The API call must use React axios and async/await.
* The app must implement an alert system using an OOP approach to show information to the user.
* The app must make use of data visualization (recharts preferred).
* The app must be covered by tests with a coverage rate >= 90%.
* The app must be monitored using an online monitoring tool.


## How to Run

To run this project locally, run the following command, then navigate to the localhost port stated in your terminal.

```
npm start
```
