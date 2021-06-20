To run the application -

1. extract all the files into a folder.

2. open your terminal and write a command-
  npm install

3. once that is done. Execute command-
  npm start

4. This will open the app in development mode.

5. You can access the production build from-
  https://varinder148/github.io/flyingfalcon


If you are reading the code. This might help you-

1. all the selector's (which are being used by components to listen to state
  changes in redux store) names start with select.

2. 'Player plays the game' - keep this in mind and you'll
  be able to find the functions you are looking for.

3. almost 90% of the logic is sitting in util and action files,
  rest 10% is in Components, so not to overcomplicate things.

Ok, you are all set.
