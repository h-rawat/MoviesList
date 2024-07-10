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
