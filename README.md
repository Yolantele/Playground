# Native app

## Instructions

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

### Resolving Pod Build errors

1. link missing modules that did not link to ios or android build files:
   `react-native link @any-missing-module`

2. remove old ios/Podfile and install
   `pod clean` and `pod install`

3. remove old node modules and install:
   `rm -rf node_modules/ && yarn install`
