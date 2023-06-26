# Create React Native Project from scratch with New Architecture | Basic Configuration | Linting | Prettier | Husky | Git Setup

> React Native is a JavaScript framework for writing real, natively rendering >mobile applications for iOS and Android. It’s based on React, Facebook’s >JavaScript library for building user interfaces, but instead of targeting the >browser, it targets mobile platforms.

## Follow the steps below to create project and basic setup

# 1.Open Terminal and run comment below :
```
npx react-native init <your project name>
```

# 2.Open the project :
```
 cd <your project name> or open project in vscode
```

# 3.Uninstall all linting config :
```
npm uninstall @react-native-community/eslint-config eslint

```

# 4.Add eslint and its dependencies:
```
 npm install eslint --save-dev && npx  eslint --init

```

# 5.Follow and select below options :
```
@eslint/create-config@0.4.1  Ok to proceed? (y)  -> Y

 ? How would you like to use ESLint? … 
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? … 
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? › No / Yes -> Yes

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

? How would you like to define a style for your project? … 
❯ Use a popular style guide
  Answer questions about your style

 Which style guide do you want to follow? … 
❯ Standard:https://github.com/standard/eslint-config-standard-with-typescript
  XO: https://github.com/xojs/eslint-config-xo-typescript

? What format do you want your config file to be in? … 
❯ JavaScript
  YAML
  JSON

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.28.0 eslint-config-airbnb@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.3 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-react-hooks@^4.3.0
? Would you like to install them now? › No / Yes  -> Yes

? Which package manager do you want to use? … 
   npm
 ❯ yarn
   Pnpm
```

# 6.Install prettier , parser, lint-staged under dev dependency:
```
yarn add -D prettier eslint-config-prettier @babel/eslint-parser lint-staged @babel/core eslint-plugin-react-native

```

# 7.Install TypeScript plugins related to ESLint :
```
 yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-import-resolver-typescript @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-prettier prettier
```

# 8.Install config-conventional, cli, commitizen, cz-conventional-changelog, husky under dev dependency
```
yarn add -D @commitlint/{config-conventional,cli} commitizen cz-conventional-changelog husky
```

# 9.Run below command to create and write commitlint.config.js
```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

# 10.Initialize git
```
git init
```

# 11.Run husky to add script and run the same as mentioned below :
```
npm pkg set scripts.prepare="husky install"
npm run prepare

npx husky add .husky/pre-commit ''
git add .husky/pre-commit

npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'
git add .husky/prepare-commit-msg

npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
git add .husky/commit-msg

```

# 12.Open .husky/pre-commit file and add below points
```
npm run lint &&
git add . &&
npx lint-staged &&
git add .

```

# 13. Open if exist .eslintrc.js and add below points , if needed more than this config add on appropriate category
```
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:prettier/recommended',
        'prettier',
    ],

    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: true },
        ],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
    },
};

```


# 14. Open if exist .prettierrc.js and add below points , if needed more than this config add on appropriate rules:
```
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 4,
  semi: true,
};

```


# 15.Open Package.json and check inside scripts below points are present and Copy Lint-staged and config , paste under scripts as shown below.
```
{
   …………
   "scripts": {
       "lint": "eslint . --fix",
       "prepare": "husky install",
   },
   "lint-staged": {
       "*.{js,jsx,ts,tsx}": [
           "prettier --write",
           "eslint --fix"
       ]
   },
   "config": {
      "commitizen": {
      "path": "cz-conventional-changelog"
     }
   },
 …………
}
```

# 16.Create .eslintignore file and add below content

```
.eslintrc.js
ios/
android/
*.config.js
```

# 17. Delete existing lines and add below lines in .gitignore

```
# vs code
.vscode
.vs

# OSX
.DS_Store

# Xcode
!**/*.xcodeproj
!**/*.pbxproj
!**/*.xcworkspacedata
!**/*.xcsettings
!**/*.xcscheme
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata
*.xccheckout
*.moved-aside
DerivedData
*.hmap
*.ipa
*.xcuserstate
project.xcworkspace
**/.xcode.env.local
build/

