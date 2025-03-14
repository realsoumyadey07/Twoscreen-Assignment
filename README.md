# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## How to setup this project to your local machine:
# React Native Photo Gallery App

This is a React Native application that fetches and displays photos from an API in a grid format. The app includes a search bar and supports pull-to-refresh functionality.

## Prerequisites

Before installing the project, ensure you have the following installed:

- **Node.js** (>= 14.x recommended) - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)
- **React Native CLI** (Optional, for running with React Native CLI)
- **Expo CLI** (If using Expo) - `npm install -g expo-cli`
- **Android Studio** (for Android Emulator) OR an iOS device with Xcode (for iOS development)

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/realsoumyadey07/Twoscreen-Assignment.git
   cd Twoscreen-Assignment
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```
   OR
   ```sh
   yarn install
   ```

## Running the Project

### Using Expo (Recommended)

1. **Start the development server:**
   ```sh
   npx expo start
   ```
   OR
   ```sh
   yarn expo start
   ```

2. **Run on a device:**
   - Scan the QR code with the Expo Go app (iOS/Android)
   - Press `a` to run on an Android emulator
   - Press `i` to run on an iOS simulator (macOS only)

### Using React Native CLI

1. **Start Metro Bundler:**
   ```sh
   npx react-native start
   ```

2. **Run the app on Android:**
   ```sh
   npx react-native run-android
   ```

3. **Run the app on iOS:** (macOS only, requires Xcode)
   ```sh
   npx react-native run-ios
   ```

## Environment Variables

This project fetches images from an API. If required, create a `.env` file in the root directory and add your API key:

```env
EXPO_PUBLIC_ACCESS_KEY=your_api_key_here
```

Then, access it in the project using:
```javascript
const ACCESS_KEY = process.env.EXPO_PUBLIC_ACCESS_KEY;
```

## Troubleshooting

- **Metro bundler stuck?** Try clearing the cache:
  ```sh
  npx react-native start --reset-cache
  ```
- **Android build fails?** Ensure you have Android SDK installed and run:
  ```sh
  npx react-native doctor
  ```
- **iOS build fails?** Run:
  ```sh
  cd ios && pod install && cd ..
  ```

## Contributing

Feel free to fork and contribute! Open a pull request for any improvements or fixes.

## License

This project is licensed under the MIT License.

