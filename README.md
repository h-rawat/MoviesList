# Expo React Native App

This is a React Native application developed using Expo.

## Prerequisites

Before you can run the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x.x or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (to install, run `npm install -g expo-cli`)
- [Android Studio](https://developer.android.com/studio) (with an Android emulator configured)

## Getting Started

Follow these steps to run the app locally:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/h-rawat/MoviesList.git
```

### 2. Navigate to the Project Directory

```bash
cd MoviesList
```

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Setup .Env File

Open the .env.example file for reference on how to setup the .env file, this is necessary to call the APIs

### 5. Start the expo server

```bash
npm start
```

### 6. Running on an Android Emulator

1. Open Android Studio and start an Android emulator.
2. In the terminal where you ran npm start, press `a` to open the app in the Android emulator.

# Troubleshooting

- If npm start doesn't work, try clearing the cache and starting again:

```bash
expo start -c
```

- Ensure that your Android emulator is running and properly configured in Android Studio.

- Make sure your mobile device and development machine are on the same network when running the app on a physical device.

### List of requirements covered

- Implemented this project in React Native instead of a web app
- Displayed a list of movies in descending order of popularity
- Show the movie title, image and rating on the card
- Show the genre, cast, director and short description related to movie in a modal which opens up when user clicks on the card
- Load a total of 20 movies for each year
- By default, when a user lands on the page, display a list of movies of the year 2012
- load movies of previous year when user scrolls up and load movies of next year when user scrolls down until the current year (little bug where previous year movies don't load when user tries to scroll down on first render)
- provided a genre filter at the top
  - when user selects "All", all other genres(if selected) are deselected since user wants to see movies of all genres
  - when user selects any genre other than "All", then "All" is deselected(if it was selected already) since user wants to see movies of a particular genre
- Didn't use any pre built component library
- Wrote well structured and maintainable code

### List of requirements that could not be covered

- Implement smooth scrolling behavior to load more movies as the user scrolls in
  any direction