# Android/IntelliJ
build/
.idea
.gradle
local.properties
/packages/react-native/android/*
!/packages/react-native/android/README.md
*.iml
*.bundle
*.bin
*.apk
*.jprof
*.prof
*.lock
*.hprof
.cxx/
*.keystore
!debug.keystore


/android/app/src/main/res/drawable-hdpi
/android/app/src/main/res/drawable-mdpi
/android/app/src/main/res/drawable-xhdpi
/android/app/src/main/res/drawable-xxhdpi
/android/app/src/main/res/drawable-xxxhdpi
/android/app/src/main/res/raw


/packages/react-native-gradle-plugin/build/
/packages/rn-tester/build
/packages/rn-tester/android/app/.cxx/
/packages/rn-tester/android/app/build/
/packages/rn-tester/android/app/gradle/
/packages/rn-tester/android/app/gradlew
/packages/rn-tester/android/app/gradlew.bat
/packages/react-native/ReactAndroid/build/
/packages/react-native/ReactAndroid/.cxx/
/packages/react-native/ReactAndroid/gradle/
/packages/react-native/ReactAndroid/gradlew
/packages/react-native/ReactAndroid/gradlew.bat
/packages/react-native/ReactAndroid/external-artifacts/build/
/packages/react-native/ReactAndroid/external-artifacts/artifacts/
/packages/react-native/ReactAndroid/hermes-engine/build/
/packages/react-native/ReactAndroid/hermes-engine/.cxx/
/packages/react-native/template/android/app/build/
/packages/react-native/template/android/build/

# Android Studio
.project
.settings
.classpath

# node.js
yarn.lock
node_modules
*.log
.nvm
package-lock.json

# BUCK
*.keystore
.buckd
buck-out
/.lsp.buckd
/.lsp-buck-out
/packages/react-native/ReactAndroid/src/main/jni/prebuilt/lib/
/packages/react-native/ReactAndroid/src/main/gen

# fastlane
#
# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
# screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/
*/fastlane/report.xml
*/fastlane/Preview.html
*/fastlane/screenshots
*/fastlane/test_output

# Bundle artifact
*.jsbundle

# CocoaPods
/ios/Pods/
/ios/Podfile.lock
ios/Podfile.lock
ios/assets
/ios/assets
/vendor/bundle/

# Watchman
.watchmanconfig

# Test generated files
/packages/react-native/ReactAndroid/src/androidTest/assets/AndroidTestBundle.js
*.js.meta

/coverage
/third-party

# Test Reports
/reports

# Stack Dumps generated when programs crash (Ex. bash.exe.stackdump on Win)
*.stackdump

# Root dir shouldn't have Xcode project
/*.xcodeproj

# ReactCommon subdir shouldn't have Xcode project
/packages/react-native/ReactCommon/**/*.xcodeproj

# Libs that shouldn't have Xcode project
/packages/react-native/Libraries/FBLazyVector/**/*.xcodeproj
/packages/react-native/Libraries/RCTRequired/**/*.xcodeproj
/packages/react-native/React/CoreModules/**/*.xcodeproj
/packages/react-native/React/FBReactNativeSpec/**/*.xcodeproj
/packages/react-native-codegen/**/*.xcodeproj

# Ruby Gems (Bundler)
/packages/react-native/vendor
/packages/react-native/template/vendor
.ruby-version
/**/.ruby-version

# iOS / CocoaPods
/packages/react-native/template/ios/build/
/packages/react-native/template/ios/Pods/
/packages/react-native/template/ios/Podfile.lock
/packages/rn-tester/Gemfile.lock

# Ignore RNTester specific Pods, but keep the __offline_mirrors__ here.
/packages/rn-tester/Pods/*
!/packages/rn-tester/Pods/__offline_mirrors_hermes__
!/packages/rn-tester/Pods/__offline_mirrors_jsc__

# @react-native/codegen
/packages/react-native/React/FBReactNativeSpec/FBReactNativeSpec
/packages/react-native-codegen/lib
/packages/react-native-codegen/tmp/
/packages/react-native/ReactCommon/react/renderer/components/rncore/
/packages/rn-tester/NativeModuleExample/ScreenshotManagerSpec*
/**/RCTThirdPartyFabricComponentsProvider.*

# Additional SDKs
/packages/react-native/sdks/download
/packages/react-native/sdks/hermes
/packages/react-native/sdks/hermesc

# Android memory profiler files
*.hprof

# Temporary files created by Metro to check the health of the file watcher
.metro-health-check*

```

# 18.Commit the code to git , husky will auto lint and open its options for commit message.

```
git commit
```

# 19.  After commit , now run app , open terminal and enter below command
- Android
```
yarn android 
```

- Ios

```
yarn ios
```

