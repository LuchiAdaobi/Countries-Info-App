# Country-Info-App

# Country Information App

This is a React app that allows users to search for and view information about countries around the world. Users can enter a country name to search for, and the app will display country details, including name, capital city, population, currency, language, and more. The app also includes pagination functionality to display search results in a paginated manner.

## Features

- Search for country information based on a specific query.
- View country details such as name, capital city, population, currency, language, and more.
- Pagination to display search results in a paginated manner.

## Usage

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

## Install dependencies:

`npm install`

## Start the app:

`npm start`

## Search for Countries:

In the app's search bar, enter a country name to search for and press the "Search" button.

## View Country Details:

The app will display a list of countries matching the search query along with their details. Pagination buttons are available at the bottom to navigate through the search results.

## Pagination:

The pagination feature displays search results in a paginated manner. The app shows 10 countries per page. Navigate through the search results by using the "Previous" and "Next" buttons. The page numbers are displayed in the pagination bar, and the current page is highlighted.

If the search results contain more than 10 countries, pagination buttons will allow you to navigate through the pages. The pagination dynamically adjusts based on the available search results.

## Components
## App.js
The main component that handles the API request, search functionality, pagination, and displays the list of countries.

## Country.js
A component that displays individual country details, including name, capital city, population, currency, language, and a link to Google Maps.

## Technologies Used

- React
- REST Countries API
- CSS (for styling)