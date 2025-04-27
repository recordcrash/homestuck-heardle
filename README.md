# Homestuck Heardle

![alt text](image.png)

A Homestuck song guessing game hosted at https://heardle.homestuck.net. Every day, there's a new song and you get a few attempts to guess it with increasingly more playtime. Then, you can share your stats in the Homestuck Discord.

There's a script to convert [hsmusic-wiki](https://github.com/hsmusic/hsmusic-data/) data into usable data for the app, you'll need to run this every time new albums come out if you want those songs to propagate.

Forked from [sarvarghese](https://github.com/sarvarghese/)'s clone of [Shizerq](https://github.com/Shizerq/sluchajfun)'s
clone of famous [Heardle](https://heardle.app) - "that daily music game".

Uses the YouTube iFrame API.

# Building (default React stuff)
In the project directory, you can run:

### `yarn`
Installs all the required dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!