# React Native Navigation Example

This project is a simple React Native application where I explored the basics of navigation in React and React Native using the React Navigation library. The focus is on understanding how to implement stack navigation in a React Native app.

## About the Project

This project is an exercise in learning how to use React Navigation to handle navigation in a React Native application. I specifically focused on using the stack navigator to manage transitions between screens.

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) for running the app on an emulator or physical device.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/praveenraam/RN-Navigation.git
    ```

2. Navigate to the project directory:

    ```bash
    cd RN-Navigation
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Install the necessary React Navigation packages:

    ```bash
    npm install @react-navigation/native @react-navigation/stack
    npm install react-native-screens react-native-safe-area-context
    ```

5. For iOS, make sure to install the CocoaPods dependencies:

    ```bash
    cd ios
    pod install
    cd ..
    ```

### Running the App

To start the application, use the following commands:

- For iOS:

    ```bash
    npx react-native run-ios
    ```

- For Android:

    ```bash
    npx react-native run-android
    ```

## Usage

Once the app is running, you can navigate between different screens using the stack navigator. The basic implementation includes a few screens demonstrating how to:

- Navigate from one screen to another.
- Pass parameters between screens.
- Use the stack navigator to manage back actions.

## Acknowledgments
React Navigation Documentation - The official documentation for learning React Navigation.
The React and React Native communities for their helpful resources and guides.
