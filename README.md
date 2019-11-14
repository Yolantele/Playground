# Native app

### Prerequisites

- xCode and Simulator
- Android studio and emulator

### To Start the Application

1. clone the repo
2. then install all the dependancies:
   `yarn install`
   `cd ios/`
   `pod install`
   `cd ..`
3. Run the app on ios :
   `yarn run s`

### Resolving Pod Build errors:

0. link missing modules that did not link to ios or android build files:
   `react-native link @any-missing-module`

1. remove old ios/Podfile and install
   `pod clean && pod install`

1. remoce old node modules and install:
   `rm -rf node_modules/ && yarn install`
